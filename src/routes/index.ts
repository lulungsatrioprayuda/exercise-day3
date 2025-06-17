import { Router } from "express";
import todoRoutes from "./todoRoutes";

const router = Router();

router.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date(),
  });
});

//mount todo routes
router.use("/api/todos", todoRoutes);

export default router;
