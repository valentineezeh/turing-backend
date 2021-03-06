/* eslint-disable camelcase */
/* eslint-disable import/no-cycle */
import isEmpty from 'is-empty';
import ProductServices from '../services/ProductServices';

/**
 * @description Products controller class
 * @class ProductControllers
 */
export default class ProductControllers {
  /**
     * @description get all products in the application
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns products object
     */
  static async GetAllProducts(req, res) {
    try {
      const {
        limit,
        page
      } = req.query;

      let { descriptionLength } = req.query;
      if (descriptionLength === undefined) {
        descriptionLength = '200';
      }

      const response = await ProductServices.GetAllProducts(descriptionLength, limit, page);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        error: {
          code: 'PRO_03',
          message: 'Internal server error.',
          status: 500
        }
      });
    }
  }

  /**
     * @description Search for a product
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns product object
     */
  static async ProductSearch(req, res) {
    try {
      const {
        searchString,
        inAllWords,
      } = req.query;

      let {
        page,
        limit,
        descriptionLength
      } = req.query;


      if (inAllWords.toLowerCase().trim() !== 'on' && inAllWords.toLowerCase().trim() !== 'off') {
        return res.status(400).json({
          error: {
            code: 'PRO_01',
            message: 'This field can either be On, Off or empty',
            status: 400
          }
        });
      }
      if (page === undefined || limit === undefined || descriptionLength === undefined) {
        page = 1;
        limit = 20;
        descriptionLength = 200;
      }
      const response = await ProductServices.ProductSearch(
        searchString, inAllWords.toLowerCase(), Number(page), Number(limit), Number(descriptionLength)
      );
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          code: 'PRO_02',
          message: 'Product requested does not exist.',
          status: 404
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          code: 'PRO_03',
          message: 'Internal server error.',
          status: 500
        }
      });
    }
  }

  /**
     * @description get product by product id
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns product object
     */
  static async GetProductById(req, res) {
    try {
      const { product_id } = req.params;
      const response = await ProductServices.GetProductById(Number(product_id));
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          code: 'PRO_02',
          message: 'Product requested does not exist.',
          status: 404
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          code: 'PRO_03',
          message: 'Internal server error.',
          status: 500
        }
      });
    }
  }

  /**
     * @description get product inCategory by category id
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns product inCategory  object
     */
  static async GetProductByCategoryId(req, res) {
    try {
      const { category_id } = req.params;
      const {
        limit,
        descriptionLength
      } = req.query;

      let {
        page,
      } = req.query;

      if (page === undefined) {
        page = 1;
      }
      const response = await ProductServices.GetProductByCategoryId(Number(category_id), Number(page), Number(limit), Number(descriptionLength));
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          code: 'PRO_02',
          message: 'Product requested does not exist.',
          status: 404
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          code: 'PRO_03',
          message: 'Internal server error.',
          status: 500
        }
      });
    }
  }

  /**
     * @description get all products in departement by department id
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns products object
     */
  static async GetProductsByDepartmentId(req, res) {
    try {
      const {
        limit,
        descriptionLength
      } = req.query;

      const { department_id } = req.params;

      let { page } = req.query;

      if (page === undefined) {
        page = 1;
      }

      const response = await ProductServices.GetProductsByDepartmentId(department_id, descriptionLength, limit, page);
      if (!isEmpty(response[0])) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          code: 'PRO_02',
          message: 'Product requested does not exist.',
          status: 404
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          code: 'PRO_03',
          message: 'Internal server error.',
          status: 500
        }
      });
    }
  }

  /**
     * @description get product details by product id
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns product details object
     */
  static async GetProductDetailsByProductId(req, res) {
    try {
      const { product_id } = req.params;
      const response = await ProductServices.GetProductDetailsByProductId(Number(product_id));
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          code: 'PRO_02',
          message: 'Product requested does not exist.',
          status: 404
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          code: 'PRO_03',
          message: 'Internal server error.',
          status: 500
        }
      });
    }
  }

  /**
     * @description get product location by product id
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns product location object
     */
  static async GetProductLocationByProductId(req, res) {
    try {
      const { product_id } = req.params;
      const response = await ProductServices.GetProductLocationByProductId(Number(product_id));
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          code: 'PRO_02',
          message: 'Product requested does not exist.',
          status: 404
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          code: 'PRO_03',
          message: 'Internal server error.',
          status: 500
        }
      });
    }
  }

  /**
     * @description get product Review by product id
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns product object
     */
  static async GetProductReviewByProductId(req, res) {
    try {
      const { product_id } = req.params;
      const response = await ProductServices.GetProductReviewByProductId(Number(product_id));
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: {
          code: 'PRO_02',
          message: 'This product is yet to have any review.',
          status: 404
        }
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          code: 'PRO_03',
          message: 'Internal server error.',
          status: 500
        }
      });
    }
  }

  /**
     * @description add a review to a product
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns product review object
     */
  static async PostProductReviews(req, res) {
    try {
      const {
        review,
        rating
      } = req.body;
      const { product_id } = req.params;
      const customerId = req.userData.id;
      const reviewObject = {
        review: String(review),
        rating: Number(rating),
        productId: Number(product_id),
        customerId: Number(customerId)
      };
      if (reviewObject.rating < 1 || reviewObject.rating > 5) {
        return res.status(400).json({
          error: {
            code: 'PRO_01',
            message: 'rating must be between 1 and 5',
            status: 400
          }
        });
      }
      await ProductServices.PostProductReviews(reviewObject.productId, reviewObject.customerId, reviewObject.review, reviewObject.rating);
      const response = await ProductServices.GetProductReviewByProductId(product_id);
      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json({
        error: {
          code: 'PRO_03',
          message: 'Internal server error.',
          status: 500
        }
      });
    }
  }
}
