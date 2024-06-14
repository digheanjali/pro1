
// <reference type = "cypress"/>

describe('verify contact us form', function () {



    it('contact us form ', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('anjali')
        cy.get('input[name="last_name"]').type('pawase')
        cy.get('input[name="email"]').type('anjalipawase1999@gmail.com')
        cy.get('textarea[name="message"]').type('hello world!')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('contain', 'Thank You for your Message!')




    })


    it.only('verify contact us form with reset button', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')


        cy.Data1("siya", "dighe", "anjalipawase1999@gmail", "hiii")
        cy.get('input[type="reset"]').click()
        cy.get('input[name="first_name"]').should('have.text', "")
        cy.get('input[name="last_name"]').should('have.text', "")
        cy.get('input[name="email"]').should('have.text', '')
        cy.get('textarea[name="message"]').should('have.text', '')
    })
})