const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const env = require("dotenv").config();
const multer = require("multer");
const morgan = require("morgan");
const path = require("path");
const { fileURLToPath } = require("url");
const helmet = require("helmet");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const register = require("./controllers/auth").register;
const createPost = require("./controllers/posts").createPost;
const cors = require("cors");

/* config */
const filename = fileURLToPath(
  require("url").pathToFileURL(__filename).toString()
);
const dirname = path.dirname(filename);

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(dirname, "public/assets")));

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

app.post("/auth/register", upload.single("picture"), register);
// app.post("/posts", verifyToken, upload.single("picture"), createPost);

app.use("/auth", upload.single("picture"), authRoutes);
app.use("/users", userRoutes);

/* mongoose connection and server start*/
const PORT = process.env.PORT || 5000;

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
