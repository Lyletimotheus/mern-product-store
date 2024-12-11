import express from "express";
import {
  createAProduct,
  deleteAProduct,
  getAllProducts,
  updateAProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("", createAProduct);
router.delete("/:id", deleteAProduct);
router.get("", getAllProducts);
router.put("/:id", updateAProduct);

export default router;
