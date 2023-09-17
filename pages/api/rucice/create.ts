import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { json } from "stream/consumers";



const toSlug = (name: String) => {
  const lowername = name.toLocaleLowerCase();
  const slug = lowername.replaceAll(" ", "-");
  return slug;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ){
    if(req.method==='POST'){
      const {image,name,opis,model,dimenzije}=req.body 

      const newRucica = await prisma.rucice.create({
        data:{
          image,
          name,
          opis,
          model,
          slug:toSlug(name),
          dimenzije,
          rucicaMaterijal:{
            create:[
              {
                cena: 2000,
                materijal:{
                  connect:{
                    id:1
                  }
                }
              },
              {
                cena:4000,
                materijal:{
                  connect:{
                    id:2
                  }
                }
              }
            ]
          }
        }
      })
      



        return res.status(200).json(newRucica)
    }
  }
