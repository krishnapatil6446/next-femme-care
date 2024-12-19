import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, service, time } = await req.json();

    // Validate input fields
    if (!name || !email || !phone || !service || !time) {
      return new Response(
        JSON.stringify({ message: 'All fields are required' }),
        { status: 400 }
      );
    }

    const message = `
      <html>
        <body>
          <h2>Appointment Details</h2>
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
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'pankajhadole4@gmail.com', // Your email address
      subject: 'New Appointment Booking',
      html: message,
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Appointment booked successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to send email. Please try again.' }),
      { status: 500 }
    );
  }
}
