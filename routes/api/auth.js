const express = require("express");
const { validateBody, authentificate } = require("../../middlewares");
const schemas = require("../../schemas/user");
const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.post("/login", validateBody(schemas.registerSchema), ctrl.logIn);
router.get("/current", authentificate, ctrl.getCurrent);
router.post("/logout", authentificate, ctrl.logOut);

module.exports = router;
