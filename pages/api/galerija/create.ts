import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { error } from "console";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('DOSAO JE SAMO NIJE POST IZ NEKOG RAZLOGA')
  if (req.method === "POST") {
    console.log('POST JE')
    const { name,image, boje, description } = req.body;
    console.log(name,image,boje,description)
    const dugaciji = await prisma.galerija.findFirst({
      where: {
        name,
      },
    });
    console.log('PRONADJEN JE DTUGACIJI')
    if (!dugaciji) {
      const newProizvod = await prisma.galerija.create({
        data: {
          name,
          image,
          boje,
          description,
        },
      });
      console.log("KREIRALI SU GA HVALIM TE BOZE")
      res.status(200).json({ newProizvod });
    }
    console.log('Vec Postoji Proizvod')
    res.status(401).json({ error: "Ovaj proizvod vec postoji" });
  }else{
    console.log('O% 305')

    res.status(405).json({errorMessage:'Pogresan Request'})
  }
  
}
