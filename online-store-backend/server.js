// server.js (or app.js)
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config.js';
import productRoutes from './routes/productRoutes.js'; // Import product routes
import multer from 'multer';
import path from 'path';
// Create express app
const app = express();

// Setup middleware for our express app
app.use(cors());

// Data from client stored in request.body and formatted as JSON
app.use(express.json());


app.use('/api', productRoutes); 

app.get('/', (req, res) => {
  // Send product data
  res.send("Express is Running");
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
app.use('/image', express.static(path.resolve('upload/images')));
app.post('/upload', upload.single('product'), (req, res) => {
  res.json({
    success: true,
    image_url: `http://localhost:${process.env.PORT}/image/${req.file.filename}`
  });
});

// Setup server to listen on a specific port
app.listen(process.env.PORT || 4040, () => {
  console.log(`Listening on ${process.env.PORT || 4040}`);
  connectDB();
});
