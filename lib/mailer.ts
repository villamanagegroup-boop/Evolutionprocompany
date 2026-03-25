import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "evolutionprocompany@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const ADMIN_EMAIL = "evolutionprocompany@gmail.com";
