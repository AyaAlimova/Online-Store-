//bring in express for our server setup
import express from 'express'
import 'dotenv/config'
//bring in cors to help us reach backend routes from frontend
import cors from 'cors'

import connectDB  from './config.js'

import Store from './models/storeModel.js'
//create express app
const app = express()
//setup a middleware for our express app
app.use(cors())
//choosing a port
const PORT = 2020;

// a route that gets all shoes and send to client

app.get('/collection', async(req,res) => {
  try{
    const shoes = await Store.find({})
   res.status(200).json(shoes)
  }
  catch(error){
    console.log("Can't get all products");
    res.status(400).json(error)
    
  }
})



//setup server to listen on a specific port
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
  connectDB()
  
})