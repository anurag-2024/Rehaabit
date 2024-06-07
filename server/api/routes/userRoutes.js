import { Router } from "express";
import {verifyToken} from '../middleware/verifyToken.js'
import { createUser, loginUser } from "../controllers/UserControllers.js";
const router = Router();

/** post Routes */
router.post('/signup', createUser);
router.post('/signin', loginUser);

export default router;

