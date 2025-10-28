import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
    passwordHash: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email address is required'],
        unique: true,
        trim: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    role: {
        type: String,
        enum: ['superadmin', 'admin', 'moderator'],
        default: 'admin'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;