import { Router } from "express";
import { LoginUser, LogoutUser, refreshAccesToken, registerUser } from "../controllers/User.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router=Router();

router.route("/register").post(registerUser);
router.route("/login").post(LoginUser);
router.route("/logout").post(verifyJWT,LogoutUser);
router.route("/refreshUser").post(refreshAccesToken);

export default router;