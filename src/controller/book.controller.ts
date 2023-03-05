import { Request,Response } from "express";
import prisma from "../config/db";

//Add new book 
export const creatBook=async(req:Request,res:Response)=>{

    let books=req.body
    await prisma.book.create({
        data:books
    })
    console.log(books);
    res.json({"msg":"book created","users":books} )

}



//get books
export const getallBooks=async(req:Request,res:Response)=>{

    
        let books=await prisma.book.findMany()
        console.log(books);
        res.send(books)
        
}