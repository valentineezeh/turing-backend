/* eslint-disable camelcase */
/* eslint-disable import/no-cycle */
import dotenv from 'dotenv';
import isEmpty from 'is-empty';
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
    try {
      const { email, password } = req.body;
      const checkUser = await CustomerServices.ExistingCustomer(email);
      if (checkUser) {
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
      return res.status(404).json({
        error: 'User does not exist.'
      })
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
      });
    }
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
      if (isEmpty(response)) {
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
        message: 'Internal server error'
      });
    }
  }

  /**
   * @description Update a customer and return the customer updated details
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} updated customer details
   */
  static async UpdateCustomerDetails(req, res) {
    try {
      const { id } = req.userData;
      const {
        address_1, address_2, city, region, country,
        postal_code, shipping_region_id
      } = req.body;
      const customerObject = {
        customerId: id,
        address_1,
        address_2,
        city,
        region,
        country,
        postal_code,
        shipping_region_id
      };
      await CustomerServices.UpdateCustomerDetails(customerObject);
      const response = await CustomerServices.GetCustomerById(id);
      return res.status(200).json(
        {
          customer: {
            schema: response
          }
        }
      );
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error'
      });
    }
  }

  /**
   * @description update a customer account details and return an updated customer details
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} updated customer details
   */
  static async UpdateCustomerAccountDetails(req, res) {
    try {
      const { id } = req.userData;
      const {
        name, email,
        password,
        day_phone,
        eve_phone,
        mob_phone,
      } = req.body;
      const customerObject = {
        customerId: id,
        name,
        email,
        password,
        day_phone,
        eve_phone,
        mob_phone,
      };
      await CustomerServices.UpdateCustomerAccountDetails(customerObject);
      const response = await CustomerServices.GetCustomerById(id);
      return res.status(200).json(
        {
          customer: {
            schema: response
          }
        }
      );
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error'
      });
    }
  }

  /**
   * @description this update the customer credit card details
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} returns an updated credit card details
   */
  static async UpdateCustomerCreditCardDetails(req, res) {
    try {
      const { id } = req.userData;
      const {
        credit_card
      } = req.body;
      const customerObject = {
        customerId: id,
        credit_card
      };
      await CustomerServices.UpdateCustomerCreditCardDetails(customerObject);
      const response = await CustomerServices.GetCustomerById(id);
      return res.status(200).json(
        {
          customer: {
            schema: response
          }
        }
      );
    } catch (error) {
      return res.status(500).json({
        error: error.message
      });
    }
  }
}
