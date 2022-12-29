const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dontEnv = require("dotenv");
const multer = require("multer");
const morgan = require("morgan");
const path = require("path");
const { fileURLToPath } = require("url");
const helmet = require("helmet");
const { register } = require("./controllers/auth");
/* config */

// const filename = fileURLToPath();
// const dirname = path.dirname(filename);
dontEnv.config();
const app = express();
app.use(express.json());
app.use(helmet());
// app.use(helmet.crossOriginEmbedderPolicy({ policy: "cross-orgin" }));
// app.use(morgan("common"));
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use("/assets", express.static(path.join(dirname, "public/assets")));

/*storage*/

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/assets");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage });

app.use("/api/register/", register);
/* mongoose connection and server start*/
const PORT = 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server runing at ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`error ${err} cant connect to mongodb`);
  });
