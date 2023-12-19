import bycriptjs from 'bcryptjs'
import User from '../models/user.model.js'




export const test = (req, res) => {
   res.json({
        
        message: 'Hello World 121'
    })
}




export const updateUser  = async (req, res, next) =>{
//   if(req.user.id !== req.params.id){
//       return next(errorHandler(401,'you can not update this user'))
//    }
try {
    var salt = bycriptjs.genSaltSync(10);

    if(req.body.password ){
    
     req.body.password= await bycriptjs.hash(req.body.password,salt)
    }

const updateUser = await User.findByIdAndUpdate(req.params.id, 
    {$set: {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar
    }}, 
    
    {new: true})

const {password, ...others} = updateUser._doc


res.status(200).json({
    success: true,
    data: others,
    message: 'User updated successfully'
})

} catch (error) {
    next(error)
}
}


export const deleteUser = async (req, res, next) =>{
    
    try {

        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: 'User deleted successfully'
        })
    }catch (error) {
        next(error)
    }
}