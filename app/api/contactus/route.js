import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json(); // Get data from the form submission

  // Create a transporter using Hostinger's SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',  // Hostinger SMTP server
    port: 587,                   // Port for TLS (use 465 for SSL)
    secure: false,               // Use TLS (set to true for SSL)
    auth: {
      user: process.env.EMAIL_USER,  // Your Hostinger email address (used for authentication)
      pass: process.env.EMAIL_PASS,  // Your Hostinger email password or app-specific password
    },
  });

  // Setup email content for the user (confirmation email)
  const userMailOptions = {
    from: process.env.EMAIL_USER,  // Sender should match authenticated email
    to: email,  // Send confirmation email to the user
    subject: `Thank you for reaching out, ${name}`,
    text: `Hello ${name},\n\nThank you for contacting us. We have received your message and will get back to you shortly.\n\nYour message:\n\n${message}`,
    html: `<p><strong>Hello ${name},</strong></p><p>Thank you for contacting us. We have received your message and will get back to you shortly.</p><p><strong>Your message:</strong></p><p>${message}</p>`,
  };

  // Setup email content for the admin (notification email)
  const adminMailOptions = {
    from: process.env.EMAIL_USER,  // Sender should match authenticated email
    to: process.env.EMAIL_USER,    // Admin email address (can also be a separate email for the admin)
    subject: `New Message from ${name}`,
    text: `You have received a new message from ${name}.\n\nName: ${name}\nEmail: ${email}\nMessage:\n\n${message}`,
    html: `<p><strong>You have received a new message from ${name}.</strong></p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
  };

  try {
    // Send email to the user (confirmation)
    await transporter.sendMail(userMailOptions);

    // Send email to the admin (notification)
    await transporter.sendMail(adminMailOptions);

    // Respond with a success message
    return new Response(JSON.stringify({ message: 'Emails sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending emails:', error);
    return new Response(JSON.stringify({ message: 'Failed to send emails' }), { status: 500 });
  }
}
