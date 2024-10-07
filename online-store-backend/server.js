//bring in express for our server setup
import express from 'express'
//bring in cors to help us reach backend routes from frontend
import cors from 'express'

//create express app
const app = express()
//setup a middleware for our express app
app.app(cors())
//choosing a port
const PORT = 2020;




//setup server to listen on a specific port
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
  
})