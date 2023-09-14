import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { error } from "console";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
    if(req.method==='POST'){
        const {id} = req.body
        console.log(id)
try{
const deletedItem = await prisma.galerija.delete({
  where:{
    id
  }
})
console.log(deletedItem)
}catch(e){
  return res.status(401)
}



      return  res.status(200).json({id:id})
    }
    return res.status(401)
}