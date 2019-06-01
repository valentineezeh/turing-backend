import express from 'express';
import CategoryControllers from '../../controllers/CategoryControllers';

const router = express.Router();

router.get('/categories', CategoryControllers.GetAllCategories);
router.get('/categories/:categoryId', CategoryControllers.GetACategoryById);
router.get('/categories/inProduct/:productId', CategoryControllers.GetProductCategoryById);

export default router;
