 
 import Listining from '../models/listining.model.js';
 
 const createListining = async (req, res, next) => {
    try {
        const listining  = await Listining.create(req.body);
        res.status(200).json(listining)
    }catch(error) {
        next(error)
    }
    
}
export default createListining