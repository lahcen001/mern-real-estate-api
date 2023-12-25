import express from 'express';
 import  createListining  from '../controllers/listining.controller.js';



const router = express.Router();

 router.post('/create',createListining );


export default router;
