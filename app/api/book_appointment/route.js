// app/api/book_appointment/route.js

import nodemailer from 'nodemailer';

// Handle POST request
export async function POST(req) {
  try {
    const { name, email, phone, service, time } = await req.json(); // Get the request body (use req.json() in Next.js 13)

    // Validate input fields
    if (!name || !email || !phone || !service || !time) {
      return new Response(
        JSON.stringify({ message: 'All fields are required' }),
        { status: 400 }
      );
    }

    // Create the email content
    const userMessage = `
      <html>
        <body>
          <h2>Thank you for Booking an Appointment</h2>
          <p>Dear ${name},</p>
          <p>Thank you for booking an appointment with us. Below are your appointment details:</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Preferred Time:</strong> ${time}</p>
          <p>We look forward to seeing you soon!</p>
        </body>
      </html>
    `;

    const adminMessage = `
      <html>
        <body>
          <h2>New Appointment Booking</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Preferred Time:</strong> ${time}</p>
        </body>
      </html>
    `;

    // Setup the transporter for nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',  // Hostinger SMTP server
      port: 587,                   // Port for TLS (465 for SSL, or 587 for TLS)
      secure: false,               // Use TLS (true for SSL, false for TLS)
      auth: {
        user: process.env.EMAIL_USER,  // Your email address
        pass: process.env.EMAIL_PASS,  // Your email password or App password
      },
    });

    // Send email to the user (confirmation)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email, // Send to the user's email
      subject: 'Appointment Booking Confirmation',
      html: userMessage,
    });

    // Send email to the admin (notification)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'support@hemkanti.com', // Admin email
      subject: 'New Appointment Booking',
      html: adminMessage,
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Appointment booked successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error.message);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to send email. Please try again.' }),
      { status: 500 }
    );
  }
}
