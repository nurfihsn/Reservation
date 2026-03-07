const express = require("express");
const router = express.Router();

const controller = require("../controllers/reservationController");
const validate = require("../middleware/validateRequest");
const schema = require("../validators/reservationValidator");

router.get("/", controller.getReservations);
router.get("/:id", controller.getReservationById);
router.post("/", validate(schema), controller.createReservation);
router.delete("/:id", controller.deleteReservation);

module.exports = router;