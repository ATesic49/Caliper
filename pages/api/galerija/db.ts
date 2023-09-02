import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
export default async function handler(req:NextApiRequest,res:NextApiResponse){
        if (req.method==='GET'){
                try{
                        const proizvodi = await prisma.galerija.findMany()
                        console.log('proizvodii',proizvodi)
                        return res.status(200).json(proizvodi)
                }catch(e:any){
                        return res.status(400).json({errorMesage:e})
                }
               
        }
       


} 