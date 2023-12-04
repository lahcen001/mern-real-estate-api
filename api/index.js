import express from 'express'
import mongoose from 'mongoose'
const app = express()
import dotenv from 'dotenv'
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    
    console.log('MongoDB connected')
}).catch(err => {
    console.log(err)
})


app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})

