import express from 'express';
 import  {createListining,deleteListings,updateListings,getUserListings}  from '../controllers/listining.controller.js';



const router = express.Router();

router.post('/create',createListining );
router.get('/delete/:id', deleteListings);
router.post('/update/:id', updateListings);
router.get('/get/:id', getUserListings);

export default router;
