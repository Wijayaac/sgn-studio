"use server";

import { redirect } from "next/navigation";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function sendEmail(formData: FormData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.SMTP_USERNAME,
    to: "Sgnstudio09@gmail.com",
    subject: `Message from ${rawFormData.name} <${rawFormData.email}>`,
    replyTo: rawFormData.email as string,
    html: `<p>Nama : ${rawFormData.name}</p><p>Email pengirim: ${rawFormData.email}</p><p>Pesan : ${rawFormData.message}</p>`,
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
  } catch (error) {
    console.error(error);
  }
  redirect("/thank-you");
}
