// eslint-disable-next-line import/no-cycle
import TaxsRepositories from '../repositories/TaxRepositories';

/**
 * @description Tax service class
 * @class TaxsServices
 */
export default class TaxsServices {
  /**
     * @description get all taxs
     * @returns {Object} returns all tax object
     */
  static async GetAllTax() {
    const allTax = await TaxsRepositories.GetAllTax();
    const response = Object.values(allTax);
    return response;
  }

  /**
     * @description task by Id
     * @param {NUMBER} taxId - Http Request object
     * @returns {Object} returns all tax object
     */
  static async GetTaxById(taxId) {
    const response = await TaxsRepositories.GetTaxById(taxId);
    return response[0];
  }
}
