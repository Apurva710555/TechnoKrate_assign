const DeliveryBoy = require("../models/DeliveryBoy");
const validateDeliveryBoyData = require("../utils/validateDeliveryBoy");

async function createDeliveryBoy(req, res) {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json({ success: false, message: "Request body is empty" });
    }
    validateDeliveryBoyData(req.body);
    const deliveryBoy = new DeliveryBoy(req.body);
    await deliveryBoy.save();
    return res.status(201).json({
      success: true,
      message: "deliveryBoy created successfully",
      data: deliveryBoy,
    });
  } catch (error) {
    res
      .status(500)
      .send(`Error occured while updating the user: ${error.message}`);
  }
}

module.exports = createDeliveryBoy;
