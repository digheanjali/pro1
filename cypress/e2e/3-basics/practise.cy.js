/// <reference types="cypress" />



// describe('verify shadowDom element', function () {
//     Cypress.on('uncaught:exception', (err, runnable) => {
//         // returning false here prevents Cypress from
//         // failing the test
//         return false
//     })

//     it('firstway to get element in shadowdom', function () {
//         cy.visit('https://selectorshub.com/xpath-practice-page/')

//         // 1st traverse
//         cy.get('#userName').shadow().find('#app2').shadow().find('#pizza').type('Hello')

//     })


// })




describe('verify the shadow element', function () {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('firstway to get element in shadowdom', function () {
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        //cy.get('#pizza').should('be.visible')

        cy.wait(10000)

        // 1st traverse
        cy.get('#userName').shadow().find('#app2').shadow().find('#pizza').type('Hello')
    })

})
