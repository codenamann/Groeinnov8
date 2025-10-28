import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import Setting from "../models/setting.js";
const router = express.Router();

router.get('/' , verifyToken, async (req, res)=>{
    try{
        const settings = await Setting.find();
        console.log(settings);
        res.send({success: true, settings, message: "Settings fetched successfully"});
    }catch(err){
        console.log(err);
        res.status(500).json({success: false, message: `Error while fetching settings : ${err}` })
    }
})

router.get('/to-email', async(req, res)=> {
})

router.patch('/notification-toggle',verifyToken, async(req, res)=> {
    const {Notification} = req.body;
    try{
        const notification = await Setting.findOneAndUpdate({}, {Notification}, {new:true});
        res.status(200).json({success:true, message: `Notification setting updated : ${notification}`});
    }catch(err){
        console.log(err);
        res.status(500).json({success:false, message: `Failed to update settings : ${err}`});
    }
})

router.patch('/', async(req, res)=> {
    const updates = req.body;
    const settings = await Setting.findByIdAndUpdate("app_settings", updates, {
      new: true,
      upsert: true,
    });
    res.json(settings);
})

export default router;