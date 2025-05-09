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

        // Check for specific product name if it's visible
        cy.get('.basket-item-details > a').should('exist')
    })

    it('Checks product quantity in the cart', () => {
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

        // Check for specific product name if it's visible
        cy.get('.basket-item-details > a').should('exist')

        // Check if the quantity is greater than or equal to 1
        cy.get(':nth-child(1) > .my-0').invoke('text').then((text) => {
            const quantity = parseInt(text, 10)
            expect(quantity).to.be.gte(1)
        })
    })

    it('Checks the total price in the cart', () => {
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

        // Check for specific product name if it's visible
        cy.get('.basket-item-details > a').should('exist')

        // Check if the total price is greater than 0
        cy.get('.basket-total-amount').invoke('text').then((text) => {
            const price = parseFloat(text.replace(/[^0-9.-]+/g, ''))
            expect(price).to.be.greaterThan(0)
        })
    })

    it('Checks quantity increment and decrement in the cart', () => {
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

        // Check for specific product name if it's visible
        cy.get('.basket-item-details > a').should('exist')

        // Increment quantity
        cy.get('.basket-control-add').click()
        cy.get(':nth-child(1) > .my-0').invoke('text').then((text) => {
            const quantity = parseInt(text, 10)
            expect(quantity).to.be.gte(2)
        })

        // Decrement quantity
        cy.get('.basket-control-minus').click()
        cy.get(':nth-child(1) > .my-0').invoke('text').then((text) => {
            const quantity = parseInt(text, 10)
            expect(quantity).to.be.gte(1)
        })
    })

    it('Checks if the cart is empty after removing all items', () => {
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

        // Check for specific product name if it's visible
        cy.get('.basket-item-details > a').should('exist')

        // Remove the item from the cart
        cy.get('.basket-item-remove').click()
        cy.get('.basket-empty-msg').should('exist')
    })

})