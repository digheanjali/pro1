///<reference types="cypress" />
import Opage from "../9-Page/2-orangeHRM"
import data from "../../fixtures/orange.json"
describe('verify login form using fixture file', function () {

    let page2 = new Opage

    it('verify login page using valid credential', function () {

        page2.visiturl()
        page2.logincredential(data.validCredential)
        cy.url().should('contain', '/dashboard/index')


    })

    it('verify login page using invalid credential', function () {

        page2.visiturl()
        page2.logincredential(data.InvalidCredential)
        cy.get('.oxd-alert-content-text').should('have.text', 'Invalid credentials')




    })
})