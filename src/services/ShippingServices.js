/* eslint-disable import/no-cycle */
import ShippingRepositories from '../repositories/ShippingRepositories';

/**
 * @description Shipping service class
 * @class ShippingServices
 */
export default class ShippingServices {
  /**
     * @description Get all shipping regions
     * @param {null} cart - no parameter
     * @returns {Object} returns all shipping regions
     */
  static async GetShippingRegions() {
    const response = await ShippingRepositories.GetShippingRegions();
    const regions = Object.values(response[0]);
    return regions;
  }

  /**
     * @description Get shippings by region using region id
     * @param {Number} regionId - shipping region id
     * @returns {Object}  result shippins in a region
     */
  static async GetShippingsByRegionId(regionId) {
    const response = await ShippingRepositories.GetShippingsByRegionId(regionId);
    const shippings = Object.values(response[0]);
    return shippings;
  }
}
