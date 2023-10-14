import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
import jwt from "jsonwebtoken";
import prisma from "./lib/prisma";

export async function middleware(req: NextRequest, res: NextResponse) {
  const bearerToken = req.headers.get("authorisation") as string;

  if (!bearerToken)
    // return res.status(401).json({ errorMessage: "Unauthorised request" })
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorised request" }),
      { status: 401 }
    );
  const token = bearerToken.split(" ")[1];

  if (!token)
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorised request" }),
      { status: 401 }
    );
  const secret = new TextEncoder().encode(process.env.SECRET);

  try {
    await jose.jwtVerify(token, secret);
  } catch (e) {
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorised request" }),
      { status: 401 }
    );
  }

  const payload = jwt.decode(token) as { email: string };

  if (!payload.email) {
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorised request" }),
      { status: 401 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  return new NextResponse(JSON.stringify({ user }), { status: 200 });
}
export const config = {
  matcher: ["/api/logInRegister/me"],
};
