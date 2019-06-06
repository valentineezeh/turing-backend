// eslint-disable-next-line import/no-cycle
import sequelize from '../bin/www';

/**
 * @description Attributes repository class
 * @class AttributesRepository
 */
export default class AttributesRepositories {
  /**
     * @description get attributes list
     * @returns {Object} returns all attributes List
     */
  static async GetAttributeList() {
    try {
      const response = await sequelize.query('CALL catalog_get_attributes()', {
        type: sequelize.QueryTypes.SELECT
      });
      return response[0];
    } catch (error) {
      return error;
    }
  }

  /**
     * @description get attribute by Id
     * @param {NUMBER} attributeId - attribute ID
     * @returns {Object} returns a single attribute via attribute Id
     */
  static async GetAttributesById(attributeId) {
    try {
      const response = await sequelize.query('CALL catalog_get_attribute_details(:id)', {
        replacements: {
          id: attributeId
        }
      }, {
        type: sequelize.QueryTypes.SELECT
      });
      return response;
    } catch (error) {
      return error;
    }
  }

  /**
     * @description get attribute values by ID
     * @param {NUMBER} attributeId - attribute ID
     * @returns {Object} returns a single attribute Value via attribute Id
     */
  static async GetAttributesValueById(attributeId) {
    try {
      const response = await sequelize.query('CALL catalog_get_attribute_values(:id)', {
        replacements: {
          id: attributeId
        },
      }, {
        type: sequelize.QueryTypes.SELECT
      });
      return response;
    } catch (error) {
      return error;
    }
  }

  /**
     * @description get attribute values by ID
     * @param {NUMBER} productId - attribute ID
     * @returns {Object} returns a single attribute Value via attribute Id
     */
  static async GetAttributesByProductId(productId) {
    try {
      const response = await sequelize.query('CALL catalog_get_product_attributes(:id)', {
        replacements: {
          id: productId
        },
      }, {
        type: sequelize.QueryTypes.SELECT
      });
      return response;
    } catch (error) {
      return error;
    }
  }
}
