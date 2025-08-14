const express = require("express");
const createDeliveryBoy = require("../controllers/deliveryBoyController");
const router = express.Router();

router.post("/createDeliveryBoy", createDeliveryBoy);

module.exports = router;
