import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, image, boje, description } = req.body;
    const dugaciji = await prisma.galerija.findFirst({
      where: {
        name,
      },
    });
    if (!dugaciji) {
      const newProizvod = await prisma.galerija.create({
        data: {
          name,
          image,
          boje,
          description,
        },
      });
      res.status(200).json({ newProizvod });
    }
    res.status(401).json({ error: "Ovaj proizvod vec postoji" });
  }
}
