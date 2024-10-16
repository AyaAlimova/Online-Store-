// server.js (or app.js)
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config.js';
import productRoutes from './routes/productRoutes.js'; // Import product routes

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

// Setup server to listen on a specific port
app.listen(process.env.PORT || 4040, () => {
  console.log(`Listening on ${process.env.PORT || 4040}`);
  connectDB();
});
