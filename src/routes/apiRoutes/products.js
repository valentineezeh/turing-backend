import express from 'express';
// eslint-disable-next-line import/no-cycle
import ProductControllers from '../../controllers/ProductControllers';
import verifyToken from '../../middlewares/verifyToken';
import verifyUserInput from '../../middlewares/verifyInputs';

const router = express.Router();

router.get('/products', ProductControllers.GetAllProducts);
router.get('/products/search/', ProductControllers.ProductSearch);
router.get('/products/:product_id/', verifyUserInput.getProductId, ProductControllers.GetProductById);
router.get('/products/inCategory/:category_id', verifyUserInput.getCategoryId, ProductControllers.GetProductByCategoryId);
router.get('/products/inDepartment/:department_id', verifyUserInput.getDepartmentId, ProductControllers.GetProductsByDepartmentId);
router.get('/products/:product_id/details', verifyUserInput.getProductId, ProductControllers.GetProductDetailsByProductId);
router.get('/products/:product_id/reviews', verifyUserInput.getProductId, ProductControllers.GetProductReviewByProductId);
router.get('/products/:product_id/locations', verifyUserInput.getProductId, ProductControllers.GetProductLocationByProductId);
router.post('/products/:product_id/reviews', verifyToken, verifyUserInput.getProductId, ProductControllers.PostProductReviews);

export default router;
