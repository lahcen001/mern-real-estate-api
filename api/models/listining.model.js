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
    address: {
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
    offer: {
        type: Boolean,
        required: true
    },
    imagesUrl: {
        type: Array,
        required: true
    },
    userRef: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
   parking: {
       type: Boolean,
       required: true
   }
    
},
{timestamps: true}
)
const Listining = mongoose.model('Listining', listiningSchema)
export default Listining