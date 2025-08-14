const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    invoiceDate: { type: Date, required: true },
    productType: { type: String, enum: ["A2 milk", "Curd", "Paneer"] },
    productSize: { type: String },
    productQuantity: { type: Number, default: 1 },
    price: { type: Number, default: 0 },
    subscriptionPlan: { type: String, enum: ["Daily", "Weekly", "Monhly"] },
    paymentMode: { type: String, enum: ["Cash", "UPI", "Online"] },
    paymentStatus: {
      type: String,
      enum: ["Paid", "Unpaid"],
      default: "Unpaid",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Invoice", InvoiceSchema);
