## API Testing (Postman)

- **Postman Tests:**

  - `createInvoice_test.png` – Invoice creation API tested successfully.
  - `createPayment_test.png` – Payment creation API tested successfully.
  - `createDeliveryBoy_test.png` – Delivery boy creation API tested successfully.

- **Database Entries (MongoDB Compass):**
  - `deliveryBoy_Db.png` – Delivery boy record inserted.
  - `invoices_Db.png` – Invoice record inserted.
  - `payments_Db.png` – Payment record inserted.

## Project Structure

- **app/**

  - **controllers/** – Contains logic for handling requests and responses (e.g., `paymentController.js`).
  - **models/** – Mongoose models for database collections (`DeliveryBoy.js`, `Invoice.js`, `Payment.js`).
  - **routes/** – Defines API endpoints and maps them to controllers (`deliveryBoyRoute.js`, `invoiceRoute.js`, `paymentRoute.js`).
  - **utils/** – Utility functions for validation (`validateDeliveryBoy.js`, `validateInvoice.js`, `validatePayment.js`).

- **.env** – Environment variables configuration.
- **server.js** – Entry point of the application; starts the server and connects routes.
- **package.json** – Project dependencies and scripts.
- **.gitignore** – Files/folders ignored by Git.
- **create\*\_test.png** – API testing screenshots.
- **ReadMe.md** – Project documentation.
