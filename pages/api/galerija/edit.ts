import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name,image, boje, description } = req.body;
    console.log(name,image,boje,description)
    const dugaciji = await prisma.galerija.findFirst({
      where: {
        name,
      },
    });
    if (dugaciji) {
      const newProizvod = await prisma.galerija.update({
        where:{
            name
        },
        data:{
          name,
        }
      });
      res.status(200).json({ newProizvod });
    }
    res.status(401).json({ error: "Ovaj proizvod vec postoji" });
  }
}
