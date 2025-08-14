function validateInvoiceData(data) {
  const {
    customerName,
    phoneNumber,
    invoiceDate,
    productType,
    productSize,
    productQuantity,
    price,
    subscriptionPlan,
    paymentMode,
    paymentStatus,
  } = data;

  if (!customerName || typeof customerName !== "string") {
    throw new Error("Customer name is required and must be a string.");
  }

  if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
    throw new Error("Phone number is required and must be a 10-digit number.");
  }

  if (!invoiceDate) {
    throw new Error("Invoice date is required");
  }

  const validProductTypes = ["A2 milk", "Curd", "Paneer"];
  if (!validProductTypes.includes(productType)) {
    throw new Error(`Product type cannot be empty }.`);
  }

  if (productSize == null || typeof productSize !== "string") {
    throw new Error("Product size must be a string");
  }

  if (
    productQuantity == null ||
    typeof productQuantity !== "number" ||
    productQuantity < 1
  ) {
    throw new Error("Product quantity is required");
  }

  // price
  if (price == null || typeof price !== "number" || price <= 0) {
    throw new Error("Price is required and must be a positive number.");
  }

  const validPlans = ["Daily", "Weekly", "Monthly"];
  if (subscriptionPlan && !validPlans.includes(subscriptionPlan)) {
    throw new Error(
      `Subscription plan must be one of: ${validPlans.join(", ")}.`
    );
  }

  const validPaymentModes = ["Cash", "UPI", "Online"];
  if (!validPaymentModes.includes(paymentMode)) {
    throw new Error(
      `Payment mode must be one of: ${validPaymentModes.join(", ")}.`
    );
  }

  const validPaymentStatuses = ["Paid", "Unpaid"];
  if (!validPaymentStatuses.includes(paymentStatus)) {
    throw new Error(
      `Payment status must be one of: ${validPaymentStatuses.join(", ")}.`
    );
  }
}

module.exports = validateInvoiceData;
