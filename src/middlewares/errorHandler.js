const handleValidations = (req, res, next) => {
  const error = req.validationErrors();
  const validationErrors = {};
  if (error) {
    error.map((err) => {
      validationErrors.code = 'USR_02';
      validationErrors.message = err.msg;
    });
    return res.status(400).json({
      error: validationErrors
    });
  }
  next();
};

export default handleValidations;
