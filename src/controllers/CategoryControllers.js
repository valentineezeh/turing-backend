/* eslint-disable camelcase */
/* eslint-disable import/no-cycle */
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
        error: {
          code: 'CAT_01',
          message: 'Categories not found.',
          status: 404
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          code: 'CAT_03',
          message: 'Internal server error.',
          status: 500
        }
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
      const { category_id } = req.params;
      const response = await CategoryServices.GetACategoryById(category_id);
      if (!isEmpty(response)) {
        return res.status(200).json({ category_id, ...response });
      }
      return res.status(404).json({
        error: {
          code: 'CAT_01',
          message: 'Categories not found.',
          status: 404
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          code: 'CAT_03',
          message: 'Internal server error.',
          status: 500
        }
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
      const { product_id } = req.params;
      const response = await CategoryServices.GetProductCategoryById(product_id);
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          code: 'CAT_01',
          message: 'Product Category not found.',
          status: 404
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          code: 'CAT_03',
          message: 'Internal server error.',
          status: 500
        }
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
      const { department_id } = req.params;
      const response = await CategoryServices.GetCategoryByDepartmentId(department_id);
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          code: 'CAT_01',
          message: 'Category not found in department.',
          status: 404
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          code: 'CAT_03',
          message: 'Internal server error.',
          status: 500
        }
      });
    }
  }
}
