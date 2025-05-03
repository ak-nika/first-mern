const express = require("express");
const productRouter = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);

module.exports = app;
