/* eslint-disable import/no-cycle */
import express from 'express';
import ShoppingCartControllers from '../../controllers/ShoppinCartControllers';
import verifyUserInput from '../../middlewares/verifyInputs';

const router = express.Router();

router.get('/shoppingcart/generateUniqueId', ShoppingCartControllers.GenerateUniqueId);
router.post('/shoppingcart/add', verifyUserInput.validateProductRequestBody, ShoppingCartControllers.AddProductToShoppingCart);
router.get('/shoppingcart/:cart_id', ShoppingCartControllers.GetAllProductsInCart);
router.put('/shoppingcart/update/:item_id', verifyUserInput.validateUpdateCartByItem, ShoppingCartControllers.UpdateCartByItemDetails);
router.delete('/shoppingcart/empty/:cart_id', ShoppingCartControllers.EmptyShoppingCart);
router.get('/shoppingcart/moveToCart/:item_id', ShoppingCartControllers.MoveProductToCart);
router.get('/shoppingcart/totalAmount/:cart_id', ShoppingCartControllers.GetShoppingCartTotalAmount);
router.get('/shoppingcart/saveForLater/:item_id', ShoppingCartControllers.SaveProductForLater);
router.get('/shoppingcart/getSaved/:cart_id', verifyUserInput.getCartId, ShoppingCartControllers.GetSavedProductsInCart);
router.delete('/shoppingcart/removeProduct/:item_id', verifyUserInput.getItemId, ShoppingCartControllers.RemoveProductInShoppingCart);

export default router;
