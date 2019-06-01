import express from 'express';
import CategoryControllers from '../../controllers/CategoryControllers';

const router = express.Router();

router.get('/categories',
  CategoryControllers.GetAllCategories);
router.get('/categories/:categoryId', CategoryControllers.GetACategoryById);
router.get('/categories/inProduct/:productId', CategoryControllers.GetProductCategoryById);
router.get('/categories/inDepartment/:departmentId', CategoryControllers.GetCategoryByDepartmentId);

export default router;
