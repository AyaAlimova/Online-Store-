import express from 'express';

const router = express.Router();

import storeModel from './models/storeModel.js'
import products from '../online-store-frontend/src/assets/allProducts.js'


router.post('/collection', async (req, res) => {
  await storeModel.deleteMany({})
  const ProductSeeder = await storeModel.insertMany(products)
  res.send({ProductSeeder})

}
)


export default router; 

