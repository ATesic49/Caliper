import { NextApiRequest, NextApiResponse } from "next";
import * as jose from "jose";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bearerToken = req.headers["authorisation"] as string;
  console.log(bearerToken, "bearerTOken");
  if (!bearerToken)
    return res
      .status(401)
      .json({ errorMessage: "Unauthorised request,no bearer token" });

  // const token = bearerToken.split(" ")[1];
  const token = bearerToken;

  if (!token)
    return res
      .status(401)
      .json({ errorMessage: "Unauthorised request,no token atapp" });

  const secret = new TextEncoder().encode(process.env.SECRET);

  try {
    await jose.jwtVerify(token, secret);
  } catch (e) {
    return res.status(401).json({
      errorMessage: "Unauthorised request,no verify",
    });
  }

  const payload = jwt.decode(token) as { email: string };

  if (!payload.email) {
    return res
      .status(401)
      .json({ errorMessage: "Unauthorised request, no email" });
  }

  const user = await prisma.user.findFirst({
    where: { email: payload.email },
  });

  if (!user) return res.status(401).json({ errorMessage: "Greska" });

  return res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    hashedPassword: user.hashedPassword,
    colorId: user.colorId,
  });
}
