const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const Magnusroutes = require("./Magnus/routes");
const logger = require("./logger");

const app = express();
const port = process.env.PORT || 5000;

/*Usage things*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/", Magnusroutes);

/*Running the server*/
app.listen(port, () => {
  logger.info(`App listening on port ${port}`);
});

module.exports = app;
