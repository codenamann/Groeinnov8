import dotenv from 'dotenv';
import mongoose, { Schema } from 'mongoose';
dotenv.config();

const settingSchema = new Schema({
    _id : {
        type: String,
        default: 'app_settings'
    },
    toEmail: {
        type: String,
        required: [true, 'To redirect email is required'],
        default: process.env.TO_EMAIL
    },
    Notification:{
        type: Boolean,
        required:[true, 'Notification On or Off is required'],
        default: true
    }
});

const Setting = mongoose.model('Setting', settingSchema);
export default Setting;