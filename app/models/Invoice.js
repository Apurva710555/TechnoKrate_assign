const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    invoiceDate: { type: Date, required: true },
    productType: { type: String, enum: ["A2 milk", "Curd", "Paneer"] },
    productSize: { type: String, required: true },
    productQuantity: { type: Number, required: true },
    price: { type: Number, required: true },
    subscriptionPlan: { type: String, enum: ["Daily", "Weekly", "Monthly"] },
    paymentMode: {
      type: String,
      enum: ["Cash", "UPI", "Online"],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["Paid", "Unpaid"],
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Invoice", InvoiceSchema);
