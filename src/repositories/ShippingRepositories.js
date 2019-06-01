/* eslint-disable import/no-cycle */
import sequelize from '../bin/www';

/**
 * @description Shipping repository class
 * @class ShippingRepositories
 */
export default class ShippingRepositories {
/**
     * @description Get all shipping regions
     * @returns {Object}  result from query
     */
  static async GetShippingRegions() {
    try {
      const response = await sequelize.query('CALL customer_get_shipping_regions();', {
        type: sequelize.QueryTypes.SELECT
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Get shippings by region
     * @param {Number} regionId - shipping region id
     * @returns {Object}  returns object
     */
  static async GetShippingsByRegionId(regionId) {
    try {
      const response = await sequelize.query('CALL orders_get_shipping_info(:id)', {
        replacements: {
          id: regionId
        },
        type: sequelize.QueryTypes.SELECT
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}
