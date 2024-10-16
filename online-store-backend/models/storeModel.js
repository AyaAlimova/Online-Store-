import mongoose from "mongoose";

//create a schema to validate our data and determine what it looks like
const productSchema = mongoose.Schema({
    
      name: {
        type: String,
        required: true, // name is mandatory
        trim: true,     // trims whitespace
      },
      price: {
        type: Number,
        required: true, // price is mandatory
        min: 0          // price should be positive
      },
      image: {
        type: String, 
        required: true  // at least one image is mandatory
      },
      description: {
        type: String,
        required: true,
        maxlength: 500  // max length for the description
      },
      category:{
        type:String,
        required: true
      }
    });

const Store = mongoose.model('products', productSchema)

export default Store