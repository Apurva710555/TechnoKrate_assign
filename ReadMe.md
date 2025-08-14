## API Testing (Postman)

### Create Invoice

Tested invoice creation with valid customer, date, and product details.  
![Create Invoice](createInvoice_test.png)

### Create Payment

Tested payment recording for a customer.  
![Create Payment](createPayment_test.png)

### Create Delivery Boy

Tested adding a delivery boy with assigned areas and issued bottles.  
![Create Delivery Boy](createDeliveryBoy_test.png)

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
