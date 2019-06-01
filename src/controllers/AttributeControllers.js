import isEmpty from 'is-empty';
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
      if (!isEmpty(response[0])) {
        return res.status(200).json(response[0]);
      }
      return res.status(500).json({
        message: 'Ooops Something went wrong, Please try again.',
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
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
      const { attributeId } = req.params;
      const response = await AttributeServices.GetAttributesById(Number(attributeId));
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: 'Attribute resource not found'
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
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
      const { attributeId } = req.params;
      const response = await AttributeServices.GetAttributesValueById(Number(attributeId));
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: 'Attribute Values resource not found'
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
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
      const { productId } = req.params;
      const response = await AttributeServices.GetAttributesByProductId(Number(productId));
      if (response.length > 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: 'Product attribute resource not found'
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
      });
    }
  }
}
