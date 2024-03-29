const express = require("express");

const router = express.Router();

const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/products").get(getProducts);

router.route("/product/:id").get(isAuthenticatedUser, getSingleProduct);

router.route("/admin/product/new").post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);

router.route("/admin/product/:id").put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct);

router.route("/admin/product/:id").delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);

router.route('/review/new').put(isAuthenticatedUser, createProductReview)
router.route('/reviews/:productId').get(isAuthenticatedUser, getProductReviews)
router.route('/reviews/:productId/:id').delete(isAuthenticatedUser, deleteReview)

module.exports = router;
