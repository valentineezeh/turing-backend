/* eslint-disable import/no-cycle */
import OrderRepositories from '../repositories/OrderRepositories';

/**
 * @description Order service class
 * @class OrderServices
 */
export default class OrderServices {
  /**
     * @description Create an order
     * @param {Object} order - order to be created
     * @returns {Number} returns a newly created order ID from the repository
     */
  static async CreateOrder(order) {
    const response = await OrderRepositories.CreateOrder(order);
    return response[0].orderId;
  }

  /**
     * @description Get info about order
     * @param {Number} orderId - order Id
     * @returns {Object} returns information of the order with this ID from the repository
     */
  static async GetOrderDetails(orderId) {
    const response = await OrderRepositories.GetOrderDetails(orderId);
    const orderDetails = Object.values(response[0]);
    return orderDetails;
  }

  /**
     * @description Get orders by Customer
     * @param {Number} customerId - customer Id
     * @returns {Object} returns orders for customer with this ID from the repository
     */
  static async GetOrdersByCustomerId(customerId) {
    const response = await OrderRepositories.GetOrdersByCustomerId(customerId);
    const customerOrders = Object.values(response[0]);
    return customerOrders;
  }

  /**
     * @description Get info about order
     * @param {Number} orderId - order Id
     * @returns {Object} returns short details of the order with this ID from the repository
     */
  static async GetOrderShortDetails(orderId) {
    const response = await OrderRepositories.GetOrderShortDetails(orderId);
    return response[0]['0'];
  }
}
