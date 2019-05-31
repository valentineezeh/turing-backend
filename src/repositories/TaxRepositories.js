// eslint-disable-next-line import/no-cycle
import sequelize from '../bin/www';

/**
 * @description Tax repository class
 * @class TaxsRepository
 */
export default class TaxsRepositories {
  /**
     * @description get all Tax
     * @returns {Object} returns all Tax
     */
  static async GetAllTax() {
    try {
      const response = await sequelize.query('CALL tax_get_all()', {
        type: sequelize.QueryTypes.SELECT
      });
      return response[0];
    } catch (error) {
      return error;
    }
  }

  /**
     * @description get Tax by Id
     * @param {NUMBER} taxId - category ID
     * @returns {Object} returns Tax via taxId
     */
  static async GetTaxById(taxId) {
    try {
      const response = await sequelize.query('CALL tax_get_by_id(:id)', {
        replacements: {
          id: taxId
        }
      }, {
        type: sequelize.QueryTypes.SELECT
      });
      return response;
    } catch (error) {
      return error;
    }
  }
}
