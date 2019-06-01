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
    const departmentList = await DepartmentRepositories.GetAllDepartments();
    const response = Object.values(departmentList);
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
