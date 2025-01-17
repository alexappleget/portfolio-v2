"use server";

import nodemailer from "nodemailer";

interface ContactInfoProps {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (contactInfo: ContactInfoProps) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: "Your Portfolio <noreply@alexappleget.com>",
      to: process.env.EMAIL_USER,
      subject: "New Message From Your Portfolio!",
      html: `
        A new person reached out!

        Name: ${contactInfo.name}
        Email: ${contactInfo.email}
        Message: ${contactInfo.message}
      `,
    });

    const response = "Email successfully sent!";

    return response;
  } catch {
    throw new Error("There was a problem sending your email.");
  }
};
