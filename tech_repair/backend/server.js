const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;

// use methods libs.
const app = express();
require("dotenv").config();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/sendmail", require("./routes/sendmail"));

// listen port
app.listen(port, () => {
  console.log(`Servidor de Tech-Repair corriendo en el puerto ${port}`);
});
