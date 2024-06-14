// Shadow DOM: Provides encapsulation and isolation for the content of web components,
//  preventing style and behavior leakage to the rest of the document.


/// <reference types="cypress" />


describe('verify the shadow element', function () {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })


    it('firstway to get shadow element', function () {
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        // cy.get('#pizza').should('be.visible')
        // this is not directly show because this is  shadow under shadow element
        // for that we can use  trverse shadow method


        // 1st traverse method
        //cy.get('#userName').shadow().find('#app2').shadow().find('#pizza').type('Hello')

        // cy.wait(2000)

        //2 way --add globle config( cypress config.js)
        // add "includeShadowDom":true cmd

        //cy.get('#pizza').should('be.visible').type('hello anjali')

        cy.get('#pizza', { includeShadowDom: true }).should('be.visible').type("hello siya")




    })
})