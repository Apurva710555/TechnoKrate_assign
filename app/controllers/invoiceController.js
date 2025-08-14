const Invoice = require("../models/Invoice");

async function createInvoice(req, res) {
  res.send("this is createInvoice API");
}

module.exports = createInvoice;
