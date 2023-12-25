


import User from '../models/user.model.js'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {errorHandler} from '../utils/error.js';
import cookieParser  from 'cookie-parser'

 export const signup   = async (req, res, next) => {



app.use(cookieParser());
const {username , email , password} = req.body;
dotenv.config();

var salt = bcrypt.genSaltSync(10);
const hashepass =   bcrypt.hashSync(password,salt)
const newUser = new User({
    username,
    email,
    password:hashepass
})


try {
  await newUser.save()
  res.status(201).json('User created successfully');
res.end();

} catch (error) {
   next(error);
}

}



export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, 'User not found'));
    }
    const validPassword = bcrypt.compareSync( password, validUser.password);
    if (validPassword===false) {
      return next(errorHandler(401, 'Invalid password '));
    }
const token  = jwt.sign({id:validUser._id},process.env.JWT_SECRET)
res.cookie('token',token,{
  httpOnly: true,
  
}).status(200).json(validUser);

  }
  catch(error){
    next(error);
  }
}

export const google = async (req, res, next) => {
  
try{

const user = await User.findOne({email:req.body.email})
if(user){
  const token  =  jwt.sign({id:user._id},process.env.JWT_SECRET)
const {password : pass, ...others} = user._doc;
res.cookie('token',token,{
  httpOnly: true,

}).status(200).json(others);
}else{
  
const  generatePassword =  Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8);

const hashpass  =  bcrypt.hashSync(generatePassword,10)


const newUser = new User({
  username:req.body.name?.split(' ').join('').toLowerCase()+'_'+Math.random().toString(36).slice(-8),
  email:req.body.email,
  password:hashpass,
  avatar:req.body.photo
})

await newUser.save();
const token  =  jwt.sign({id:newUser._id},process.env.JWT_SECRET)
const {password : pass, ...others} = newUser._doc;
res.cookie('token',token,{
  httpOnly: true,
}).status(200).json(others);




}

}catch(error){
  next(error);
}


}


 export const  signout = async (req, res, next) => {
  
try {


  res.clearCookie('token').status(200).json('User signed out successfully');


}
catch(error){
  next(error);
}
}