import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const e = await req;
  return res.status(200).json({ hello: e });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
