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
      if (!isEmpty(response[0])) {
        return res.status(200).json(response);
      }
      return res.status(500).json({
        error: 'Ooops Something went wrong, Please try again.',
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
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
      const { departmentId } = req.params;
      // eslint-disable-next-line radix
      const response = await DepartmentServices.GetDepartmentById(parseInt(departmentId));
      if (!isEmpty(response[0])) {
        return res.status(200).json({ department_id: departmentId, ...response[0] });
      }
      return res.status(404).json({
        error: 'Department not found.'
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
      });
    }
  }
}
