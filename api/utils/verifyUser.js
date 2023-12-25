import { errorHandler }  from "./error.js"
import jwt from "jsonwebtoken"
 const verifyToken = (req, res, next) => {
    const token = req.cookies.token
   
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) return next(errorHandler(401, 'Invalid token'))
          req.user = user
     
          console.log('object', process.env.JWT_SECRET)
    })


}
export default verifyToken