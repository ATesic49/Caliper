import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { json } from "stream/consumers";



const toSlug = (name: String) => {
  const lowername = name.toLocaleLowerCase();
  const slug = lowername.replaceAll(" ", "-");
  return slug;
};
interface RucicaArray 
  {
    cena: number,
    materijal:{
      connect:{
        id:number
      }
    
  }
}
interface RucicaMaterijal  {
  cena:number,
  materijal:String
  }

function fromMaterijaltoCreate (materijal:RucicaMaterijal[]){
  const array:RucicaArray[] = []
  materijal.forEach((element: RucicaMaterijal) => {
    array.push(
      {
        cena: element.cena,
        materijal:{
          connect:{
            id:Number(element.materijal.split('-')[1])
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
        materijal, // Use the defined type here
      }: {
        image: string;
        name: string;
        opis: string;
        model: number;
        dimenzije: string;
        materijal: RucicaMaterijal[];
      } = req.body;



      const newRucica = await prisma.rucice.create({
        data:{
          image,
          name:name.toLowerCase(),
          opis,
          model,
          slug:toSlug(name),
          dimenzije,
          rucicaMaterijal:{
            create:fromMaterijaltoCreate(materijal)
          }
        }
      })
      



        return res.status(200).json(newRucica)
    }else{
      return res.status(401).json({greska:'Greska'})
    }
  }
