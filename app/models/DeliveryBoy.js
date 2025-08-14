const mongoose = require("mongoose");

const issuedBottleSchema = new mongoose.Schema({
  size: { type: String, enum: ["1/2 litre", "1 litre"], required: true },
  quantity: { type: Number, required: true },
});

const deliveryBoySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    address: { type: String },
    password: { type: String, required: true },
    assignedAreas: [{ type: String }],
    issuedBottles: [issuedBottleSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("DeliveryBoy", deliveryBoySchema);
