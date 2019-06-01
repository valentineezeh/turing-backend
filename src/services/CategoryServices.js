import CategoryRepositories from '../repositories/CategoryRepositories';

/**
 * @description Category service class
 * @class CategoryServices
 */
export default class CategoryServices {
  /**
     * @description gets all categories in the app
     * @returns {Object} returns categories object
     */
  static async GetAllCategories() {
    const allCategories = await CategoryRepositories.GetAllCategories();
    const response = Object.values(allCategories);
    return response;
  }

  /**
     * @description get a category using the category ID
     * @param {Number} categoryId - category Id
     * @returns {Object} returns a single category.
     */
  static async GetACategoryById(categoryId) {
    const response = await CategoryRepositories.GetACategoryById(categoryId);
    return response;
  }

  /**
     * @description get a category using the product ID
     * @param {Number} productId - product Id
     * @returns {Object} returns a single product.
     */
  static async GetProductCategoryById(productId) {
    const categoryInProduct = await CategoryRepositories.GetProductCategoryById(productId);
    const response = Object.values(categoryInProduct);
    return response;
  }

  /**
     * @description get categories of a product using department Id
     * @param {Number} departmentId - department Id
     * @returns {Object} returns an object
     */
  static async GetCategoryByDepartmentId(departmentId) {
    const categoryDepartment = await CategoryRepositories.GetCategoryByDepartmentId(departmentId);
    const response = Object.values(categoryDepartment);
    return response;
  }
}
