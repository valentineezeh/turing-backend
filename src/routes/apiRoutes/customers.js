/* eslint-disable import/no-cycle */
import express from 'express';
import CustomerControllers from '../../controllers/CustomerControllers';
import verifyUserInput from '../../middlewares/verifyInputs';
import verifyToken from '../../middlewares/verifyToken';

const router = express.Router();

router.post('/customers', verifyUserInput.registerCustomerRequestBody, CustomerControllers.CustomerSignUp);
router.post('/customers/login', verifyUserInput.loginCustomerRequestBody, CustomerControllers.CustomerSignIn);
router.get('/customer', verifyToken, CustomerControllers.GetCustomerById);

export default router;
