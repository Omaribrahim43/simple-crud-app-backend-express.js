const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getProduct);
// update function
router.put("/:id", updateProduct);
// delete function
router.delete("/:id", deleteProduct);

module.exports = router;
