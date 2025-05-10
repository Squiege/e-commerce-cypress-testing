describe('Salinaka E-Commerce Checkout Tests', () => {
    it('Completes checkout flow up to final step (Paypal)', () => {
      cy.visit('https://salinaka-ecommerce.web.app')
  
      // Sign In
      cy.contains('Sign In').click()
      cy.get('#email').type('devintest@gmail.com')
      cy.get('#password').type('Deblintest123')
      cy.get('.auth-action > .button').click()
      cy.url().should('include', '/')
  
      // Shop flow
      cy.contains('Shop').click()
      cy.url().should('include', '/shop')
  
      // Wait for product grid
      cy.get('.product-card', { timeout: 10000 }).should('have.length.at.least', 1)
  
      // Hover + Add to cart
      cy.get('.product-card').first().trigger('mouseover')
      cy.get('.product-card').first().find('.product-card-button').click({ force: true })
  
      // Open cart
      cy.get('.navigation-menu-item > .button-link').click()
      cy.get('.basket-item').should('exist')
  
      // Proceed to checkout
      cy.get('.basket-checkout-button').click()
      cy.get('[type="submit"]').click()
  
      // Fill contact info
      cy.get('.react-tel-input > .input-form').type('1234567890')
      cy.get('#address').type('123 Test Street')
      cy.get('#address').should('have.value', '123 Test Street')
  
      // Proceed to shipping
      cy.get('.button-icon').click()
  
      // Select Paypal
      cy.get('.is-selected-payment .checkout-checkbox-field .d-flex').click()
  
      // Proceed to final step
      cy.contains('button', 'Confirm').click()
  
      // Verify final step error
      cy.get('.toast-msg')
  .should('be.visible')
  .and('contain.text', 'Feature not ready yet :)')
    })
  })
  