import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
// TODO: set recipient to the actual email address

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.SMTP_USERNAME,
    to: process.env.SMTP_USERNAME,
    subject: `Message from ${name} <${email}>`,
    replyTo: email,
    html: `<p>Nama : ${name}</p><p>Email : ${email}</p><p>Pesan : ${message}</p>`,
  };

  const sendMailPromise = () => {
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error.message);
        } else {
          resolve(info.response);
        }
      });
    });
  };

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
