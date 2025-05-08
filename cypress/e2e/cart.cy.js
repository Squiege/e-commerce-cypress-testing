describe('Salinaka E-Commerce Product Tests', () => {
    it('Adds a product to the cart successfully', () => {
        cy.visit('https://salinaka-ecommerce.web.app')

        // Click Shop
        cy.contains('Shop').click()

        // Wait for products to load and makes sure there are products to be clicked
        cy.get(':nth-child(1) > .product-card', { timeout: 10000 }).should('have.length.at.least', 1)

        // Interact once loaded with the first product card
        cy.get(':nth-child(1) > .product-card > .product-card-content > .product-card-img-wrapper > .product-card-img').click()
        cy.get('.product-modal-action > .button').click()

        // Confirm cart badge updates and the cart shows an item is in the cart
        cy.get('.navigation-menu-item > .button-link').click()
        cy.get('.basket-item').should('exist')

        // Optional: Check for specific product name if it's visible
        cy.get('.basket-item-details > a').should('exist')
    })
    })