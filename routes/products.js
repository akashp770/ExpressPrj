var express = require("express");
var router = express.Router();

//products
router.get("/", (req, res) => {
  res.send("Get Request for products");
});

//products/products-details
router.get("/products-details", (req, res) => {
  res.send("details of  products");
});

module.exports = router;
