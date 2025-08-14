const Payment = require("../models/Payment");

async function createPayment(req, res) {
  res.send("this is createPayment API");
}

module.exports = createPayment;
