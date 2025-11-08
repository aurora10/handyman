import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message, token } = await req.json();

  if (!name || !email || !message || !token) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: "POST",
      }
    )
    const data = await response.json()

    if (!data.success || data.score < 0.5) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: 'Contact mail from Handyman',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while sending the email.' }, { status: 500 });
  }
}