import sequelize from '../bin/www';

/**
 * @description Customer repository class
 * @class CustomerRepositories
 */
export default class CustomerRepositories {
  /**
     * @description register a customer
     * @param {Object} customer - customer to be created
     * @returns {Number} returns a newly created customer ID
     */
  static async CustomerSignUp(customer) {
    try {
      const response = await sequelize.query('CALL customer_add(:name, :email, :password);', {
        replacements: {
          name: customer.name,
          email: customer.email,
          password: customer.password
        },
        type: sequelize.QueryTypes.INSERT
      });
      return response[0]['LAST_INSERT_ID()'];
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description get a single customer by Id
     * @param {Number} customerId
     * @returns {Object} returns a single customer with this Id from the datastore
     */
  static async GetCustomerById(customerId) {
    try {
      const response = await sequelize.query('CALL customer_get_customer(:id);', {
        replacements: {
          id: customerId
        },
        type: sequelize.QueryTypes.SELECT
      });
      return response[0]['0'];
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description check for existing user by email
     * @param {Object} email - get user by email
     * @returns {Object} returns a response
     */
  static async CustomerSignIn(email) {
    try {
      const response = await sequelize.query('CALL customer_get_login_info(:email)', {
        replacements: {
          email
        },
        type: sequelize.QueryTypes.SELECT
      });
      return response[0]['0'];
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description update by Id
     * @param {Object} customer
     * @returns {Object} returns a single customer with this Id from the datastore
     */
  static async UpdateCustomerDetails(customer) {
    try {
      await sequelize.query(
        'CALL customer_update_address(:customer_id, :address_1, :address_2, :city, :region, :country, :postal_code, :shipping_region_id);', {
          replacements: {
            customer_id: customer.customerId,
            address_1: customer.address_1,
            address_2: customer.address_2,
            city: customer.city,
            region: customer.region,
            country: customer.country,
            postal_code: customer.postal_code,
            shipping_region_id: customer.shipping_region_id
          },
          type: sequelize.QueryTypes.UPDATE
        }
      );
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description update by Id
     * @param {Object} customer
     * @returns {Object} returns a single customer with this Id from the datastore
     */
  static async UpdateCustomerAccountDetails(customer) {
    try {
      await sequelize.query(
        'CALL customer_update_account(:customer_id, :name, :email, :password, :day_phone, :eve_phone, :mob_phone);', {
          replacements: {
            customer_id: customer.customerId,
            name: customer.name,
            email: customer.email,
            password: customer.password,
            day_phone: customer.day_phone,
            eve_phone: customer.eve_phone,
            mob_phone: customer.mob_phone,
          },
          type: sequelize.QueryTypes.UPDATE
        }
      );
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description update by Id
     * @param {Object} customer
     * @returns {Object} returns a single customer with this Id from the datastore
     */
  static async UpdateCustomerCreditCardDetails(customer) {
    try {
      await sequelize.query(
        'CALL customer_update_credit_card(:customer_id, :credit_card);', {
          replacements: {
            customer_id: customer.customerId,
            credit_card: customer.credit_card
          },
          type: sequelize.QueryTypes.UPDATE
        }
      );
    } catch (error) {
      throw error;
    }
  }
}
