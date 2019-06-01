import sequelize from '../bin/www';

/**
 * @description Category repository class
 * @class CategoryRepositories
 */
export default class CategoryRepositories {
  /**
     * @description gets all categories in the app
     * @returns {Object} returns categories object
     */
  static async GetAllCategories() {
    try {
      const response = await sequelize.query('CALL catalog_get_categories();', {

        type: sequelize.QueryTypes.SELECT
      });
      return response[0];
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description get a category using the category ID
     * @param {Number} categoryId - customer to be created
     * @returns {Object} returns a single category.
     */
  static async GetACategoryById(categoryId) {
    try {
      const response = await sequelize.query('CALL catalog_get_category_details(:id);', {
        replacements: {
          id: categoryId
        },
        type: sequelize.QueryTypes.SELECT
      });
      return response[0]['0'];
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description get categories of a product using product Id
     * @param {Number} productId - product ID
     * @returns {Object} returns an object
     */
  static async GetProductCategoryById(productId) {
    try {
      const response = await sequelize.query('CALL catalog_get_categories_for_product(:id);', {
        replacements: {
          id: productId
        },
        type: sequelize.QueryTypes.SELECT
      });
      return response[0];
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description get categories of a product using department Id
     * @param {Number} departmentId - department Id
     * @returns {Object} returns an object
     */
  static async GetCategoryByDepartmentId(departmentId) {
    try {
      const response = await sequelize.query('CALL catalog_get_department_categories(:id);', {
        replacements: {
          id: departmentId
        },
        type: sequelize.QueryTypes.SELECT
      });
      return response[0];
    } catch (error) {
      throw error;
    }
  }
}
