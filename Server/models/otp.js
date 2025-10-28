import mongoose, { Schema } from "mongoose";

export const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

const otpSchema = new Schema({
    email: {
        type : String,
        required: [true, 'Email address is required'],
        unique: true,
        trim: true,
    },
    passwordHash: {
        type: String,
        required: [true, 'Password hash is required'],
        minLength: [6, 'Password must be at least 6 characters long']
    },
    otp: {
        type: String,
        required: [true, 'OTP is required'],
        createdAt: {
            type: Date,
            default: Date.now,
            expires: 300 // OTP expires in 5 minutes
        }
    },
})

const OTP = mongoose.model('OTP', otpSchema);
export default OTP;