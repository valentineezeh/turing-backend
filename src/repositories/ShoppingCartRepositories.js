import sequelize from '../bin/www';

/**
 * @description Shopping cart repository class
 * @class ShoppingCartRepositories
 */
export default class ShoppingCartRepositories {
  /**
     * @description Add product to cart
     * @param {Object} cart - cart object
     * @returns {Object}  result from query
     */
  static async AddProductToShoppingCart(cart) {
    try {
      const response = await sequelize.query('CALL shopping_cart_add_product(:inCartId, :inProductId, :inAttributes);', {
        replacements: {
          inCartId: cart.cartId,
          inProductId: cart.productId,
          inAttributes: cart.attributes
        },
        type: sequelize.QueryTypes.INSERT
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Get List of Products in Shopping Cart
     * @param {Number} cartId - cart Id
     * @returns {Object} returns all products in cart with this ID
     */
  static async GetAllProductsInCart(cartId) {
    try {
      const response = await sequelize.query('CALL shopping_cart_get_products(:id);', {
        replacements: {
          id: cartId
        },
        type: sequelize.QueryTypes.SELECT
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Update the cart by item
     * @param {Object} item - item object
     * @returns {Object} returns all products in cart
     */
  static async UpdateCartByItemDetails(item) {
    try {
      const response = await sequelize.query('CALL shopping_cart_update(:inItemId, :inQuantity);', {
        replacements: {
          inItemId: item.itemId,
          inQuantity: item.quantity
        },
        type: sequelize.QueryTypes.UPDATE
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Empty cart
     * @param {Number} cartId - cart id
     * @returns {Object} returns result
     */
  static async EmptyShoppingCart(cartId) {
    try {
      const response = await sequelize.query('CALL shopping_cart_empty(:inCartId);', {
        replacements: {
          inCartId: cartId
        },
        type: sequelize.QueryTypes.DELETE
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Move to cart
     * @param {Number} itemId - item Id
     * @returns {Object} returns result
     */
  static async MoveProductToCart(itemId) {
    try {
      const response = await sequelize.query('CALL shopping_cart_move_product_to_cart(:inItemId);', {
        replacements: {
          inItemId: itemId
        },
        type: sequelize.QueryTypes.UPDATE
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Calculate total amount in cart
     * @param {Number} cartId - cart Id
     * @returns {Object} returns result
     */
  static async GetShoppingCartTotalAmount(cartId) {
    try {
      const response = await sequelize.query('CALL shopping_cart_get_total_amount(:inCartId);', {
        replacements: {
          inCartId: cartId
        },
        type: sequelize.QueryTypes.SELECT
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description save a product for later
     * @param {Number} itemId - item Id
     * @returns {Object} returns result
     */
  static async SaveProductForLater(itemId) {
    try {
      const response = await sequelize.query('CALL shopping_cart_save_product_for_later(:inItemId);', {
        replacements: {
          inItemId: itemId
        },
        type: sequelize.QueryTypes.UPDATE
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Get Products saved for latter
     * @param {Number} cartId - cart Id
     * @returns {Object} returns result
     */
  static async GetSavedProductsInCart(cartId) {
    try {
      const response = await sequelize.query('CALL shopping_cart_get_saved_products(:inCartId);', {
        replacements: {
          inCartId: cartId
        },
        type: sequelize.QueryTypes.SELECT
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Remove a product in the cart
     * @param {Number} itemId - item Id
     * @returns {Object} returns result
     */
  static async RemoveProductInShoppingCart(itemId) {
    try {
      const response = await sequelize.query('CALL shopping_cart_remove_product(:inItemId);', {
        replacements: {
          inItemId: itemId
        },
        type: sequelize.QueryTypes.DELETE
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}
