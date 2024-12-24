import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // Capture and log the raw request body for debugging
    const rawBody = await req.text();
    console.log('Raw Request Body:', rawBody);

    // Parse the request body
    const { name, email, phone, service, time } = JSON.parse(rawBody);

    // Validate required fields
    if (!name || !email || !phone || !service || !time) {
      return new Response(
        JSON.stringify({ message: 'All fields are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Email templates
    const userTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #bf6159; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { padding: 20px; background-color: #fff; border: 1px solid #feede5; border-radius: 0 0 8px 8px; }
          .appointment-details { background-color: #feede5; padding: 15px; margin: 20px 0; border-radius: 8px; }
          .footer { text-align: center; padding: 15px; font-size: 12px; color: #bf6159; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Appointment Confirmation</h1>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for booking your appointment. Here are your details:</p>
            <div class="appointment-details">
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Preferred Time:</strong> ${time}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
            </div>
            <p>Please arrive 10 minutes early and call us at +919405631363 for rescheduling.</p>
          </div>
          <div class="footer">
            <p>Hemkanti Clinics, Pimple Saudagar, Pune</p>
            <p>Phone: +919405631363 | Email: support@hemkanti.com</p>
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
          body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #bf6159; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { padding: 20px; background-color: #fff; border: 1px solid #feede5; border-radius: 0 0 8px 8px; }
          .details { background-color: #feede5; padding: 15px; margin: 20px 0; border-radius: 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Appointment</h2>
          </div>
          <div class="content">
            <div class="details">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Preferred Time:</strong> ${time}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email to the user
    await transporter.sendMail({
      from: 'support@hemkanti.com',
      to: email,
      subject: 'Appointment Confirmation - Hemkanti Clinics',
      html: userTemplate,
    });

    // Send email to the admin
    await transporter.sendMail({
      from: 'support@hemkanti.com',
      to: 'support@hemkanti.com',
      subject: `New Appointment - ${service}`,
      html: adminTemplate,
    });

    // Success response
    return new Response(
      JSON.stringify({ success: true, message: 'Appointment booked successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error.message);

    // Error response
    return new Response(
      JSON.stringify({ success: false, message: 'An error occurred during submission. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
