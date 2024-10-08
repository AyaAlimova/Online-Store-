import mongoose from "mongoose";

//create a schema to validate our data and determine what it looks like
const storeSchema = mongoose.Schema({
      text: {type: String},
      cost: {type: Number}
})

const Store = mongoose.model('shoes', storeSchema)

export default Store