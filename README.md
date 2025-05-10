# E-Commerce Cypress Testing Suite

This project contains a comprehensive Cypress end-to-end test suite for the [Salinaka E-Commerce](https://salinaka-ecommerce.web.app) application. The tests cover all critical user interactions including login, cart functionality, product display, and the checkout process.

---

## 📁 Project Structure
<pre> 
```
text cypress/ 
└── e2e/ 
├── cart.cy.js 
├── checkout.cy.js 
├── login.cy.js 
└── product.cy.js 
``` 
</pre>

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Squiege/e-commerce-cypress-testing.git
cd e-commerce-cypress-testing
```

### 2. Install Dependencies
```
npm install
```

### 3. Run Cypress
```
npx cypress open
```

Choose any .cy.js file in the test runner to execute the tests interactively.

### ✅ Test Coverage
🔐 Login Tests
- Valid login

- Invalid credentials

- Empty submission

- Logout flow

🛒 Cart Tests
- Add to cart

- Check quantity

- Check total price

- Increment/decrement quantity

- Remove item

- Persist state after reload

📦 Product Tests
- Product card shows name, brand, price, image

- Hover behavior reveals Add to Cart button

- Add to cart via hover

💳 Checkout Tests
- Full checkout flow with address + contact info

- Payment method selection (Paypal)

- Validates toast popup: "Feature not ready yet :)"

🧪 Technologies Used
- Cypress v12+

- JavaScript (ES6)

- GitHub for version control

📸 Demo Assets
![Cart Tests](cypress/screenshots/swag-labs-test.gif)
![Checkout Tests](cypress/screenshots/swag-labs-test.gif)
![Login Tests](cypress/screenshots/swag-labs-test.gif)
![Product Tests](cypress/screenshots/swag-labs-test.gif)


🤝 Connect
Feel free to connect with me on LinkedIn if you'd like to collaborate, ask questions, or discuss QA/testing roles!

### 📄 License
This project is for educational and portfolio purposes.
