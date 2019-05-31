// eslint-disable-next-line import/no-cycle
import sequelize from '../bin/www';

/**
 * @description departments repository class
 * @class DepartmentsRepository
 */
export default class DepartmentsRepositories {
  /**
     * @description get departments list
     * @returns {Object} returns all department List
     */
  static async GetAllDepartments() {
    try {
      const response = await sequelize.query('CALL catalog_get_departments()', {
        type: sequelize.QueryTypes.SELECT
      });
      return response[0];
    } catch (error) {
      return error;
    }
  }

  /**
     * @description get department by ID
     * @param {NUMBER} departmentId - department ID
     * @returns {Object} returns department via Id
     */
  static async GetDepartmentById(departmentId) {
    try {
      const response = await sequelize.query('CALL catalog_get_department_details(:inDepartmentId)', {
        replacements: {
          inDepartmentId: departmentId
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
