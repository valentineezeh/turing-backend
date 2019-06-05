import express from 'express';
import StripeControllers from '../../controllers/StripeControllers';
import verifyToken from '../../middlewares/verifyToken';

const router = express.Router();

router.post('/stripe/webhook', StripeControllers.Webhook);
router.post('/stripe/charge', verifyToken, StripeControllers.StripePaymentIntgretion);

export default router;
