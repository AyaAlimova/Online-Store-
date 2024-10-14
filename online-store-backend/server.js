//bring in express for our server setup
import express from 'express'
import 'dotenv/config'
//bring in cors to help us reach backend routes from frontend
import cors from 'cors'
import connectDB  from './config.js'

import storeModel from './models/storeModel.js'
import product from './data/Products.js'

//create express app
const app = express()
//setup a middleware for our express app
app.use(cors())

//data from client stored in request.body and formatted as json
app.use(express.json())

app.get('/collection', async (req, res) => {
  try{
    const product = await storeModel.find({})
    res.status(200).json(product)
  }
  catch(error){
    res.status(400).json(error)
  }
})

// a route that creates and adds a product document to the database
app.post('/collection', async (req, res) => {
  try{

    await storeModel.deleteMany({})
    const productSeeder = await storeModel.insertMany(product)
    res.send(productSeeder)
  }
  catch(error){
    res.status(400).json(error)
  }
})



//setup server to listen on a specific port
app.listen(process.env.PORT || 4040, () => {
  console.log(`Listening on ${process.env.PORT || 4040}`);
  connectDB()
  
})