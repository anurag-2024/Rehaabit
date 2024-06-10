import {Router} from 'express';
import {verifyToken} from '../middleware/verifyToken.js';
import {createTask, getTasks, getTask, updateTask, deleteTask} from '../controllers/TaskControllers.js';
const router = Router();

/** post Routes */
router.post('/task',verifyToken, createTask);

/** get Routes */
router.get('/tasks',verifyToken, getTasks);
router.get('/task/:id',verifyToken, getTask);

/** patch Routes */
router.patch('/task/:id', verifyToken, updateTask);

/** delete Routes */
router.delete('/task/:id', verifyToken, deleteTask);

export default router;