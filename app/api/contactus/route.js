import nodemailer from 'nodemailer';
import Cors from 'cors';

// Initialize CORS middleware
const cors = Cors({
  methods: ['POST'], // Allow only POST requests
  origin: '*', // Replace '*' with your specific origin for security
});

// Helper to run middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run CORS middleware
  try {
    await runMiddleware(req, res, cors);
  } catch (err) {
    console.error('CORS error:', err);
    return res.status(500).json({ message: 'CORS error occurred' });
  }

  // Allow only POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  // Parse JSON payload
  let payload;
  try {
    payload = JSON.parse(req.body); // For serverless, use req.body directly
  } catch (err) {
    console.error('Error parsing JSON:', err);
    return res.status(400).json({ message: 'Invalid JSON payload' });
  }

  const { name, email, message } = payload;

  // Validate input fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required' });
  }

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // User email template
  const userTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #bf6159; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #ffffff; padding: 30px; border: 1px solid #feede5; border-radius: 0 0 8px 8px; }
        .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        .message-box { background: #feede5; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; padding: 20px; color: #bf6159; font-size: 14px; }
        .button { background: #bf6159; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">Hemkanti Clinics</div>
          <div>Healthcare Excellence</div>
        </div>
        <div class="content">
          <h2>Thank you for reaching out, ${name}!</h2>
          <p>We appreciate you contacting Hemkanti Clinics. We have received your message and will respond shortly.</p>
          
          <div class="message-box">
            <h3>Your Message:</h3>
            <p>${message}</p>
          </div>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} Hemkanti Clinics</p>
          <p>Email: support@hemkanti.com | Phone: +919405631363</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Admin email template
  const adminTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #bf6159; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #ffffff; padding: 30px; border: 1px solid #feede5; border-radius: 0 0 8px 8px; }
        .message-box { background: #feede5; padding: 20px; border-radius: 8px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
          <h3>Contact Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h3>Message:</h3>
          <p>${message}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Email options
  const userMailOptions = {
    from: 'support@hemkanti.com',
    to: email,
    subject: `Thank you for contacting Hemkanti Clinics, ${name}`,
    html: userTemplate,
  };

  const adminMailOptions = {
    from: 'support@hemkanti.com',
    to: 'support@hemkanti.com',
    subject: `New Contact Form Submission from ${name}`,
    html: adminTemplate,
  };

  // Send emails
  try {
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);
    return res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    return res.status(500).json({ message: 'Failed to send emails' });
  }
}
