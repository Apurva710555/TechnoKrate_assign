const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    customerName: { type: String, default: "N/A" },
    productName: { type: String, default: "N/A" },
    date: { type: Date, default: Date.now },
    mode: {
      type: String,
      enum: ["Cash", "Card", "UPI", "Online", "Other"],
      default: "Cash",
    },
    status: { type: String, enum: ["Paid", "Unpaid"], default: "Unpaid" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
