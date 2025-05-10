describe('Salinaka E-Commerce Product Tests', () => {
    it('Checks product grid elements (name, brand, price, image)', () => {
      cy.visit('https://salinaka-ecommerce.web.app')
      cy.contains('Shop').click()
  
      cy.get('.product-card', { timeout: 10000 }).should('have.length.at.least', 1)
  
      cy.get('.product-card').each(($card) => {
        cy.wrap($card).within(() => {
          cy.get('.product-card-name').should('not.be.empty')
          cy.get('.product-card-brand').should('not.be.empty')
          cy.get('.product-card-price').should('contain.text', '$')
          cy.get('.product-card-img').should('have.attr', 'src')
        })
      })
    })
  
    it('Checks product hover state and add-to-cart visibility', () => {
      cy.visit('https://salinaka-ecommerce.web.app')
      cy.contains('Shop').click()
  
      cy.get('.product-card').first().trigger('mouseover')
  
      cy.get('.product-card')
        .first()
        .find('.product-card-button')
        .should('be.visible')
        .click({ force: true })
    })
  
    it('Checks that clicking a product opens the product detail modal', () => {
      cy.visit('https://salinaka-ecommerce.web.app')
      cy.contains('Shop').click()
  
      cy.get('.product-card').first().click()
      cy.url().should('include', '/product/')
    })
  
    it('Checks product detail modal contents (name, price, brand, image)', () => {
      cy.visit('https://salinaka-ecommerce.web.app')
      cy.contains('Shop').click()
  
      cy.get('.product-card').first().click()
  
      cy.get('.product-modal-details').within(() => {
        cy.get('.margin-top-0').should('exist') // name
        cy.get(':nth-child(2)').should('exist') // brand
        cy.get(':nth-child(4)').should('exist') // description
      })
  
      cy.get('.product-modal-image').should('exist')
      cy.get('.product-modal-action > .button').should('exist')
    })
  })
  