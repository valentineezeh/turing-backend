import isEmpty from 'is-empty';
import CategoryServices from '../services/CategoryServices';

/**
 * @description Category controller class
 * @class CategoryControllers
 */
export default class CategoryControllers {
  /**
   * @description Get all categories
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} returns an object
   */
  static async GetAllCategories(req, res) {
    try {
      const response = await CategoryServices.GetAllCategories();
      if (!isEmpty(response)) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: 'Categories not found.'
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
      });
    }
  }

  /**
   * @description Get a category using category Id
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} returns an object
   */
  static async GetACategoryById(req, res) {
    try {
      const { categoryId } = req.params;
      const response = await CategoryServices.GetACategoryById(categoryId);
      if (!isEmpty(response)) {
        return res.status(200).json({ category_id: categoryId, ...response });
      }
      return res.status(404).json({
        error: 'Categories not found.'
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
      });
    }
  }

  /**
   * @description Get a category using product Id
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} returns an object
   */
  static async GetProductCategoryById(req, res) {
    try {
      const { productId } = req.params;
      const response = await CategoryServices.GetProductCategoryById(productId);
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: 'Product Category not found.'
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
      });
    }
  }

  /**
   * @description Get a category using product Id
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} returns an object
   */
  static async GetCategoryByDepartmentId(req, res) {
    try {
      const { departmentId } = req.params;
      const response = await CategoryServices.GetCategoryByDepartmentId(departmentId);
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: 'Category not found in department.'
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
      });
    }
  }
}
