import express from 'express'
import mongoose from 'mongoose'
const app = express()
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
 import listiningRouter from './routes/listining.route.js'
import  cors from 'cors';
import  cookieParser  from 'cookie-parser';
import path from 'path';
app.use(cors({
    credentials: true,
    origin: '*'
}));


dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    
    console.log('MongoDB connected')
}).catch(err => {
    console.log(err)
})




const __dirname = path.resolve();


// app.use(express.static(path.join(__dirname, 'client/dist')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/dist/index.html'));
// })


app.use(cookieParser());
app.use(express.json());


app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})



app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listining',listiningRouter); 


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

