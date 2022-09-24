import express from "express"
import { getProducts, createPost } from "../controllers/RFQ_Manager.js"
const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/", getProducts)
router.post("/", createPost)



export default router;