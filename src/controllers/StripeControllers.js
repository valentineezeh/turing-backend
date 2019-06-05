/* eslint-disable camelcase */
import dotenv from 'dotenv';
import StripeServices from '../services/StripeServices';

dotenv.config();

/**
 * @description Customer controller class
 * @class StripeControllers
 */
export default class StripeControllers {
  /**
   * @description Webhook response from stripe
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} status code
   */
  static async Webhook(req, res) {
    try {
      return res.status(200).json({
        received: true
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  }

  /**
   * @description Webhook response from stripe
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} customer with a token
   */
  static async StripePaymentIntgretion(req, res) {
    try {
      const userDetails = req.userData;
      const {
        token,
        order_id,
        description,
        amount,
      } = req.body;
      const orderId = Number(order_id);
      let currency;
      if (currency === undefined || currency === null) {
        currency = 'usd';
      }
      const option = {
        token, orderId, description, amount, currency
      };
      const response = await StripeServices.StripePaymentIntgretion(option, userDetails);
      return res.status(201).json({
        status: response.status,
        response,

      });
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  }
}
