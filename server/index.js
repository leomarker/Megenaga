import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dontEnv from "dotenv";
import multer from "multer";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import helmet from "helmet";

import {register} form "./controllers/auth.js";

/* config */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dontEnv.config();
const app = express();
app.use(express.json());
app.use(helmet());
// app.use(helmet.crossOriginEmbedderPolicy({ policy: "cross-orgin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/*storage*/

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use("/api/register/", upload.single("picture"), register);
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
