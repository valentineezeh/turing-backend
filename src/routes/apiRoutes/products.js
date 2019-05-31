import express from 'express';
// eslint-disable-next-line import/no-cycle
import ProductControllers from '../../controllers/ProductControllers';

const router = express.Router();

router.get('/products', ProductControllers.GetAllProducts);
router.get('/products/search/', ProductControllers.ProductSearch);
router.get('/products/:productId/', ProductControllers.GetProductById);
router.get('/products/inCategory/:categoryId', ProductControllers.GetProductByCategoryId);
router.get('/products/inDepartment/:departmentId', ProductControllers.GetProductsByDepartmentId);
router.get('/products/:productId/details', ProductControllers.GetProductDetailsByProductId);
router.get('/products/:productId/reviews', ProductControllers.GetProductReviewByProductId);
router.get('/products/:productId/locations', ProductControllers.GetProductLocationByProductId);
router.post('/products/:productId/reviews', ProductControllers.PostProductReviews);

export default router;
