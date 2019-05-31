import express from 'express';
// eslint-disable-next-line import/no-cycle
import TaxControllers from '../../controllers/TaxControllers';

const router = express.Router();

router.get('/tax/', TaxControllers.GetAllTax);
router.get('/tax/:taxId', TaxControllers.GetTaxById);

export default router;
