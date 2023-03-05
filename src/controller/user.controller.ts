import { Request,Response } from "express";
import prisma from "../config/db";

//Add new user 
export const creatUser=async(req:Request,res:Response)=>{

    let users=req.body
    await prisma.user.create({
        data:users
    })
    console.log(users);
    res.json({"msg":"user created","users":users} )

}



//get users
export const getallusers=async(req:Request,res:Response)=>{

    
        let users=await prisma.user.findMany()
        console.log(users);
        res.send(users)
        
    
    
}