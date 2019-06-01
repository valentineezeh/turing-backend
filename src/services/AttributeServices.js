// eslint-disable-next-line import/no-cycle
import AttributeRepositories from '../repositories/AttributeRepositories';

/**
 * @description Attribute service class
 * @class AttributeService
 */
export default class AttributeServices {
  /**
     * @description get attribute list
     * @returns {Object} returns attributes list
     */
  static async GetAttributeList() {
    const getAttributeList = await AttributeRepositories.GetAttributeList();
    const response = Object.values(getAttributeList);
    return response;
  }

  /**
     * @description get attribute by ID
     * @param {NUMBER} attributeId - attribute ID
     * @returns {Object} returns a single attribute via attribute Id
     */
  static async GetAttributesById(attributeId) {
    const response = await AttributeRepositories.GetAttributesById(attributeId);
    return response;
  }

  /**
     * @description get attribute value by ID
     * @param {NUMBER} attributeId - attribute ID
     * @returns {Object} returns a single attribute value via attribute Id
     */
  static async GetAttributesValueById(attributeId) {
    const response = await AttributeRepositories.GetAttributesValueById(attributeId);
    return response;
  }

  /**
     * @description get attribute value by ID
     * @param {NUMBER} productId - attribute ID
     * @returns {Object} returns a single attribute value via attribute Id
     */
  static async GetAttributesByProductId(productId) {
    const response = await AttributeRepositories.GetAttributesByProductId(productId);
    return response;
  }
}
