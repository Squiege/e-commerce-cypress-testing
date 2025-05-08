describe('Salinaka E-Commerce Product Tests', () => {
    it('Checkout is successful with Paypal', () => {
        cy.visit('https://salinaka-ecommerce.web.app')

        
        // Sign In
        cy.contains('Sign In').click() 
        
        cy.get('#email').type('devintest@gmail.com')
        cy.get('#password').type('Deblintest123')
        cy.get('.auth-action > .button').click()
        cy.url().should('include', '/')
        
        // Click Shop
        cy.contains('Shop').click()
        cy.url().should('include', '/shop')

        // Wait for products to load and makes sure there are products to be clicked
        cy.get(':nth-child(1) > .product-card', { timeout: 10000 }).should('have.length.at.least', 1)

        // Interact once loaded with the first product card
        cy.get(':nth-child(1) > .product-card > .product-card-content > .product-card-img-wrapper > .product-card-img').click()
        cy.get('.product-modal-action > .button').click()

        // Confirm cart badge updates and the cart shows an item is in the cart
        cy.get('.navigation-menu-item > .button-link').click()
        cy.get('.basket-item').should('exist')

        // Check for specific product name if it's visible
        cy.get('.basket-item-details > a').should('exist')

        // Proceed to checkout
        cy.get('.basket-checkout-button').click()

        // Proceed to Checkout
        cy.get('[type="submit"]').click()

        // Fill in phone number
        cy.get('.react-tel-input > .input-form').type('1234567890')

        // Fill in address
        cy.get('#address').type('123 Test Street')

        // Proceed to step 2 checkout
        cy.get('.button-icon').click()

        // Select Paypal checkout method
        cy.get('.is-selected-payment > .checkout-field > .checkout-checkbox-field > .d-flex').click()

        // Proceed to step 3 checkout
        cy.get('.checkout-shipping-action > :nth-child(2)').click()
    })

    })