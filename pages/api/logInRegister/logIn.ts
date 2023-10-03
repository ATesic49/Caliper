import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse,
) {
    if(req.method==='POST'){
console.log('post')
        const {email,password}= req.body
        
        return res.status(200).json({status:200})
    }
}