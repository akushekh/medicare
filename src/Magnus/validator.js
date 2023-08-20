const _ = require('lodash');
const logger = require("../logger");
const { StatusCodes } = require("http-status-codes");
const { CustomMessages } = require("./constants");
const validator = require("validator");
const { UsersSchema } = require("./Schema/userSchema");
const Ajv = require("ajv");
const ajv = new Ajv();
const {trimString} = require("./utils");

const isSchemaValid = (body) => {
  const isValidSchema = ajv.validate(UsersSchema, body);
  if (isValidSchema) {
    return true;
  }
  return false;
};

const isEmailValid = (email) => {
  const isValidEmail = validator.isEmail(email);
  if (isValidEmail) {
    return true;
  }
  return false;
};

const isPhoneNumberValid = (phoneNumber) => {
  const phonePattern = /^\d{10}$/;
  const phoneNumbers = phoneNumber.replace(/\D/g, "");
  if (phonePattern.test(phoneNumbers)) {
    return true;
  }
  return false;
};

const lengthOfKey = (key) => {
  if (key.length < 4) {
    return true;
  }
  return false;
};

const isMedicineTypeCorrect = (type) => {
  if (_.includes(['Allopath', 'Ayurveda', 'General', 'Homeopath' , 'Unani'], type)) {
    return false;
  }
  return true;
}

const requestValidator = (body) => {
  let validSchema = isSchemaValid(body);
  if (!validSchema) {
    return {
      err: CustomMessages.INVALID_SCHEMA,
    };
  }
  body.email = trimString(body.email);
  let validEmail = isEmailValid(body.email);
  if (!validEmail) {
    return {
      err: CustomMessages.INVALID_EMAIL,
    };
  }
  body.phoneNumber = trimString(body.phoneNumber);
  let validPhoneNumber = isPhoneNumberValid(body.phoneNumber);
  if (!validPhoneNumber) {
    return {
      err: CustomMessages.INVALID_PHONE_NUMBER,
    };
  }
  return {
    success: true,
  };
};

const requestValidatorMiddleware = async (req, res, next) => {
  let { body } = req;
  try {
    const { err } = requestValidator(body);
    if (err)
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ statusCode: StatusCodes.BAD_REQUEST, message: err });
  } catch (error) {
    logger.error({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
  next();
};

const searchKeyValidation = async (req, res, next) => {
  try {
    const err = lengthOfKey(req.params.key);
    if (err)
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          statusCode: StatusCodes.BAD_REQUEST,
          message: CustomMessages.KEY_LENGTH,
        });
  } catch (error) {
    logger.error({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
  next();
};

const validateMedicineType = async(req, res, next) => {
  try {
    const err = isMedicineTypeCorrect(req.query.type);
    if (err)
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          statusCode: StatusCodes.BAD_REQUEST,
          message: CustomMessages.INVALID_TYPE,
        });
  } catch (error) {
    logger.error({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
  next();
}

module.exports = {
  requestValidatorMiddleware,
  searchKeyValidation,
  validateMedicineType
};
