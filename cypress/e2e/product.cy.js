describe('Salinaka E-Commerce Product Tests', () => {
    it('Checks if the products are visible', () => {
        cy.visit('https://salinaka-ecommerce.web.app')

        // Click Shop
        cy.contains('Shop').click()

        // Wait for products to load and checks if they are visible
        cy.get('.product-card', { timeout: 10000 }).should('be.visible')

        // Check if all the cards contain a product names 
        cy.get('.product-card > .product-card-content > .product-details > .product-card-name').should('exist')
        
        // Check if all the cards contain a product price
        cy.get('.product-card > .product-card-content > .product-details > .product-card-price').should('exist')

        // Check if all the cards contain a product image
        cy.get('.product-card > .product-card-content > .product-card-img-wrapper > .product-card-img').should('exist')

        // Check if all the cards contain a brand name
        cy.get('.product-card > .product-card-content > .product-details > .product-card-brand').should('exist')
    })

    })
