/* eslint-disable import/no-cycle */
import sequelize from '../bin/www';

/**
 * @description Order repository class
 * @class OrderRepositories
 */
export default class OrderRepositories {
  /**
     * @description create an order
     * @param {Object} order - order to be created
     * @returns {Number} returns a newly created order ID
     */
  static async CreateOrder(order) {
    try {
      const response = await sequelize.query('CALL shopping_cart_create_order(:cartId, :customerId, :shippingId, :taxId);', {
        replacements: {
          cartId: order.cartId,
          customerId: order.customerId,
          shippingId: order.shippingId,
          taxId: order.taxId
        },
        type: sequelize.QueryTypes.INSERT
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Get details about an order
     * @param {Number} orderId - order Id
     * @returns {Object} returns information of the order with this ID
     */
  static async GetOrderDetails(orderId) {
    try {
      const response = await sequelize.query('CALL orders_get_order_details(:id);', {
        replacements: {
          id: orderId
        },
        type: sequelize.QueryTypes.SELECT
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Get orders by Customer
     * @param {Number} customerId - customer Id
     * @returns {Object} returns orders for customer with this ID
     */
  static async GetOrdersByCustomerId(customerId) {
    try {
      const response = await sequelize.query('CALL orders_get_by_customer_id(:id);', {
        replacements: {
          id: customerId
        },
        type: sequelize.QueryTypes.SELECT
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Get info about order
     * @param {Number} orderId - order Id
     * @returns {Object} returns short details of the order with this ID
     */
  static async GetOrderShortDetails(orderId) {
    try {
      const result = await sequelize.query('CALL orders_get_order_short_details(:id);', {
        replacements: {
          id: orderId
        },
        type: sequelize.QueryTypes.SELECT
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
