// utils/emailService.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendConfirmationEmail = async (to, bookingDetails) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: "Your booking is under processing",
    html: `<p>Hi, your booking ref is ${bookingDetails.ref}</p>`,
  });
};
