const router = require("express").Router();
const {
  getAllProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.route("/").get(getAllProducts).post(addProduct);
router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;
