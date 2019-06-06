import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * @description Stripe service class
 * @class StripeServices
 */
export default class StripeServices {
  /**
     * @description Make payment with stripe
     * @param {Object} option
     * @param {Object} userDetails
     * @returns {Object} returns info from stripe
     */
  static async StripePaymentIntgretion(option, userDetails) {
    try {
      const customers = await stripe.customers.create({
        email: userDetails.email,
      });
      const source = await stripe.customers.createSource(customers.id, {
        source: 'tok_visa',
      });
      const { customer } = source;
      const {
        token, orderId, description, amount, currency,
      } = option;
      const response = await stripe.charges.create({
        token, orderId, description, amount, currency, customer
      });
      return response;
    } catch (error) {
      return error;
    }
  }
}
