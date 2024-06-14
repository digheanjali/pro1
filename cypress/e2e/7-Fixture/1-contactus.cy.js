/// <reference types="cypress" />

describe('verify the contactus form', function () {

    // 1st way


    let info = {
        firstname: "anjali",
        lastname: "pawase",
        email: "anjalipawase1999@gmail.com",
        Comment: "i ama learning js"
    }


    it('verify the fixture file features', function () {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('input[name="first_name"]').type(info.firstname)

        cy.get('input[name="last_name"]').type(info.lastname)

        cy.get('input[name="email"]').type(info.email)

        cy.get('textarea[name="message"]').type(info.Comment)

    })

    // 2nd way reading fixture for one single testcase

    it.only('verify the fixture', function () {
        cy.fixture('example2').then(function (info) {

            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')


            cy.get('input[name="first_name"]').type(info.firstname)

            cy.get('input[name="last_name"]').type(info.lastname)

            cy.get('input[name="email"]').type(info.email)

            cy.get('textarea[name="message"]').type(info.msg)


        })
    })










})

