import { NextApiRequest, NextApiResponse } from "next";
import * as jose from "jose";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.headers);
  const bearerToken = req.headers["authorization"] as string;
  console.log(bearerToken, "bearerTOken");
  if (!bearerToken)
    return res
      .status(401)
      .json({ errorMessage: "Unauthorised request,no bearer token" });

  const token = bearerToken.split(" ")[1];

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
  const color = await prisma.userColor.findUnique({
    where: {
      id: user.colorId,
    },
  });
  if (!color) {
    return res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      hashedPassword: user.hashedPassword,
      hex: "#cf1f57",
    });
  }
  return res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    hashedPassword: user.hashedPassword,
    hex: color.hex,
  });
}
