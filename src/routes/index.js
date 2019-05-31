import express from 'express';
import productRoutes from './apiRoutes/products';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Turing Ecommerce API.'
  });
});

router.use('/api', productRoutes);

export default router;
