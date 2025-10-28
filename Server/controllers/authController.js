import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import OTP, { generateOTP } from '../models/otp.js';
import Admin from '../models/admin.js';
import { sendVerificationEmail } from '../services/emailVerification.js';
dotenv.config();

export const registerEmail = async (req, res) => {
    const { email, password, securityKey } = req.body;

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
        return res.status(400).json({ message : 'User already exists' });
    }

    if(securityKey === process.env.SECURITY_KEY){
        const otp = generateOTP();
        console.log(`Generated OTP for ${email}: ${otp}`);
        const ifUserExist = await OTP.findOne({ email });
        if(ifUserExist){
            try{
                await OTP.updateOne({ email }, { otp });
                const result = await sendVerificationEmail(email, otp, 'Your OTP for Admin Portal Signup', 'Signup Verification');
                console.log(result);
                return res.status(200).json({success: true, message: 'OTP sent successfully' });
            }catch(err){
                console.error('Error updating OTP or sending email:', err);
                return res.status(500).json({success: false, message: 'Internal server error' });
            }
            
        }
        const passwordHash = await bcrypt.hash(password, 10);
        const tempUser = { email, passwordHash, otp };
        try{
            await OTP.create(tempUser);
            const result = await sendVerificationEmail(email, otp, 'Your OTP for Admin Portal Signup', 'Signup Verification');
            return res.status(201).json({success: true, message: 'OTP sent successfully'});  
        }catch(err){
            console.error('Error creating temp user or sending email:', err);
            return res.status(500).json({success: false, message: 'Internal server error' });
        }
    }else{
        return res.status(403).json({success: false, message: 'Invalid security key' });
    }
}

export const verifyOTP = async (req, res) => {
    const { email, password, otp } = req.body;
    const admin = await OTP.findOne({ email });
    const isMatch = await bcrypt.compare(password, admin.passwordHash);
    if(!isMatch){
        return res.status(400).json({success: false, message: 'Invalid password' });
    }
    if(!admin){
        return res.status(400).json({success: false, message: 'User not found' });
    }
    if(admin.otp !== otp){
        return res.status(400).json({success: false, message: 'Invalid OTP' });
    }
    const newAdmin = new Admin({
        email,
        passwordHash: admin.passwordHash
    });
    await newAdmin.save();
    return res.status(200).json({success: true, message: 'OTP verified successfully' });
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const admin = await Admin.findOne({email});

    if(!admin){
        return res.status(401).json({success: false, message: 'Invalid email or password' });
    }
    
    const isMatch = await bcrypt.compare(password, admin.passwordHash);
    if(!isMatch){
        return res.status(401).json({success: false, message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id : admin._id, email: admin.email}, 
        process.env.JWT_SECRET, 
        { expiresIn: process.env.JWT_EXPIRES_IN || '1d' });
    return res.status(200).json({success: true, message: 'Login successful', token});
}