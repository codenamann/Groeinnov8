import mongoose, {Schema} from "mongoose";

const emailSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Sender name is required'],
    },
    from: {
        type: String,
        required: [true, 'Recipient email address is required'],
    },
    subject: {
        type: String,
        required: [true, 'Email subject is required'],
    },
    message: {
        type: String,
    },
    sentAt: {
        type: Date,
        default: Date.now
    }
});

const Email = mongoose.model('Email', emailSchema);
export default Email;