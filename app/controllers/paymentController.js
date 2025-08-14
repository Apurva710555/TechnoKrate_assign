const Payment = require("../models/Payment");
const validatePaymentData = require("../utils/validatePayment");

async function createPayment(req, res) {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json({ success: false, message: "Request body is empty" });
    }
    validatePaymentData(req.body);
    const payment = new Payment(req.body);
    await payment.save();
    return res.status(201).json({
      success: true,
      message: "Payment created successfully",
      data: payment,
    });
  } catch (error) {
    res
      .status(500)
      .send(`Error occured while updating the user: ${error.message}`);
  }
}

module.exports = createPayment;
