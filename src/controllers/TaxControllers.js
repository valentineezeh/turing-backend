// eslint-disable-next-line import/no-cycle
import TaxServices from '../services/TaxServices';

/**
 * @description Taxs controller class
 * @class TaxsController
 */
export default class TaxsController {
  /**
     * @description get all taxs
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns tax object
     */
  static async GetAllTax(req, res) {
    try {
      const response = await TaxServices.GetAllTax();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
      });
    }
  }

  /**
     * @description get a taxs by taxId
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns tax object via taxId
     */
  static async GetTaxById(req, res) {
    try {
      const { taxId } = req.params;
      const response = await TaxServices.GetTaxById(Number(taxId));
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: 'tax resource not found.'
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
      });
    }
  }
}
