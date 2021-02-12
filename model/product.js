const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    productName:{
        type: String,
        required: true
    },
    detail:{
        type: String,
        required: true
    },
    qty:{
        type: Number,
        required: true
    },
    instock:{
        type: Date,
        required: true
    },
    category:{
        type: String,
        // required: true
    },
    postedAt:{
        type: Date,
        required: true
    },
    img:{
        type: String,
    }
}, {collection:'products'})
module.exports= mongoose.model('products', productSchema);