const express = require("express");
const createInvoice = require("../controllers/invoiceController");
const router = express.Router();

router.post("/createInvoice", createInvoice);

module.exports = router;
