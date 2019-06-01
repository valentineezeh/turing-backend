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
        error: 'Internal server error.'
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


      if (inAllWords.toLowerCase().trim() !== 'on' && inAllWords.toLowerCase().trim() !== 'off' && inAllWords.toLowerCase().trim() !== '') {
        return res.status(400).json({
          error: 'This field can either be On, Off or empty'
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
        error: 'Product requested does not exist.'
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
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
      const { productId } = req.params;
      const response = await ProductServices.GetProductById(Number(productId));
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: 'Product requested does not exist.'
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
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
      const { categoryId } = req.params;
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
      const response = await ProductServices.GetProductByCategoryId(Number(categoryId), Number(page), Number(limit), Number(descriptionLength));
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: 'Product requested does not exist.'
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
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

      const { departmentId } = req.params;

      let { page } = req.query;

      if (page === undefined) {
        page = 1;
      }

      const response = await ProductServices.GetProductsByDepartmentId(departmentId, descriptionLength, limit, page);
      if (!isEmpty(response[0])) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: 'Product requested does not exist.'
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
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
      const { productId } = req.params;
      const response = await ProductServices.GetProductDetailsByProductId(Number(productId));
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: 'Product requested does not exist.'
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
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
      const { productId } = req.params;
      const response = await ProductServices.GetProductLocationByProductId(Number(productId));
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: 'Product requested does not exist.'
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
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
      const { productId } = req.params;
      const response = await ProductServices.GetProductReviewByProductId(Number(productId));
      if (response.length !== 0) {
        return res.status(200).json(response);
      }
      return res.status(404).json({
        error: 'This product is yet to have any review.'
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
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
      const { productId } = req.params;
      const customerId = req.userData.id;
      const reviewObject = {
        review: String(review),
        rating: Number(rating),
        productId: Number(productId),
        customerId: Number(customerId)
      };
      if (reviewObject.rating < 1 || reviewObject.rating > 5) {
        return res.status(400).json({
          error: 'rating must be between 1 and 5'
        });
      }
      await ProductServices.PostProductReviews(reviewObject.productId, reviewObject.customerId, reviewObject.review, reviewObject.rating);
  
      const response = await ProductServices.GetProductReviewByProductId(productId);
      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.'
      });
    }
  }
}
