import express,{Application} from "express";
import userRouter from '../src/router/router.user'
import booksRouter from '../src/router/router.book'
import loansRouter from '../src/router/router.loan'
import {connectDB} from '../src/config/db'

const app:Application=express()
const PORT:Number=3008
connectDB()
app.use(express.json())
app.use('/users',userRouter)
app.use('/books',booksRouter)
app.use('/loans',loansRouter)
app.use('/loanBook',booksRouter)
app.listen(PORT,()=>{console.log("express listening on port "+PORT)})