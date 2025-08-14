const express = require("express");
const createPayment = require("../controllers/paymentController");
const createInvoice = require("../controllers/invoiceController");
const createDeliveryBoy = require("../controllers/deliveryBoyController");

const router = express.Router();

router.post("/createPayment", createPayment);
router.post("/createDeliveryBoy", createDeliveryBoy);
router.post("/createInvoice", createInvoice);

module.exports = router;
