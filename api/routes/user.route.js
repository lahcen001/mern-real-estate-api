import express from 'express';
import {test, updateUser, deleteUser} from '../controllers/user.controller.js';
import  verifyToken from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test)
router.put('/update/:id', updateUser)
router.get('/delete/:id', deleteUser)

export default router