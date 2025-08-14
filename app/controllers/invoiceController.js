const Invoice = require("../models/Invoice");
const validateInvoiceData = require("../utils/validateInvoice");

async function createInvoice(req, res) {
  try {
    if (!reqbody) {
      return res
        .status(400)
        .json({ success: false, message: "Request body is empty" });
    }
    validateInvoiceData(req.body);
    const invoice = new Invoice(req.body);
    await invoice.save();
    return res.status(201).json({
      success: true,
      message: "Invoice created successfully",
      data: invoice,
    });
  } catch (error) {
    res
      .status(500)
      .send(`Error occured while updating the user: ${error.message}`);
  }
  res.send("this is createInvoice API");
}

module.exports = createInvoice;
