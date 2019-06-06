/* eslint-disable import/no-cycle */
import express from 'express';
import CategoryControllers from '../../controllers/CategoryControllers';
import verifyUserInput from '../../middlewares/verifyInputs';

const router = express.Router();

router.get('/categories',
  CategoryControllers.GetAllCategories);
router.get('/categories/:category_id', verifyUserInput.getCategoryId, CategoryControllers.GetACategoryById);
router.get('/categories/inProduct/:product_id', verifyUserInput.getProductId, CategoryControllers.GetProductCategoryById);
router.get('/categories/inDepartment/:department_id', verifyUserInput.getDepartmentId, CategoryControllers.GetCategoryByDepartmentId);

export default router;
