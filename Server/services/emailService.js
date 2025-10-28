import {sendEmail} from "../config/emailConfig.js";

export async function redirectEmail( name, replyto, subject, message, forWhat ){
    let htmlContent;
    if( forWhat === 'Contact Form' ){
        console.log("contact form");
        htmlContent = 
        `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="margin: 0; font-size: 28px;">Admin Portal</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">New Contact Form Submission</p>
            </div>
            
            <!-- Body -->
            <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
                <h2 style="color: #333; margin-top: 0;">Contact Form Details</h2>
                <p style="color: #666; font-size: 16px; line-height: 1.6;">
                    Hello Admin,
                </p>
                <p style="color: #666; font-size: 16px; line-height: 1.6;">
                    You have received a new message via the contact form. Here are the details:
                </p>

                <!-- Form Data Table -->
                <div style="background: #fff; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin: 20px 0;">
                    <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                    <p style="margin: 5px 0;"><strong>Email:</strong> ${replyto}</p>
                    <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
                    <p style="margin: 5px 0;"><strong>Message:</strong></p>
                    <p style="margin: 5px 0; padding: 10px; background: #f1f3f5; border-radius: 5px; color: #333;">${message}</p>
                </div>

                <p style="color: #666; font-size: 14px; line-height: 1.6;">
                    Please respond to the user promptly.
                </p>
                <div style="text-align: center; margin: 20px 0;">
                    <a href="mailto:${replyto}" 
                        style="display:inline-block; padding:10px 20px; background:#667eea; color:white; text-decoration:none; border-radius:5px;">
                        Reply to User
                    </a>
                </div>
                
                <!-- Footer -->
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                    <p style="color: #999; font-size: 12px; margin: 0;">
                        This is an automated message from Admin Portal.
                    </p>
                </div>
            </div>
        </div>`
    }

    try{
        const to = "namantiwari.dev@gmail.com"
        const info = await sendEmail(
            process.env.BREVO_FROM_EMAIL,
            to,
            subject,
            htmlContent
        );
        console.log("Email sent: ", info.data.messageId);
        return info;
    } catch (err) {
        throw err;
    }
}