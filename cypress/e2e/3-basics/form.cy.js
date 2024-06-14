//<reference type = "cypress"/>

describe('verify the contact us form', function () {
    beforeEach(function () {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('verify contact us form with valid credential', function () {
        cy.Data1("anjali", "pawase", "anjalipawase1999@gmai.com", "hello")
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('be.visible').and('have.text', 'Thank You for your Message!')
    })

    //     it('verify contact us form with invali credential', function () {
    //         cy.formdetails("anjali", "paease", "anjalipawase1999gmail.com", "hii")
    //         cy.get('input[type="submit"]').click()
    //         cy.get('body').should('contain', " Invalid")
    //     })

    //     it('verify contact us form with reset button', function () {
    //         cy.formdetails("anjali", "pawase", "anjalipawase1999@gmail", "hello")
    //         cy.get('input[type="reset"]').click()
    //         cy.get('input[name="first_name"]').should('have.text', "")
    //         cy.get('input[name="last_name"]').should('have.text', "")
    //         cy.get('input[name="email"]').should('have.text', '')
    //         cy.get('textarea[name="message"]').should('have.text', '')
    //     })




})
// })