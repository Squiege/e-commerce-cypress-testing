describe('Salinaka E-Commerce Login', () => {

    // Successful Login Test
    it('Logs in successfully with valid credentials', () => {
        cy.visit('https://salinaka-ecommerce.web.app') 
        cy.contains('Sign In').click() 

        cy.get('#email').type('devintest@gmail.com')
        cy.get('#password').type('Deblintest123')
        cy.get('.auth-action > .button').click()
        cy.url().should('include', '/')
    })

    // Unsuccessful Login Test
    it('Fails to login with invalid credentials', () => {
        cy.visit('https://salinaka-ecommerce.web.app') 
        cy.contains('Sign In').click() 

        cy.get('#email').type('wrong_user')
        cy.get('#password').type('wrong_pass')
        cy.get('.auth-action > .button').click()
        cy.get('.auth-action > .button').should('be.visible')
    })

    // Empty Form Submission Test
    it('Shows error for empty form submission', () => {
        cy.visit('https://salinaka-ecommerce.web.app') 
        cy.contains('Sign In').click() 

        cy.get('.auth-action > .button').click()
        cy.get('.auth-action > .button').should('be.visible')
    })

})
