import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");
// const email = process.env.EMAIL;
// const pass = process.env.EMAIL_PASS;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, text, ime, prezime } = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "andrijadj96@gmail.com",
        pass: "jvylptuuooehcqpo",
      },
    });
    const mailOptions = {
      from: email,
      to: "andrijadj96@gmail.com",
      subject:`${ime} ${prezime}`,
      html: `<h1>${ime} ${prezime}</h1>
      <p>${text}</p>
      
      from <a href="mailto:${email}">${email}</a>
      `,
    };
    const mailOptionss = {
      from: "andrijadj96@gmail.com",
      to: email,
      subject:`Dragi ${ime}`,
      text: `Postovani,
      Primili smo vasu poruku i zelimo da Vas obvestimo da cemo u najkracem  roku odgovoriti na nju.
      
      
      Vas Caliper`,
    };
    try {
      await transporter.sendMail({
        ...mailOptions,
      });
      await transporter.sendMail({
        ...mailOptionss,
      });

      return res.json({ status: "success" });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.writeHead(302, "Bad request", { Location: "/" }).end();
}
