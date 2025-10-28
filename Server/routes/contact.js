import express from "express";
import { redirectEmail } from "../services/emailService.js";
import Email from "../models/email.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import Setting from "../models/setting.js";

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        const newEmail = {
            name: req.body.name,
            from: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
        }
        const response = Email.create(newEmail);
        const setting =await Setting.find({}, {Notification: true, _id: false});
        const notification = setting[0].Notification;
        if(notification){
            redirectEmail(req.body.name, req.body.email, req.body.subject, req.body.message, 'Contact Form');
        }
        res.status(200).json({success: true, message: "Form submitted successfully"});
    }catch(err){
        console.log(err);
        res.status(500).json({success: false, message: "Failed to submit form. Please try again later."});
    }
})

router.get('/', verifyToken, async (req, res) => {
    try{
        const emails = await Email.find();
        console.log(emails);
        res.send({success: true, emails});
    }catch(err){
        console.log(err);
        res.status(500).json({success: false, message: "Failed to fetch emails. Please try again later."});
    }
});

router.delete('/', verifyToken, async (req, res) => {
    try{
        await Email.deleteMany({});
        res.status(200).json({success: true, message: "All emails deleted successfully"});
    }catch(err){
        res.status(500).json({success: false, message: "Failed to delete emails. Please try again later."});
    }
});

router.delete('/:id',verifyToken, async (req, res) => {
    console.log(req.params.id);
    try{
        const deletedEmail = await Email.findByIdAndDelete(req.params.id);
        if(!deletedEmail){
            console.log("Email not found");
            return res.status(404).json({
                success: false, 
                message: "Email not found"
            });
        }
        res.status(200).json({ 
            success: true, 
            message: "Email deleted successfully" 
        });
    }catch(err){
        res.status(500).json({success: false, message: "Failed to delete email. Please try again later."});
    }
});
export default router;