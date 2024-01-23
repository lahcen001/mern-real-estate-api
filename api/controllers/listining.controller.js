 
 import Listining from '../models/listining.model.js';
 


 export const  deleteListings = async (req, res, next) => {
    
    try {
        const listining  = await Listining.findByIdAndDelete(req.params.id);
        res.status(200).json('Listining deleted successfully')
    }catch(error) {
        next(error)
    }
}
 export const createListining = async (req, res, next) => {
    try {
        const listining  = await Listining.create(req.body);
        res.status(200).json(listining)
    }catch(error) {
        next(error)
    }
    
}


export const updateListings = async (req, res, next) => {

    // if(req.params.id  !== listining.userRef){
    //     return next(errorHandler(401, 'you can not update this listining'))
    // }
  
    try {
        const listining  = await Listining.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(listining)
    }catch(error) {
        next(error)
    }
}


export const getUserListings = async (req, res, next) => {

    try{
        const listings = await Listining.findById(req.params.id)
        res.status(200).json(listings)
    }catch(error){
        next(error)
    }
}