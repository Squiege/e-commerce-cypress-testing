describe('Salinaka E-Commerce Product Tests', () => {
    it('Checks if the product grid, names, price, images, and name are visible', () => {
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

    it('Checks if product hover functionality works', () => {
        cy.visit('https://salinaka-ecommerce.web.app')
        // Click Shop
        cy.contains('Shop').click()

        // Wait for products to load and checks if they are visible
        cy.get('.product-card', { timeout: 10000 }).should('be.visible')

        // Hover over the first product card
        cy.get(':nth-child(1) > .product-card').trigger('mouseover')

        // Check if the hover image is visible
        cy.get(':nth-child(1) > .product-card > .product-card-content > .product-card-img-wrapper > .product-card-img').should('be.visible')

        // Check if the hover button is visible
        cy.get(':nth-child(1) > .product-card > .product-card-content > .product-card-img-wrapper > .product-card-img').should('exist')

        // Check if the add to cart button is visible
        cy.get(':nth-child(1) > .product-card > .product-card-content > .product-card-img-wrapper > .product-card-img').should('exist')
        
        // Check if the add to cart button is clickable
        cy.get(':nth-child(1) > .product-card > .product-card-content > .product-card-img-wrapper > .product-card-img').click()
    })

    it('Checks if a product is clicked, the product page is opened', () => {
        cy.visit('https://salinaka-ecommerce.web.app')

        // Click Shop
        cy.contains('Shop').click()

        // Wait for products to load and checks if they are visible
        cy.get('.product-card', { timeout: 10000 }).should('be.visible')

        // Click on the first product card
        cy.get(':nth-child(1) > .product-card > .product-card-content > .product-card-img-wrapper > .product-card-img').click()

        // Check if the product page is opened
        cy.url().should('include', '/product/')
    })

    it('Checks if the product page contains the product name, price, and description', () => {
        cy.visit('https://salinaka-ecommerce.web.app')

        // Click Shop
        cy.contains('Shop').click()

        // Wait for products to load and checks if they are visible
        cy.get('.product-card', { timeout: 10000 }).should('be.visible')

        // Click on the first product card
        cy.get(':nth-child(1) > .product-card > .product-card-content > .product-card-img-wrapper > .product-card-img').click()

        // Check if the product name is visible
        cy.get('.margin-top-0').should('exist')

        // Check if the product price is visible
        cy.get('.product-modal-action > .button').should('exist')

        // Check if the product description is visible
        cy.get('.product-modal-details > :nth-child(4)').should('exist')

        // Check if the product brand is visible
        cy.get('.product-modal-details > :nth-child(2)').should('exist')

        // Check if the product image is visible
        cy.get('.product-modal-image').should('exist')

        // Check if the product add to cart button is visible
        cy.get('.product-modal-action > .button').should('exist')
    })


    })
