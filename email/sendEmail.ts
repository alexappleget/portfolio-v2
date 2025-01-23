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
        <p style="font-size: 16px; color: #555;"><strong>Name:</strong> ${contactInfo.name}</p>
        <p style="font-size: 16px; color: #555;"><strong>Email:</strong> <a href="mailto:${contactInfo.email}" style="color: #007bff;">${contactInfo.email}</a></p>
        <div style="margin-top: 10px;">
          <p style="font-size: 16px; color: #333;"><strong>Message:</strong></p>
          <p style="font-size: 16px; color: #444;">${contactInfo.message}</p>
        </div>
      `,
    });

    const response = "Email successfully sent!";

    return response;
  } catch {
    throw new Error("There was a problem sending your email.");
  }
};
