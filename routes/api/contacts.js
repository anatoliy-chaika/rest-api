const express = require("express");

const ctrl = require("../../controllers/contacts");
const {
  validateBody,
  isValidId,
  validateBodyFavorite,
  authentificate,
} = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", authentificate, ctrl.getAll);

router.get("/:contactId", authentificate, isValidId, ctrl.getById);

router.post("/", authentificate, validateBody(schemas.addContact), ctrl.add);

router.delete("/:contactId", authentificate, isValidId, ctrl.remove);

router.put(
  "/:contactId",
  authentificate,
  isValidId,
  validateBody(schemas.addContact),
  ctrl.update
);

router.patch(
  "/:contactId/favorite",
  authentificate,
  isValidId,
  validateBodyFavorite(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
