import { Request,Response } from "express";
import prisma from "../config/db";

//Add new loan 
export const creatloan=async(req:Request,res:Response)=>{

    let loans=req.body
    await prisma.loan.create({
        data:loans
    })
    console.log(loans);
    res.json({"msg":"loan created","users":loans} )

}



//get loans
export const getallloans=async(req:Request,res:Response)=>{

    
        let loans=await prisma.loan.findMany()
        console.log(loans);
        res.send(loans)
        
    
    
}








