// eslint-disable-next-line import/no-cycle
import ShoppingCartRepositories from '../repositories/ShoppingCartRepositories';

/**
 * @description Shopping cart service class
 * @class ShoppingCartServices
 */
export default class ShoppingCartServices {
  /**
     * @description Add product to cart
     * @param {Object} cart - cart object
     * @returns {Object} returns all products in cart
     */
  static async AddProductToShoppingCart(cart) {
    await ShoppingCartRepositories.AddProductToShoppingCart(cart);
    const response = await ShoppingCartRepositories.GetSavedProductsInCart(cart.cartId);
    return response;
  }

  /**
     * @description Get List of Products in Shopping Cart
     * @param {Number} cartId - cart Id
     * @returns {Object} returns all products in cart with this ID from repository
     */
  static async GetAllProductsInCart(cartId) {
    const response = await ShoppingCartRepositories.GetAllProductsInCart(cartId);
    const products = Object.values(response[0]);
    return products;
  }

  /**
     * @description Update the cart by item
     * @param {Object} item - item object
     * @returns {Object} returns all products in cart
     */
  static async UpdateCartByItemDetails(item) {
    const response = await ShoppingCartRepositories.UpdateCartByItemDetails(item);
    let products = [];
    if (response.length !== 0) {
      products = await ShoppingCartRepositories.GetAllProductsInCart(response[0].cart_id);
    }
    return products;
  }

  /**
     * @description Empty cart
     * @param {Number} cartId - cart Id
     * @returns {Object} returns an empty array
     */
  static async EmptyShoppingCart(cartId) {
    await ShoppingCartRepositories.EmptyShoppingCart(cartId);
    return [];
  }

  /**
     * @description Move to cart
     * @param {Number} itemId - item Id
     * @returns {Object} returns no data
     */
  static async MoveProductToCart(itemId) {
    await ShoppingCartRepositories.MoveProductToCart(itemId);
  }

  /**
     * @description Calculate total amount in cart
     * @param {Number} cartId - cart Id
     * @returns {Number} returns total amount
     */
  static async GetShoppingCartTotalAmount(cartId) {
    const response = await ShoppingCartRepositories.GetShoppingCartTotalAmount(cartId);
    return response[0]['0'];
  }

  /**
     * @description save a product for later
     * @param {Number} itemId - item Id
     * @returns {Object} returns no data
     */
  static async SaveProductForLater(itemId) {
    await ShoppingCartRepositories.SaveProductForLater(itemId);
  }

  /**
     * @description Get Products saved for latter
     * @param {Number} cartId - cart Id
     * @returns {Number} returns all saved products in a cart
     */
  static async GetSavedProductsInCart(cartId) {
    const response = await ShoppingCartRepositories.GetSavedProductsInCart(cartId);
    const savedProducts = Object.values(response[0]);
    return savedProducts;
  }

  /**
     * @description Remove a product in the cart
     * @param {Number} itemId - item Id
     * @returns {Object} returns no data
     */
  static async RemoveProductInShoppingCart(itemId) {
    await ShoppingCartRepositories.RemoveProductInShoppingCart(itemId);
  }
}
