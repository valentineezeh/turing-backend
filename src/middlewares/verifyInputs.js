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
    handleValidations(req, res, next);
  },
  getItemId: (req, res, next) => {
    req.check('item_id', 'item_id is required').trim().isNumeric();
    handleValidations(req, res, next);
  },
};

export default verifyUserInput;
