/* eslint-disable import/no-cycle */
import ShippingServices from '../services/ShippingServices';

/**
 * @description Shipping controller class
 * @class ShippingControllers
 */
export default class ShippingControllers {
/**
   * @description Get all shipping regions
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} returns all shipping regions
   */
  static async GetShippingRegions(req, res) {
    try {
      const response = await ShippingServices.GetShippingRegions();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        error: {
          message: 'Internal server error.'
        }
      });
    }
  }

  /**
   * @description Get shippings by region
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} result shippins in a region
   */
  static async GetShippingsByRegionId(req, res) {
    try {
      const regionId = req.params.shipping_region_id;
      const response = await ShippingServices.GetShippingsByRegionId(regionId);
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          code: 'SHP_02',
          message: 'Shipping region not found.'
        }
      })
    } catch (error) {
      return res.status(500).json({
        error: {
          message: 'Internal server error.'
        }
      });
    }
  }
}
