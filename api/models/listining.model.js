import mongoose from "mongoose";
 
const listiningSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    regularPrice: {
        type:Number,
        required: true
    },
    DiscountPrice: {
        type:Number,
        required: true

    },
    bedrooms : {
        type: Number,
        required: true
    },
    furnished: {
        type: Boolean,
        required: true
    },
    imagesURL: {
        type: Array,
        required: true
    }
    
})
const Listining = mongoose.model('Listining', listiningSchema)
export default Listining