import express from "express";
import { creatloan, getallloans } from "../controller/loan.controller";

const loanRouter=express.Router()
loanRouter.post ('/creatloans',creatloan)
loanRouter.get('/',getallloans)


export default loanRouter