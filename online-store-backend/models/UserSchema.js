import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String
  },
  email:{
    type:String,
    unique: true
  },
  password: {
    type:String
  },
  cartData:{
    type:Object
  },
  date:{
    type:Date,
    default: Date.now,
  }
})
const User = mongoose.model('users', userSchema)

export default User