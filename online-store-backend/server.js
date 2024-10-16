//bring in express for our server setup
import express from 'express'
import 'dotenv/config'
//bring in cors to help us reach backend routes from frontend
import cors from 'cors'
import connectDB  from './config.js'
import multer from 'multer'
import path from 'path';
import Store from './models/storeModel.js'


//create express app
const app = express()
//setup a middleware for our express app
app.use(cors())

//data from client stored in request.body and formatted as json
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  // Send product data
  res.send("Express is Running")
});

app.post('/addproduct', async(req, res) =>{
  const product = new Store({
    
    name: req.body.name,
    image: req.body.image,
    category:req.body.category,
    price: req.body.price,
    description: req.body.description
  })
  console.log(product);
  await product.save()
  console.log("Saved");
  res.json({
    success:true,
    name:req.body.name
  })
  
  
})
// // image storage engine
// const storage = multer.diskStorage({
//   destination: './upload/images',
//   filename:(req, file, cb) => {
//     return cb (null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//   }
// })

// const upload = multer({storage:storage})

// //creating upload Endpoint for images
// app.use('/images', express.static('upload/images'))
// app.post('/upload', upload.single('product'),(req,res) => {
//   res.json({
//     success:1,
//     image_url: `http://localhost:process.env.PORT/images/${req.file.filename}`
//   })
// })

//setup server to listen on a specific port
app.listen(process.env.PORT || 4040, () => {
  console.log(`Listening on ${process.env.PORT || 4040}`);
  connectDB()
  
})