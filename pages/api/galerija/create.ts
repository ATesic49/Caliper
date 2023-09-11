import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { error } from "console";
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
  }else{
    res.status(405).json({errorMessage:'Pogresan Request'})
  }
  
}
