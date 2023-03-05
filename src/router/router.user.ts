import express from "express";
import { creatUser, getallusers } from "../controller/user.controller";
import validate from '../middleware/validate'
import { usertype } from '../zod.pisma/zod.user'

const router=express.Router();

router.post("/creatuser",creatUser)
router.get('/',getallusers)

export default router;
