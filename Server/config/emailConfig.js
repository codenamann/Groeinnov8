import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
import axios from "axios";

let sendEmail = async (toEmail, subject, htmlContent) => {};

if (process.env.BREVO_API_KEY) {
    sendEmail = async (fromEmail, toEmail, subject, htmlContent) => {
        let response;
        try {
          response = await axios.post(
            'https://api.brevo.com/v3/smtp/email',
            {
              sender: { name: 'Admin Panel', email: fromEmail },
              to: [{ email: toEmail }],
              subject: subject,
              htmlContent: htmlContent
            },
            {
              headers: {
                'api-key': process.env.BREVO_API_KEY,
                'Content-Type': 'application/json',
              },
            });
        } catch (error) {
            console.error('Error sending email via Brevo:', error);
            throw error;
        }
        return response;
    }
}else{
    console.log('No email service configuration found in environment variables.');
}

export { sendEmail };