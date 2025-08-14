function validatePaymentData(data = {}) {
  const { customerName, productName, date, mode, status } = data;

  if (customerName !== undefined && typeof customerName !== "string") {
    throw new Error("Customer name must be a string.");
  }

  if (productName !== undefined && typeof productName !== "string") {
    throw new Error("Product name must be a string.");
  }

  if (!date) {
    throw new Error("Date value cannot be empty");
  }

  const validModes = ["Cash", "Card", "UPI", "Online", "Other"];
  if (!mode || !validModes.includes(mode)) {
    throw new Error(
      `Payment mode is required and must be one of: ${validModes.join(", ")}.`
    );
  }

  const validStatuses = ["Paid", "Unpaid"];
  if (!status || !validStatuses.includes(status)) {
    throw new Error(
      `Payment status is required and must be one of: ${validStatuses.join(
        ", "
      )}.`
    );
  }
}

module.exports = validatePaymentData;
