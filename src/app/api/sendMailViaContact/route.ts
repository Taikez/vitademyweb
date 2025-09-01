import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();
  const { name, workspace, email, phone, inquiry } = data;

  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER, // SMTP username from .env.local
      pass: process.env.MAILTRAP_PASS, // SMTP password from .env.local
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "juliannardita@gmail.com", // for testing
      subject: `VITAWEB (Contact Form Submission): Message From ${name}`,
      text: `
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Workspace:</strong> ${workspace}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Message:</strong> ${inquiry}</p>
            `,
    });
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Nodemailer error:", err);
    return NextResponse.json(
      { error: "Email failed to send" },
      { status: 500 }
    );
  }
}
