import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import { getProducts, getProductById } from "../controllers/ProductController.js";

router.route('/').get(getProducts);

router.route('/:id').get(getProductById);


export default router;

