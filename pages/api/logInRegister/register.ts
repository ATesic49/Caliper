import prisma from "@/lib/prisma";
import { badgeClasses } from "@mui/material";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt'
import * as jose from 'jose'
export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse,
){
    if(req.method==='POST'){
        console.log('post')
                const {email,password,name}= req.body
                const userWithEmail = await prisma.user.findUnique({
                    where:{
                        email
                    }
                })
                const boje = await prisma.userColor.findMany({})
                const hashedPassword = await bcrypt.hash(password,10)
                if(userWithEmail) return res.status(405).json({errorMessage:'You arleady have a user with the same email'})
                const user = await prisma.user.create({
            data:{
                name,
                email,
                hashedPassword,
                color:{
                    connect:{
                        id:Math.floor(Math.random()*boje.length)
                    }
                }
            }
        })



        // HOSE
        const secret = new TextEncoder().encode(process.env.SECRET)
        const alg = 'HS256'
        const token = await new jose.SignJWT({email:user.email}).setProtectedHeader({alg}).setExpirationTime('24h').sign(secret)



        // HOSE

                return res.status(200).json(token)
            }else return res.status(405).json({errorMessage:'Unsupported request'})
}