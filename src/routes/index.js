/* eslint-disable import/no-cycle */
import express from 'express';
import productRoutes from './apiRoutes/products';
import attributeRoutes from './apiRoutes/attributes';
import departmentRoutes from './apiRoutes/departments';
import taxRoutes from './apiRoutes/tax';
import categoryRoutes from './apiRoutes/categories';
import customerRoutes from './apiRoutes/customers';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Turing Ecommerce API.'
  });
});

router.use('/api', productRoutes);
router.use('/api', attributeRoutes);
router.use('/api', departmentRoutes);
router.use('/api', taxRoutes);
router.use('/api', categoryRoutes);
router.use('/api', customerRoutes);

export default router;
