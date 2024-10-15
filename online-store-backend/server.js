//bring in express for our server setup
import express from 'express'
import 'dotenv/config'
//bring in cors to help us reach backend routes from frontend
import cors from 'cors'
import connectDB  from './config.js'



//create express app
const app = express()
//setup a middleware for our express app
app.use(cors())

//data from client stored in request.body and formatted as json
app.use(express.json())




//setup server to listen on a specific port
app.listen(process.env.PORT || 4040, () => {
  console.log(`Listening on ${process.env.PORT || 4040}`);
  connectDB()
  
})