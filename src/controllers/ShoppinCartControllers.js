/* eslint-disable import/no-cycle */
import ShoppingCartServices from '../services/ShoppingCartServices';
import helper from '../utils/helper';

/**
 * @description Shopping cart controller class
 * @class ShoppingCartControllers
 */
export default class ShoppingCartControllers {
/**
   * @description Generete a unique CART ID
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {String} cart Id
   */
  static GenerateUniqueId(req, res) {
    return res.status(200).json({
      cart_id: helper.generateUniqueId()
    });
  }

  /**
   * @description Add product to cart
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} products in cart
   */
  static async AddProductToShoppingCart(req, res) {
    try {
      // eslint-disable-next-line camelcase
      const { cart_id, product_id, attributes } = req.body;
      const cart = {
        cartId: cart_id,
        productId: product_id,
        attributes
      };
      await ShoppingCartServices.AddProductToShoppingCart(cart);
      const getProduct = await ShoppingCartServices.GetAllProductsInCart(cart.cartId);
      return res.status(201).json(getProduct);
    } catch (error) {
      return res.status(500).json({
        error: {
          message: 'Internal Server Error.'
        }
      });
    }
  }

  /**
   * @description Get all products in cart
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} products in cart
   */
  static async GetAllProductsInCart(req, res) {
    try {
      const cartId = req.params.cart_id;
      const response = await ShoppingCartServices.GetAllProductsInCart(cartId);
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          code: 'SHO_02',
          message: 'Cart is empty.'
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          message: 'Internal Server Error.'
        }
      });
    }
  }

  /**
   * @description Update the cart by item
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} products in cart
   */
  static async UpdateCartByItemDetails(req, res) {
    try {
      const itemId = req.params.item_id;
      const { quantity } = req.body;
      const item = {
        itemId,
        quantity
      };
      const response = await ShoppingCartServices.UpdateCartByItemDetails(item);
      if (response !== undefined) {
        return res.status(200).json([response[0]]);
      }
      return res.status(404).json({
        error: {
          code: 'SHO_02',
          message: 'Product not found in cart.'
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          message: 'Internal server error.'
        }
      });
    }
  }

  /**
   * @description Empty cart
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} empty array
   */
  static async EmptyShoppingCart(req, res) {
    try {
      const cartId = req.params.cart_id;
      const response = await ShoppingCartServices.EmptyShoppingCart(cartId);
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          code: 'SHO_02',
          message: 'No product found in cart.'
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          message: 'Internal server error.'
        }
      });
    }
  }

  /**
   * @description Move a product to cart
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {null} no data
   */
  static async MoveProductToCart(req, res) {
    try {
      const itemId = req.params.item_id;
      await ShoppingCartServices.MoveProductToCart(itemId);
      return res.status(200).json();
    } catch (error) {
      return res.status(500).json({
        error: {
          message: 'Internal server error.'
        }
      });
    }
  }

  /**
   * @description Calculate total amount in cart
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} total amount
   */
  static async GetShoppingCartTotalAmount(req, res) {
    try {
      const cartId = req.params.cart_id;
      const response = await ShoppingCartServices.GetShoppingCartTotalAmount(cartId);
      if (response.total_amount !== null) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          message: 'Cart is empty.'
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          message: 'Internal server error.'
        }
      });
    }
  }

  /**
   * @description save a product for later
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {null} no data
   */
  static async SaveProductForLater(req, res) {
    try {
      const itemId = req.params.item_id;
      await ShoppingCartServices.SaveProductForLater(itemId);
      return res.status(200).json();
    } catch (error) {
      return res.status(500).json({
        error: {
          message: 'Internal server error'
        }
      });
    }
  }

  /**
   * @description Get Products saved for latter
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} returns all saved products in a cart
   */
  static async GetSavedProductsInCart(req, res) {
    try {
      const cartId = req.params.cart_id;
      const response = await ShoppingCartServices.GetSavedProductsInCart(cartId);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        error: {
          message: 'Internal server error'
        }
      });
    }
  }

  /**
   * @description Remove a product in the cart
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {null} returns no data
   */
  static async RemoveProductInShoppingCart(req, res) {
    try {
      const itemId = req.params.item_id;
      await ShoppingCartServices.RemoveProductInShoppingCart(itemId);
      return res.status(200).json();
    } catch (error) {
      return res.status(500).json({
        error: {
          message: 'Internal server error'
        }
      });
    }
  }
}
