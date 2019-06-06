import handleValidations from './errorHandler';

const verifyUserInput = {
  registerCustomerRequestBody: (req, res, next) => {
    req.check('name', 'name is required').trim().notEmpty();
    req.check('email', 'email is required').trim().notEmpty();
    req.check('password', 'password is required').trim().notEmpty();
    req.check('email', 'invalid email type').isEmail();
    handleValidations(req, res, next);
  },
  loginCustomerRequestBody: (req, res, next) => {
    req.check('email', 'email is required').trim().notEmpty();
    req.check('password', 'password is required').trim().notEmpty();
    handleValidations(req, res, next);
  },
  updateCustomerRequestBody: (req, res, next) => {
    req.check('address_1', 'this field is required').trim().notEmpty();
    req.check('city', 'this field is required').trim().notEmpty();
    req.check('region', 'this field is required').trim().notEmpty();
    req.check('country', 'this field is required').trim().notEmpty();
    req.check('postal_code', 'this field is required').trim().notEmpty();
    req.check('shipping_region_id', 'this field is required').trim().notEmpty();
    handleValidations(req, res, next);
  },
  updateCustomerAccountDetailsRequestBody: (req, res, next) => {
    req.check('name', 'this field is required').trim().notEmpty();
    req.check('email', 'this field is required').trim().notEmpty();
    req.check('email', 'invalid email type').isEmail();
    req.check('password', 'this field is required').trim().notEmpty();
    req.check('day_phone', 'this field is required').trim().notEmpty();
    req.check('eve_phone', 'this field is required').trim().notEmpty();
    req.check('mob_phone', 'this field is required').trim().notEmpty();
    handleValidations(req, res, next);
  },
  updateCustomerCardDetailsRequestBody: (req, res, next) => {
    req.check('credit_card', 'this field is required').trim().notEmpty();
    handleValidations(req, res, next);
  },
  productReviewRequestBody: (req, res, next) => {
    req.check('review', 'review is required').trim().notEmpty();
    req.check('rating', 'rating is required').trim().notEmpty();
    req.check('rating', 'rating must be a number').trim().isNumber();
    handleValidations(req, res, next);
  },
  createOrderRequestBody: (req, res, next) => {
    req.check('cart_id', 'cart_id is required').trim().notEmpty();
    req.check('shipping_id', 'shipping_id must be numeric').trim().isNumeric();
    req.check('tax_id', 'tax_id must be numeric').trim().isNumeric();
    handleValidations(req, res, next);
  },
  validateProductRequestBody: (req, res, next) => {
    req.check('cart_id', 'cart_id is required').trim().notEmpty();
    req.check('product_id', 'product_id must be numeric').trim().isNumeric();
    req.check('attributes', 'attributes is required').trim().notEmpty();
    handleValidations(req, res, next);
  },
  validateUpdateCartByItem: (req, res, next) => {
    req.check('item_id', 'item_id is required').trim().isNumeric();
    req.check('quantity', 'quantity is required').trim().isNumeric();
    handleValidations(req, res, next);
  },
  getCartId: (req, res, next) => {
    req.check('cart_id', 'cart_id is required').trim().notEmpty();
    req.check('cart_id', 'cart_id must be a number.').trim().isNumeric();
    handleValidations(req, res, next);
  },
  getItemId: (req, res, next) => {
    req.check('item_id', 'item_id must be a number').trim().isNumeric();
    req.check('item_id', 'item_id is required.').trim().notEmpty();
    handleValidations(req, res, next);
  },
  getAttributeId: (req, res, next) => {
    req.check('attribute_id', 'attribute Id must be a number').trim().isNumeric();
    req.check('attribute_id', 'attribute Id is required').trim().notEmpty();
    handleValidations(req, res, next);
  },
  getProductId: (req, res, next) => {
    req.check('product_id', 'product id must be a number').trim().isNumeric();
    req.check('product_id', 'product Id is required').trim().notEmpty();
    handleValidations(req, res, next);
  },
  getCategoryId: (req, res, next) => {
    req.check('category_id', 'category id must be a number').trim().isNumeric();
    req.check('category_id', 'category Id is required').trim().notEmpty();
    handleValidations(req, res, next);
  },
  getDepartmentId: (req, res, next) => {
    req.check('department_id', 'department id must be a number').trim().isNumeric();
    req.check('department_id', 'department Id is required').trim().notEmpty();
    handleValidations(req, res, next);
  },
  getOrderId: (req, res, next) => {
    req.check('order_id', 'order id must be a number').trim().isNumeric();
    req.check('order_id', 'order Id is required').trim().notEmpty();
    handleValidations(req, res, next);
  },
  getShippingRegionId: (req, res, next) => {
    req.check('shipping_region_id', 'shipping_region_id must be a number').trim().isNumeric();
    req.check('shipping_region_id', 'shipping_region_id is required').trim().notEmpty();
    handleValidations(req, res, next);
  },
  stripeRequestBody: (req, res, next) => {
    req.check('token', 'this field is required').trim().notEmpty();
    req.check('order_id', 'order id is required').trim().notEmpty();
    req.check('amount', 'amount is required').trim().notEmpty();
    handleValidations(req, res, next);
  }
};

export default verifyUserInput;
