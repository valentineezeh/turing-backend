/* eslint-disable import/no-cycle */
import OrderServices from '../services/OrderServices';

/**
 * @description Order controller class
 * @class OrderControllers
 */
export default class OrderControllers {
  /**
   * @description Create an Order
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Number} orderId
   */
  static async CreateOrder(req, res) {
    try {
      // eslint-disable-next-line camelcase
      const { cart_id, shipping_id, tax_id } = req.body;
      const customerId = req.userData.id;
      const order = {
        cartId: cart_id,
        shippingId: shipping_id,
        taxId: tax_id,
        customerId
      };
      const orderId = await OrderServices.CreateOrder(order);
      return res.status(201).json({
        orderId
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          code: 'ORD_03',
          message: 'Internal Server Error.',
          status: 500
        }
      });
    }
  }

  /**
   * @description Get info about order
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} order info
   */
  static async GetOrderDetails(req, res) {
    try {
      const orderId = req.params.order_id;
      const response = await OrderServices.GetOrderDetails(orderId);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        error: {
          code: 'ORD_03',
          message: 'Internal Server Error.',
          status: 500
        }
      });
    }
  }

  /**
   * @description Get orders by Customer
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} customer orders
   */
  static async GetOrdersByCustomerId(req, res) {
    try {
      const customerId = req.userData.id;
      const response = await OrderServices.GetOrdersByCustomerId(customerId);
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          code: 'ORD_02',
          message: 'Order not found.',
          status: 404
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          code: 'ORD_03',
          message: 'Internal server error.',
          status: 500
        }
      });
    }
  }

  /**
   * @description Get info about order
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} order short details
   */
  static async GetOrderShortDetails(req, res) {
    try {
      const orderId = req.params.order_id;
      const response = await OrderServices.GetOrderShortDetails(orderId);
      if (response !== undefined) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          code: 'ORD_02',
          message: 'Order not found.',
          status: 404
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          code: 'ORD_03',
          message: 'Internal server error.',
          status: 500
        }
      });
    }
  }
}
