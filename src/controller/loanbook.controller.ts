import { Request,Response } from "express";
import prisma from "../config/db";

//Add new loanBook 
export const creatloanbook=async(req:Request,res:Response)=>{

    let loanbooks=req.body
    await prisma.loanbook.create({
        data:loanbooks
    })
    console.log(loanbooks);
    res.json({"msg":"loan Book created","loan Book":loanbooks} )

}



//get loanBook

export const getallloanBook=async(req:Request,res:Response)=>{

    
        let loanbooks=await prisma.loanbook.findMany()
        console.log(loanbooks);
        res.send(loanbooks)
        
    
    
}

//Create endpoint that returns the lended books (return bad request if bookID is invalid)

export const lendedbook=async(req:Request,res:Response)=>{

    let {id}=req.params;
    let userslended=await prisma.user.findUnique({
        where:{
            id
        }
    
    })
    console.log(userslended);
        res.json({"msg":"lendded books","lendded":userslended} )
}