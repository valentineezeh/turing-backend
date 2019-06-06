/* eslint-disable import/no-cycle */
import express from 'express';
import ShippingControllers from '../../controllers/ShippingControllers';
import verifyUserInput from '../../middlewares/verifyInputs';

const router = express.Router();

router.get('/shipping/regions', ShippingControllers.GetShippingRegions);
router.get('/shipping/regions/:shipping_region_id', verifyUserInput.getShippingRegionId, ShippingControllers.GetShippingsByRegionId);

export default router;
