/* eslint-disable import/no-cycle */
import express from 'express';
import ShippingControllers from '../../controllers/ShippingControllers';

const router = express.Router();

router.get('/shipping/regions', ShippingControllers.GetShippingRegions);
router.get('/shipping/regions/:shipping_region_id', ShippingControllers.GetShippingsByRegionId);

export default router;
