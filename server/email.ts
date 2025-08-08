import { MailService } from '@sendgrid/mail';
import type { WaitlistEntry, ContactMessage } from '@shared/schema';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

const TEAM_EMAIL = 'teamlectureai@gmail.com';
const FROM_EMAIL = 'teamlectureai@gmail.com'; // Use verified SendGrid sender

export async function sendWaitlistNotification(entry: WaitlistEntry): Promise<boolean> {
  try {
    const emailContent = {
      to: TEAM_EMAIL,
      from: FROM_EMAIL,
      subject: '🎉 New Waitlist Signup - Lecture AI',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF7A00;">New Waitlist Signup!</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1E3A8A;">Contact Details:</h3>
            <p><strong>Name:</strong> ${entry.name || 'Not provided'}</p>
            <p><strong>Email:</strong> ${entry.email}</p>
            <p><strong>Signed up:</strong> ${new Date(entry.createdAt!).toLocaleString()}</p>
          </div>
          <p style="color: #666;">Someone just joined your waitlist for Lecture AI updates!</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #999;">This notification was sent automatically from your Lecture AI website.</p>
        </div>
      `,
      text: `
        New Waitlist Signup - Lecture AI
        
        Name: ${entry.name || 'Not provided'}
        Email: ${entry.email}
        Signed up: ${new Date(entry.createdAt!).toLocaleString()}
        
        Someone just joined your waitlist for Lecture AI updates!
      `
    };

    await mailService.send(emailContent);
    console.log(`✅ Waitlist notification sent for: ${entry.email}`);
    return true;
  } catch (error) {
    console.error('❌ Failed to send waitlist notification:', error);
    console.error('SendGrid Error Details:', JSON.stringify(error, null, 2));
    return false;
  }
}

export async function sendContactNotification(message: ContactMessage): Promise<boolean> {
  try {
    const emailContent = {
      to: TEAM_EMAIL,
      from: FROM_EMAIL,
      subject: '📧 New Contact Message - Lecture AI',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF7A00;">New Contact Message!</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1E3A8A;">Contact Details:</h3>
            <p><strong>Name:</strong> ${message.name}</p>
            <p><strong>Email:</strong> ${message.email}</p>
            <p><strong>Submitted:</strong> ${new Date(message.createdAt!).toLocaleString()}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #FF7A00; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1E3A8A;">Message:</h3>
            <p style="white-space: pre-wrap;">${message.message}</p>
          </div>
          <p style="color: #666;">Reply directly to this person at: <a href="mailto:${message.email}">${message.email}</a></p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #999;">This notification was sent automatically from your Lecture AI website.</p>
        </div>
      `,
      text: `
        New Contact Message - Lecture AI
        
        Name: ${message.name}
        Email: ${message.email}
        Submitted: ${new Date(message.createdAt!).toLocaleString()}
        
        Message:
        ${message.message}
        
        Reply directly to: ${message.email}
      `
    };

    await mailService.send(emailContent);
    console.log(`✅ Contact notification sent for: ${message.email}`);
    return true;
  } catch (error) {
    console.error('❌ Failed to send contact notification:', error);
    console.error('SendGrid Error Details:', JSON.stringify(error, null, 2));
    return false;
  }
}