import express from "express";
import { creatBook, getallBooks } from "../controller/book.controller";


const bookRouter=express.Router()

bookRouter.post('/creatbooks',creatBook)
bookRouter.get('/',getallBooks)


export default bookRouter