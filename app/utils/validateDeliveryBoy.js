function validateDeliveryBoyData(data = {}) {
  const { name, email, phoneNumber, password, assignedAreas, issuedBottles } =
    data;

  if (!name || typeof name !== "string") {
    throw new Error("Name is required and must be a string.");
  }

  if (!email || typeof email !== "string") {
    throw new Error("Email is required and must be a string.");
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    throw new Error("Email is invalid.");
  }

  if (
    !phoneNumber ||
    typeof phoneNumber !== "string" ||
    !/^\d{10}$/.test(phoneNumber)
  ) {
    throw new Error("Phone number is required and must be a 10-digit string.");
  }

  if (!password || typeof password !== "string" || password.length < 6) {
    throw new Error(
      "Password is required and must be at least 6 characters long."
    );
  }
}

module.exports = validateDeliveryBoyData;
