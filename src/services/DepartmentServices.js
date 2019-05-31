// eslint-disable-next-line import/no-cycle
import DepartmentRepositories from '../repositories/DepartmentRepositories';

/**
 * @description Department service class
 * @class DepartmentsService
 */
export default class DepartmentsService {
  /**
     * @description get all the departments list
     * @returns {Object} returns department list
     */
  static async GetAllDepartments() {
    const response = await DepartmentRepositories.GetAllDepartments();
    return response;
  }

  /**
     * @description get all the departments list
     * @param {NUMBER} departmentId - attribute ID
     * @returns {Object} returns department list
     */
  static async GetDepartmentById(departmentId) {
    const response = await DepartmentRepositories.GetDepartmentById(departmentId);
    return response;
  }
}
