import express from 'express';
// eslint-disable-next-line import/no-cycle
import AttributeControllers from '../../controllers/AttributeControllers';
import verifyUserInput from '../../middlewares/verifyInputs';

const router = express.Router();

router.get('/attributes', AttributeControllers.GetAttributeList);
router.get('/attributes/:attribute_id', verifyUserInput.getAttributeId, AttributeControllers.GetAttributesById);
router.get('/attributes/values/:attribute_id', verifyUserInput.getAttributeId, AttributeControllers.GetAttributesValueById);
router.get('/attributes/inProduct/:product_id', verifyUserInput.getProductId, AttributeControllers.GetAttributesByProductId);

export default router;
