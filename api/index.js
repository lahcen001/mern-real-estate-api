import express from 'express'
import mongoose from 'mongoose'
const app = express()
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'




dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    
    console.log('MongoDB connected')
}).catch(err => {
    console.log(err)
})

app.use(express.json());
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((error, req, res, next) => {
    const status = error.statusCode || 500
    const message = error.message || 'Something went wrong'
    const data = error.data
    res.status(status).json({
        message: message,
        status,
        success: false,
    })
})

