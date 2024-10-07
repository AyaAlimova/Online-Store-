//bring in express for our server setup
import express from 'express'

//create express app
const app = express()
//choosing a port
const PORT = 2020;




//setup server to listen on a specific port
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
  
})