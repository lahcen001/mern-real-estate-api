


import User from '../models/user.model.js'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {errorHandler} from '../utils/error.js';

 export const signup   = async (req, res, next) => {

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

