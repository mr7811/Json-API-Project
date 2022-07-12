import { Router } from "express";
import booksRoutes from "./books.js";

const router = Router();
router.get("/", (req, res) => res.send("api root"))

router.use("/", booksRoutes);

export default router;