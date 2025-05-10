describe('Salinaka E-Commerce Cart Tests', () => {
    beforeEach(() => {
        cy.visit('https://salinaka-ecommerce.web.app')
        cy.contains('Shop').click()

        // Wait for products to appear
        cy.get('.product-card', { timeout: 10000 }).should('have.length.at.least', 1)

        // Hover over first product card
        cy.get('.product-card').first().trigger('mouseover')

        // Click the 'Add to Cart' button that appears on hover
        cy.get('.product-card')
        .first()
        .find('.product-card-button') 
        .click({ force: true })

        // Open cart
        cy.get('.navigation-menu-item > .button-link').click()
        cy.get('.basket-item').should('exist')
        })



    it('Adds a product to the cart successfully', () => {
        cy.get('.basket-item-details > a').should('be.visible')
    })

    it('Checks product quantity in the cart', () => {
        cy.get('h5.my-0').invoke('text').then((text) => {
            const quantity = parseInt(text, 10)
            expect(quantity).to.be.gte(1)
            })
        
    })
    

    it('Checks the total price in the cart', () => {
        cy.get('.basket-total-amount').invoke('text').then((text) => {
        const price = parseFloat(text.replace(/[^0-9.-]+/g, ''))
        expect(price).to.be.greaterThan(0)
        })
    })

    it('Checks quantity increment and decrement in the cart', () => {
      // Increment
        cy.get('.basket-control-add').click()

        cy.get('.basket-item')
        .first()
        .find('h5.my-0')
        .invoke('text')
        .then((text) => {
            const quantity = parseInt(text, 10)
            expect(quantity).to.be.gte(2)
        })

      // Decrement
        cy.get('.basket-control-minus').click()

        cy.get('.basket-item')
        .first()
        .find('h5.my-0')
        .invoke('text')
        .then((text) => {
            const quantity = parseInt(text, 10)
            expect(quantity).to.be.gte(1)
    })

    })

    it('Empties the cart by removing all items', () => {
        cy.get('.basket-item-remove').click()
        cy.get('.basket-empty-msg')
        .should('exist')
        .and('contain.text', 'Your basket is empty') 

    })

    // Test cart state after page reload
    it('Retains cart state after page reload', () => {
        cy.reload()
        cy.get('.basket-item').should('exist')
    })
    })
