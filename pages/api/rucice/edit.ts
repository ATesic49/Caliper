import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { json } from "stream/consumers";
import { connect } from "http2";



const toSlug = (name: String) => {
  const lowername = name.toLocaleLowerCase();
  const slug = lowername.replaceAll(" ", "-");
  return slug;
};
interface RucicaUpdate{
  where:{
    rucicaId_materijalId:{
      rucicaId:number,
      materijalId:number
    }
  },
  data:{
    cena:number,
    materijal:{
      connect:{
        id:number
      }
    }
  }
}[]

interface RucicaMaterijal  {
  cena:number,
  materijal:String
  }

function fromMaterijaltoUpdate (materijal:RucicaMaterijal[],rucicaId:number){
  const array:RucicaUpdate[] = []
  materijal.forEach((element: RucicaMaterijal) => {
    array.push(
      {
        data:{
          cena:element.cena,
          materijal:{
            connect:{
              id:Number(element.materijal.split('-')[1])
            }}
        },
        where:{
          rucicaId_materijalId:{
            rucicaId:rucicaId,
            materijalId:Number(element.materijal.split('-')[1])
          }
      }
    }
    )
  });
  return array

}





export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ){
    if(req.method==='POST'){
    const  {
        image,
        name,
        opis,
        model,
        dimenzije,
        materijal,
        id // Use the defined type here
      }: {
        id:number;
        image: string;
        name: string;
        opis: string;
        model: number;
        dimenzije: string;
        materijal: RucicaMaterijal[];

      } = req.body;
      console.log('ASIDJSAIDJSAIDJSAJDI')



      const newRucica = await prisma.rucice.update({
        where:{
            id
        },
        data:{
          image,
          name:name.toLowerCase(),
          opis,
          model,
          slug:toSlug(name),
          dimenzije,
          rucicaMaterijal:{
            update:fromMaterijaltoUpdate(materijal,id)
          }
        }
      })




        return res.status(200).json(newRucica)
    }else{
      return res.status(401).json({greska:'Greska'})
    }
  }
