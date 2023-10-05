import { NextApiRequest, NextApiResponse } from "next"
import * as jose from "jose"
import jwt from "jsonwebtoken"
import prisma from "@/lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bearerToken = req.headers["authorisation"] as string

  if (!bearerToken)
    return res.status(401).json({ errorMessage: "Unauthorised request" })

  const token = bearerToken.split(" ")[1]

  if (!token)
    return res.status(401).json({ errorMessage: "Unauthorised request" })

  const secret = new TextEncoder().encode(process.env.SECRET)

  try {
    await jose.jwtVerify(token, secret)
  } catch (e) {
    return res.status(401).json({
      errorMessage: "Unauthorised request",
    })
  }

  const payload = jwt.decode(token) as { email: string }

  if (!payload.email) {
    return res.status(401).json({ errorMessage: "Unauthorised request" })
  }

  const user = await prisma.user.findUnique({ where: { email: payload.email } })

  return res.json({ user })
}
