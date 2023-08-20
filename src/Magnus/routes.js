//express, lodash, ajv
const express = require("express");
const logger = require("../logger");
const { StatusCodes } = require("http-status-codes");
const router = express.Router();
require("../config/databaseConfig");
const users = require("./DatabaseSchema/usersDbSchema");
const {
  requestValidatorMiddleware,
  searchKeyValidation,
  validateMedicineType
} = require("./validator");
const { CustomMessages } = require("./constants");
const { options } = require("../config/openMRSConfig");
const axios = require("axios");
const { removeDuplicateObjectsFromArray } = require("./utils");

router.post(
  "/api/v1/register",
  requestValidatorMiddleware,
  async (req, res, next) => {
    try {
      const user = await users.findOne({ email: req.body.email });
      if (user) {
        logger.error({
          statusCode: StatusCodes.BAD_REQUEST,
          message: CustomMessages.EMAIL_EXISTS,
        });
        res
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: CustomMessages.EMAIL_EXISTS });
      } else {
        const newUser = new users(req.body);
        const result = await newUser.save();
        logger.info({
          status: StatusCodes.OK,
          message: "Registration succesfull, User data saved in DB.",
        });
        res.status(StatusCodes.OK).send({ message: message });
      }
    } catch (err) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send({ message: err.message });
      logger.error({
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message,
      });
    }
  }
);

router.post("/api/v1/login", async (req, res, next) => {
  try {
    const email = await users.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (email) {
      res.status(StatusCodes.OK).send({ message: CustomMessages.LOG_IN });
      logger.info({
        status: StatusCodes.OK,
        message: CustomMessages.LOG_IN,
      });
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .send({ message: CustomMessages.INVALID_EMAIL });
      logger.error({
        status: StatusCodes.BAD_REQUEST,
        message: CustomMessages.INVALID_EMAIL,
      });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: error.message });
    logger.error({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
});

router.get("/api/v1/listOfMedicine", async (req, res, next) => {
  let typesOfMed = ["Allopath", "Ayurveda", "General", "Homeopath", "Unani"];
  let uniqueMedicine = [];
  try {
    for (var typeOfMed = 0; typeOfMed < typesOfMed.length; typeOfMed++) {
      var type = typesOfMed[typeOfMed];
      options.url = options.url+"&type="+`${type}` 
      const response = await axios(options);
      uniqueMedicine.push(
        removeDuplicateObjectsFromArray(response.data.data, "product_id")
      );
    }
    res.status(StatusCodes.OK).send({ allMedicines: uniqueMedicine });
    logger.info({
      status: StatusCodes.OK,
      message: "Data is fetched successfully",
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: error.message });
    logger.error({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
});

router.get(
  "/api/v1/search/:key",
  searchKeyValidation,
  async (req, res, next) => {
    let uniqueMedicine = [];
    try {
      const searchOption = options;
      searchOption.params = {
        name: req.params.key,
      };
      const response = await axios(searchOption);
      uniqueMedicine.push(
        removeDuplicateObjectsFromArray(response.data.data, "product_id")
      );
      res.status(StatusCodes.OK).send({ results: uniqueMedicine });
      logger.info({ status: StatusCodes.OK, message: response.data.message });
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send({ message: error.message });
      logger.error({
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }
  }
);

router.post("/api/v1/medicineType",validateMedicineType ,async(req, res, next) => {
  let uniqueMedicine = [];
  try {
    options.url = options.url+"&type="+`${req.query.type}` 
   const response = await axios.request(options)
   uniqueMedicine.push(
    removeDuplicateObjectsFromArray(response.data.data, "product_id")
   );
   res.status(StatusCodes.OK).send({results: uniqueMedicine});
  } catch (error) {
    res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send({ message: error.message });
  logger.error({
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: error.message,
  });
  }
});

module.exports = router;
