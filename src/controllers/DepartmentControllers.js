/* eslint-disable camelcase */
import isEmpty from 'is-empty';
// eslint-disable-next-line import/no-cycle
import DepartmentServices from '../services/DepartmentServices';

/**
 * @description Department controller class
 * @class DepartmentsController
 */
export default class DepartmentControllers {
  /**
     * @description get department list
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns list of departments
     */
  static async GetAllDepartments(req, res) {
    try {
      const response = await DepartmentServices.GetAllDepartments();
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          code: 'DEP_02',
          message: 'Department not found.',
          status: 404
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          code: 'DEP_03',
          message: 'Internal server error.',
          status: 500
        }
      });
    }
  }

  /**
     * @description get department list
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns list of departments
     */
  static async GetDepartmentById(req, res) {
    try {
      const { department_id } = req.params;
      const response = await DepartmentServices.GetDepartmentById(Number(department_id));
      if (!isEmpty(response[0])) {
        return res.status(200).json({ department_id, ...response[0] });
      }
      return res.status(404).json({
        error: {
          code: 'DEP_02',
          message: 'Department not found.',
          status: 404
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          code: 'DEP_03',
          message: 'Internal server error.',
          status: 500
        }
      });
    }
  }
}
