const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");
require("dotenv").config();

const bodyParser = require("body-parser");
const imageRoute = require('./Routers/imageRoute');
const AdminRoutes = require('./Routers/AdminRoutes');
const { MongoClient } = require("mongodb");

const app = express();
app.use(bodyParser.json({ limit: "50mb" }))
app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

app.use('/', AdminRoutes);
app.use('/file', imageRoute);
app.use('/profile', express.static('uploads'));




connectDB();
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`succ runnig at PORT: ${PORT}`);
});
