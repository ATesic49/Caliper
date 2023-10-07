import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { easing } from "@mui/material";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log("post");
    const { email, password } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user)
      return res
        .status(401)
        .json({ errorMessage: "Email i sifra ne odgovaraju" });
    const isMatch = await bcrypt.compare(password, user.hashedPassword);
    if (!isMatch)
      return res
        .status(401)
        .json({ errorMessage: "Email i sifra ne odgovaraju" });

    // HOSE
    const secret = new TextEncoder().encode(process.env.SECRET);
    const alg = "HS256";
    const token = await new jose.SignJWT({ email: user.email })
      .setProtectedHeader({ alg })
      .setExpirationTime("24h")
      .sign(secret);

    // HOSE

    return res.status(200).json({ token });
  } else return res.status(405).json({ errorMessage: "Unsupported request" });
}
