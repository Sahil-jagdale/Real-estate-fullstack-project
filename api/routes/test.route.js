import express from "express";
import {
  shouldBeAdmin,
  shouldBeLoggedIn,
} from "../controllers/test.controllers.js";

const router = express.Router();

router.get("/should-be-logged-in", shouldBeLoggedIn);

router.get("/should-be-admin", shouldBeAdmin);

// router.get("/logout", logout);

export default router;
