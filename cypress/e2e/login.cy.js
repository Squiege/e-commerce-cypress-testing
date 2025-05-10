describe('Salinaka E-Commerce Login Tests', () => {

    it('Logs in successfully with valid credentials', () => {
        cy.visit('https://salinaka-ecommerce.web.app')

      // Click Sign In button
        cy.contains('Sign In').click()

      // Fill in the login form
        cy.get('#email').type('devintest@gmail.com')
        cy.get('#password').type('Deblintest123')
        cy.get('.auth-action > .button').click()

      // Check URL after redirect
        cy.url().should('include', '/')
        cy.contains('Shop').should('be.visible')
    })

    it('Fails to login with invalid credentials', () => {
        cy.visit('https://salinaka-ecommerce.web.app')

        // Click Sign In button
        cy.contains('Sign In').click()

        // Fill in the login form with invalid credentials
        cy.get('#email').type('wrong_user')
        cy.get('#password').type('wrong_pass')
        cy.get('.auth-action > .button').click()

        // Check that error message is shown
        cy.get('#email').then(($input) => {
            expect($input[0].checkValidity()).to.be.false
            expect($input[0].validationMessage).to.include('@')
        })
    })

    it('Shows error for empty form submission', () => {
        cy.visit('https://salinaka-ecommerce.web.app')
        
        // Click Sign In button
        cy.contains('Sign In').click()
    
        // Submit with no input
        cy.get('.auth-action > .button').click()
    
        // Check that error label is shown
        cy.get('.label-error')
            .should('be.visible')
            .and('contain.text', 'Email is required.')
        })

    it('Logs out after successful login', () => {
        cy.visit('https://salinaka-ecommerce.web.app')

        // Click Sign In button
        cy.contains('Sign In').click()

        // Fill in the login form
        cy.get('#email').type('devintest@gmail.com')
        cy.get('#password').type('Deblintest123')
        cy.get('.auth-action > .button').click()

        // Click on User dropdown
        cy.get('.anticon.anticon-down').click()
        // Sign out of the account
        cy.contains('Sign Out').click()

        // Check URL after redirect
        cy.url().should('include', '/signin')
        cy.contains('Sign In').should('be.visible')
    })

    })
