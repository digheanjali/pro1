/// <reference types="cypress" />

// to access for all test case

let data = undefined


describe('fixture to be read in multiple files', function () {


    beforeEach(function () {

        cy.fixture('example3').then(function (data) {
            this.data = data
        })
    })

    it('testcase one- array object one', function () {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('input[name="first_name"]').type(this.data[1].firstname)

        cy.get('input[name="last_name"]').type(this.data[1].lastname)

        cy.get('input[name="email"]').type(this.data[1].email)


        cy.get('textarea[name="message"]').type(this.data[1].Comment)

    })



    it('testcase two- array object second', function () {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('input[name="first_name"]').type(this.data[1].firstname)

        cy.get('input[name="last_name"]').type(this.data[1].lastname)

        cy.get('input[name="email"]').type(this.data[1].email)


        cy.get('textarea[name="message"]').type(this.data[1].Comment)

    })



})



