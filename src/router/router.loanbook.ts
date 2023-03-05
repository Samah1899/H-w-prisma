import express from "express";
import validate from '../middleware/validate'
import { usertype } from '../zod.pisma/zod.user'
import { creatloanbook, getallloanBook, lendedbook } from "../controller/loanbook.controller";

const router=express.Router();

router.post("/crealoanbook",creatloanbook)
router.get('/',getallloanBook)
router.get('/:id',lendedbook)

export default router;