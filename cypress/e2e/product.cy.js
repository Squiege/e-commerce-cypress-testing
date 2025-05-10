describe('Salinaka E-Commerce Product Tests', () => {
    it('Checks the first product card has name, brand, price, and image', () => {
        cy.visit('https://salinaka-ecommerce.web.app')

        // Click Shop
        cy.contains('Shop').click()

        // Wait for at least one card
        cy.get('.product-card', { timeout: 10000 }).should('have.length.at.least', 1)

        // Only interact with the first card
        cy.get('.product-card').first().as('firstCard')

        // Check if the first card has the required elements
        cy.get('@firstCard').find('.product-card-name').should('exist')
        cy.get('@firstCard').find('.product-card-brand').should('exist')
        cy.get('@firstCard').find('.product-card-price').should('contain.text', '$')
        cy.get('@firstCard').find('.product-card-img').should('have.attr', 'src')
    })


    it('Shows Add to Cart button on hover', () => {
    cy.visit('https://salinaka-ecommerce.web.app')

    // Click Shop
    cy.contains('Shop').click()

    // Target first card and hover
    cy.get('.product-card').first().trigger('mouseover')

    // Check if the button is visible
    cy.get('.product-card')
        .first()
        .find('.product-card-button')
        .click({ force: true }) 
    })

    it('Allows adding a product to cart via hover button', () => {
        cy.visit('https://salinaka-ecommerce.web.app')

        // Click Shop
        cy.contains('Shop').click()

        // Trigger hover on the first product
        cy.get('.product-card').first().trigger('mouseover')
        cy.get('.product-card').first().find('.product-card-button').click({ force: true })

        // Check if the product is added to the cart
        cy.get('.navigation-menu-item > .button-link').click()
        cy.get('.basket-item').should('exist')
    })
    })
