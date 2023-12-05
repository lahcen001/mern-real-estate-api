


import User from '../models/user.model.js'

import bcryptjs from 'bcryptjs';

const signup   = async (req, res, next) => {

const {username , email , password} = req.body;

const hashepass = bcryptjs.hashSync(password, 10)
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
export default signup;