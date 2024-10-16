// routes/productRoutes.js
import express from 'express';
import Store from '../models/storeModel.js';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Creating an endpoint to add a product
router.post('/addproduct', async (req, res) => {
  const product = new Store({
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    price: req.body.price,
    description: req.body.description
  });
  console.log(product);
  await product.save();
  console.log("Saved");
  res.json({
    success: true,
    name: req.body.name
  });
});

// Creating API for deleting a product
router.post('/removeproduct', async (req, res) => {
  await Store.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  
  res.json({
    success: true,
    id: req.body.id // Return the removed id
  });
});

// Creating API for getting all products
router.get('/allproducts', async (req, res) => {
  let products = await Store.find({});
  console.log("All products fetched");
  res.send(products);
});

// Image storage engine
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage: storage });

// Creating upload endpoint for images
router.use('/images', express.static('upload/images'));
router.post('/upload', upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${process.env.PORT}/images/${req.file.filename}`
  });
});

export default router;
