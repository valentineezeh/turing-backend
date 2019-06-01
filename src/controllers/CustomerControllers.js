/* eslint-disable import/no-cycle */
import dotenv from 'dotenv';
import CustomerServices from '../services/CustomerServices';
import helper from '../utils/helper';

dotenv.config();

/**
 * @description Customer controllers class
 * @class CustomerControllers
 */
export default class CustomerControllers {
  /**
   * @description Register a customer and return the customer with a token
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} customer with a token
   */
  static async CustomerSignUp(req, res) {
    try {
      const { name, email, password } = req.body;
      const customerBody = {
        name,
        email: email.toLowerCase(),
        password
      };
      const customer = await CustomerServices.ExistingCustomer(customerBody.email);
      if (customer) {
        return res.status(409).json({ error: 'user already exist' });
      }
      const customerId = await CustomerServices.CustomerSignUp(customerBody);
      if (customerId !== null || customerId !== undefined) {
        const response = await CustomerServices.GetCustomerById(customerId);
        const payload = {
          email: response.email,
          name: response.name,
          id: response.customer_id
        };
        return res.status(200).json(
          {
            customer: {
              schema: response
            },
            accessToken: `Bearer ${helper.generateToken('CustomerSignUp', payload)}`,
            expires_in: process.env.TOKEN_EXPIRES_IN
          }
        );
      }
      return res.status(400).json({
        error: 'Oops! something went wrong please try again.'
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message
      });
    }
  }

  /**
   * @description Login with email and password and return the customer with a token if successful
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} customer with a token
   */
  static async CustomerSignIn(req, res) {
    const { email, password } = req.body;
    const response = await CustomerServices.CustomerSignIn(email, password);
    if (response.match) {
      const customer = await CustomerServices.GetCustomerById(response.id);
      const payload = {
        email: customer.email,
        name: customer.name,
        id: customer.customer_id
      };
      return res.status(200).json({
        customer: {
          schema: customer
        },
        accessToken: `Bearer ${helper.generateToken('UserLogin', payload)}`,
        expires_in: process.env.TOKEN_EXPIRES_IN
      });
    }
    return res.status(401).json({
      message: 'Invalid Credentials, please try.'
    });
  }

  /**
   * @description Get a single customer
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} customer with a token
   */
  static async GetCustomerById(req, res) {
    try {
      const userDatails = req.userData;
      const response = await CustomerServices.GetCustomerById(userDatails.id);
      if (!response) {
        return res.status(404).json({
          message: 'User does not exist',
        });
      }
      return res.status(200).json({
        customer: {
          schema: response
        },
      });
    } catch (error) {
      return res.status(401).json({
        message: error.message
      });
    }
  }
}
