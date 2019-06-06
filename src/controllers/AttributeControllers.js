/* eslint-disable camelcase */
// eslint-disable-next-line import/no-cycle
import AttributeServices from '../services/AttributeServices';

/**
 * @description Attribute controller class
 * @class AttributeController
 */
export default class AttributeControllers {
  /**
     * @description get attribute list
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns list of attributes
     */
  static async GetAttributeList(req, res) {
    try {
      const response = await AttributeServices.GetAttributeList();
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          message: 'Ooops Something went wrong, Please try again.',
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          message: 'Internal server error.'
        }
      });
    }
  }

  /**
     * @description a attribute by ID
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns list of attributes
     */
  static async GetAttributesById(req, res) {
    try {
      const { attribute_id } = req.params;
      const response = await AttributeServices.GetAttributesById(Number(attribute_id));
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          message: 'Attribute resource not found'
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          message: 'Internal server error'
        }
      });
    }
  }

  /**
     * @description get an attribute by attributeId
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns list of attributes
     */
  static async GetAttributesValueById(req, res) {
    try {
      const { attribute_id } = req.params;
      const response = await AttributeServices.GetAttributesValueById(Number(attribute_id));
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          message: 'Attribute Values resource not found'
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          message: 'Internal server error.'
        }
      });
    }
  }

  /**
     * @description get attribute by productId
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns list of attributes
     */
  static async GetAttributesByProductId(req, res) {
    try {
      const { product_id } = req.params;
      const response = await AttributeServices.GetAttributesByProductId(Number(product_id));
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          message: 'Product attribute resource not found'
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          message: 'Internal server error.'
        }
      });
    }
  }
}
