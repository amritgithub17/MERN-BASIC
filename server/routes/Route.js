import express from 'express';
import { addUser , getUser } from '../Controller/Controller.js';


const router = express.Router();

router.post("/adduser",addUser)
router.get("/getuser",getUser)

export default router;