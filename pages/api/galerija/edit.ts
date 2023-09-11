import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name,image, boje, description,id } = req.body;
    console.log(name,image,boje,description,id)


    try{

    }catch(e:any){
      console.log(e)
    }
   
      const newProizvod = await prisma.galerija.update({
        where:{
            id
        },
        data:{
          name,
          image,
          boje,
          description
        }
      });
      res.status(200).json({ newProizvod });
    res.status(401).json({ error: "Ovaj proizvod vec postoji" });
  }
}
