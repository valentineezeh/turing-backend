import express from 'express';
import StripeControllers from '../../controllers/StripeControllers';
import verifyToken from '../../middlewares/verifyToken';
import verifyUserInput from '../../middlewares/verifyInputs';

const router = express.Router();

router.post('/stripe/webhook', StripeControllers.Webhook);
router.post('/stripe/charge', verifyToken, verifyUserInput.stripeRequestBody, StripeControllers.StripePaymentIntgretion);

export default router;
