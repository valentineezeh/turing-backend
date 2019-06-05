/* eslint-disable camelcase */
/* eslint-disable import/no-cycle */
import CustomerRepositories from '../repositories/CustomerRepositories';
import helper from '../utils/helper';

/**
 * @description Customer service class
 * @class CustomerService
 */
export default class CustomerServices {
  /**
     * @description register a customer
     * @param {Object} customer - customer to be created
     * @returns {Number} returns a newly created customer ID from the repository
     */
  static async CustomerSignUp(customer) {
    try {
      const customerData = {
        name: customer.name,
        email: customer.email,
        password: await helper.hashPassword(customer.password)
      };
      const response = await CustomerRepositories.CustomerSignUp(customerData);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description get a single customer by Id
     * @param {Number} id
     * @returns {Object} returns a single customer with this Id from the repository
     */
  static async GetCustomerById(id) {
    const response = await CustomerRepositories.GetCustomerById(id);
    return response;
  }

  /**
     * @description login in a customer
     * @param {Object} email login details
     * @param {Object} password details from database
     * @returns {Object} customer login details
     */
  static async CustomerSignIn(email, password) {
    try {
      const res = await CustomerRepositories.CustomerSignIn(email);
      console.log('>>>>>: ', password, res.password);
      const match = await helper.comparePassword(password, res.password);
      const response = {
        match,
        id: res.customer_id
      };
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description check for existing customer
     * @param {String} email user email
     * @returns {Object} customer info
     */
  static async ExistingCustomer(email) {
    const response = await CustomerRepositories.CustomerSignIn(email);
    return response;
  }

  /**
     * @description this update a customer details
     * @param {Object} customerObject - customer details to be updated
     * @param {Number} customerId - customer Id
     * @returns {Object} returns a newly updated customer details
     */
  static async UpdateCustomerDetails(customerObject) {
    try {
      const {
        address_1, address_2,
        city,
        region,
        country,
        postal_code,
        customerId,
        shipping_region_id
      } = customerObject;
      await CustomerRepositories.UpdateCustomerDetails({
        customerId,
        address_1,
        address_2,
        city,
        region,
        country,
        postal_code,
        shipping_region_id
      });
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description update a customer account details
     * @param {Object} customerObject - customer object to be updated
     * @param {Number} customerId - customer id gotting from token
     * @returns {Object} returns a newly updated customer account details
     */
  static async UpdateCustomerAccountDetails(customerObject) {
    try {
      const {
        name, email,
        password,
        day_phone,
        eve_phone,
        mob_phone,
        customerId,
      } = customerObject;
      await CustomerRepositories.UpdateCustomerAccountDetails({
        customerId,
        name,
        email,
        password: await helper.hashPassword(password),
        day_phone,
        eve_phone,
        mob_phone,
      });
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description register a customer
     * @param {Object} customerBody - customer to be created
     * @param {Number} customerId - customer to be created
     * @returns {Object} returns a newly created customer ID from the repository
     */
  static async UpdateCustomerCreditCardDetails(customerBody) {
    try {
      const {
        credit_card,
        customerId,
      } = customerBody;
      await CustomerRepositories.UpdateCustomerCreditCardDetails({
        customerId,
        credit_card
      });
    } catch (error) {
      throw error;
    }
  }
}
