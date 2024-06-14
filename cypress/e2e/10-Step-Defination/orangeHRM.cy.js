///<reference types="cypress"/>
import myp from "../9-Page/orangeHRM"




describe('verify the login page ', function () {

    let page = new myp


    it('verify login page with valid credential', function () {

        page.visiturl()
        page.logincredential()
        cy.url().should('contain', '/dashboard/index')

        // username = Admin
        // password = admin123

    })


    it.only('verify login credential with invalid credential', function () {

        page.visiturl()
        page.logincredential()
        cy.get('.oxd-alert-content-text').should('have.text', 'Invalid credentials')
    })

    // username = Admin
    // password = admin678
})