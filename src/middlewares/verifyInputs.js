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
};

export default verifyUserInput;
