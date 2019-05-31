import express from 'express';
// eslint-disable-next-line import/no-cycle
import AttributeControllers from '../../controllers/AttributeControllers';

const router = express.Router();

router.get('/attributes', AttributeControllers.GetAttributeList);
router.get('/attributes/:attributeId', AttributeControllers.GetAttributesById);
router.get('/attributes/values/:attributeId', AttributeControllers.GetAttributesValueById);
router.get('/attributes/inProduct/:productId', AttributeControllers.GetAttributesByProductId);

export default router;
