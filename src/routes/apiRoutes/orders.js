import express from 'express';
import verifyUserInput from '../../middlewares/verifyInputs';
import verifyToken from '../../middlewares/verifyToken';
// eslint-disable-next-line import/no-cycle
import OrderControllers from '../../controllers/OrderController';

const router = express.Router();


router.post('/', verifyToken, verifyUserInput.createOrderRequestBody, OrderControllers.CreateOrder);
router.get('/inCustomer/', verifyToken, OrderControllers.GetOrdersByCustomerId);
router.get('/:order_id', verifyToken, OrderControllers.GetOrderDetails);
router.get('/shortDetail/:order_id', verifyToken, OrderControllers.GetOrderShortDetails);

export default router;
