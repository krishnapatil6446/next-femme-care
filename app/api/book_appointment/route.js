import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, service, time } = await req.json();

    if (!name || !email || !phone || !service || !time) {
      return new Response(
        JSON.stringify({ message: 'All fields are required' }),
        { status: 400 }
      );
    }

    const userTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #bf6159; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #ffffff; padding: 30px; border: 1px solid #feede5; border-radius: 0 0 8px 8px; }
        .appointment-details { background: #feede5; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; padding: 20px; color: #bf6159; font-size: 14px; }
        .important-note { background: #feede5; padding: 15px; border-radius: 8px; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Appointment Confirmation</h1>
          <div>Hemkanti Clinics</div>
        </div>
        <div class="content">
          <h2>Thank you for booking your appointment, ${name}!</h2>
          <p>We're looking forward to seeing you. Here are your appointment details:</p>
          
          <div class="appointment-details">
            <h3>Appointment Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Preferred Time:</strong> ${time}</p>
            <p><strong>Contact:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>

          <div class="important-note">
            <h3>Important Notes:</h3>
            <ul>
              <li>Please arrive 10 minutes before your appointment time</li>
              <li>Bring any relevant medical records or reports</li>
              <li>For rescheduling, please call +919405631363</li>
            </ul>
          </div>
        </div>
        <div class="footer">
          <p>Hemkanti Clinics</p>
          <p>Off No:207, Commerce Centre, Shivar Garden Road</p>
          <p>Pimple Saudagar, Pune, (MH), India -411017</p>
          <p>Email: support@hemkanti.com | Phone: +919405631363</p>
        </div>
      </div>
    </body>
    </html>
    `;

    const adminTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #bf6159; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #ffffff; padding: 30px; border: 1px solid #feede5; border-radius: 0 0 8px 8px; }
        .booking-details { background: #feede5; padding: 20px; border-radius: 8px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Appointment Booking</h2>
        </div>
        <div class="content">
          <div class="booking-details">
            <h3>Booking Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Preferred Time:</strong> ${time}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <p>Timestamp: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
    `;

    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: 'support@hemkanti.com',
      to: email,
      subject: 'Your Appointment Confirmation - Hemkanti Clinics',
      html: userTemplate,
    });

    await transporter.sendMail({
      from: 'support@hemkanti.com',
      to: 'support@hemkanti.com',
      subject: `New Appointment: ${service} - ${name}`,
      html: adminTemplate,
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