import {sendEmail} from "../config/emailConfig.js";

export async function sendVerificationEmail( to, otp, subject, forWhat ){
    let htmlContent;
    if( forWhat === 'Signup Verification' ){
        htmlContent = 
        `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="margin: 0; font-size: 28px;">Admin Portal</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Email Verification</p>
                </div>
                
                <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
                <h2 style="color: #333; margin-top: 0;">OTP Verification</h2>
                <p style="color: #666; font-size: 16px; line-height: 1.6;">
                    Hello Admin,
                </p>

                <p style="color: #666; font-size: 16px; line-height: 1.6;">
                    You have requested to access the Admin Portal. Please use the following OTP to verify your email:
                </p>
                
                <div style="background: #fff; border: 2px dashed #667eea; border-radius: 8px; padding: 20px; text-align: center; margin: 20px 0;">
                    <h1 style="color: #667eea; font-size: 36px; margin: 0; letter-spacing: 5px; font-family: 'Courier New', monospace;">${otp}</h1>
                </div>
                
                <p style="color: #666; font-size: 14px; line-height: 1.6;">
                    This OTP is valid for 5 minutes. If you didn't request this, please ignore this email.
                </p>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                    <p style="color: #999; font-size: 12px; margin: 0;">
                    This is an automated message from Admin Portal.
                    </p>
                </div>
                </div>
            </div>
        `
    } else if( forWhat === 'Email Verification' ){
        htmlContent = 
        `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="margin: 0; font-size: 28px;">Admin Portal</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Email Verification</p>
                </div>
                
                <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
                <h2 style="color: #333; margin-top: 0;">OTP Verification</h2>
                <p style="color: #666; font-size: 16px; line-height: 1.6;">
                    Hello Admin,
                </p>

                <p style="color: #666; font-size: 16px; line-height: 1.6;">
                    You have requested to verify Email for form submissions. Please use the following OTP to verify your email:
                </p>
                
                <div style="background: #fff; border: 2px dashed #667eea; border-radius: 8px; padding: 20px; text-align: center; margin: 20px 0;">
                    <h1 style="color: #667eea; font-size: 36px; margin: 0; letter-spacing: 5px; font-family: 'Courier New', monospace;">${otp}</h1>
                </div>
                
                <p style="color: #666; font-size: 14px; line-height: 1.6;">
                    This OTP is valid for 5 minutes. If you didn't request this, please ignore this email.
                </p>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                    <p style="color: #999; font-size: 12px; margin: 0;">
                    This is an automated message from Admin Portal.
                    </p>
                </div>
                </div>
            </div>
        `
    }

    try{
        console.log("Sending email from:", process.env.BREVO_FROM_EMAIL);
        const info = await sendEmail(
            process.env.BREVO_FROM_EMAIL,
            to,
            subject,
            htmlContent
        );
        console.log("Email sent: ", info.data.messageId);
        return info;
    } catch (err) {
        console.error("Error sending email: ", err);
        throw err;
    }
}