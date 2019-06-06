// eslint-disable-next-line import/no-cycle
import ProductRepositories from '../repositories/ProductRepositories';

/**
 * @description Product service class
 * @class ProductsServices
 */
export default class ProductServices {
  /**
     * @description get all products
     * @param {STRING} descriptionLength - description length
     * @param {NUMBER} limit - number of item on a page
     * @param {NUMBER} page - page number
     * length
     * @returns {Object} returns an object
     */
  static async GetAllProducts(descriptionLength, limit, page) {
    const response = await ProductRepositories.GetAllProducts(descriptionLength, limit, page);
    // const obj1 = Object.values(allProducts[0]);
    // const obj2 = Object.values(allProducts[1]);
    // const products = { ...obj1, obj2 };
    // const response = products;
    return response;
  }

  /**
     * @description search for product
     * @param {STRING} searchString - search string
     * @param {STRING} inAllWords - all words attributes
     * @param {NUMBER} page - page number
     * @param {NUMBER} limit - number
     * @param {STRING} descriptionLength - description length
     * @returns {Object} returns an object
     */
  static async ProductSearch(searchString, inAllWords, page, limit, descriptionLength) {
    const response = await ProductRepositories.ProductSearch(searchString, inAllWords, page, limit, descriptionLength);
    return response;
  }

  /**
     * @description get a Product with ProductId
     * @param {NUMBER} productId - product ID
     * @returns {Object} returns a product via productId
     */
  static async GetProductById(productId) {
    const response = await ProductRepositories.GetProductById(productId);
    return response;
  }

  /**
     * @description get a Product inCategory with categoryId
     * @param {NUMBER} categoryId - category ID
     * @param {NUMBER} page - page number
     * @param {NUMBER} limit - limit
     * @param {NUMBER} descriptionLength - descriptionLength
     * @returns {Object} returns a product inCategory  via categoryId
     */
  static async GetProductByCategoryId(categoryId, page, limit, descriptionLength) {
    const response = await ProductRepositories.GetProductByCategoryId(categoryId, page, limit, descriptionLength);
    return response;
  }

  /**
     * @description get all products in department by department Id
     * @param {NUMBER} departmentId - department Id
     * @param {STRING} descriptionLength - description length
     * @param {NUMBER} limit - number of item on a page
     * @param {NUMBER} page - page number
     * length
     * @returns {Object} returns an object
     */
  static async GetProductsByDepartmentId(departmentId, descriptionLength, limit, page) {
    const response = await ProductRepositories.GetProductsByDepartmentId(departmentId, descriptionLength, limit, page);
    return response;
  }

  /**
     * @description get a Product details via productId
     * @param {NUMBER} productId - product ID
     * @returns {Object} returns a product via productId
     */
  static async GetProductDetailsByProductId(productId) {
    const response = await ProductRepositories.GetProductDetailsByProductId(productId);
    return response;
  }

  /**
     * @description get a Product Location with productId
     * @param {NUMBER} productId - product ID
     * @returns {Object} returns a product Location via productId
     */
  static async GetProductLocationByProductId(productId) {
    const response = await ProductRepositories.GetProductLocationByProductId(productId);
    return response;
  }

  /**
     * @description get a Product Review via productId
     * @param {NUMBER} productId - product ID
     * @returns {Object} returns a product Review via productId
     */
  static async GetProductReviewByProductId(productId) {
    const response = await ProductRepositories.GetProductReviewByProductId(productId);
    return response;
  }

  /**
     * @description adds review to a product
     * @param {NUMBER} productId - product id
     * @param {NUMBER} customerId - cutomer id
     * @param {STRING} review - product review
     * @param {NUMBER} rating - number
     * @param {STRING} descriptionLength - description length
     * @returns {Object} returns an object
     */
  static async PostProductReviews(productId, customerId, review, rating) {
    const response = await ProductRepositories.PostProductReviews(productId, customerId, review, rating);
    return response;
  }
}
