import data from "../../fixtures/example3.json"

/// <reference types="cypress" />

describe('validate data-set with same testcase', function () {

    data.forEach(function (info, index) {
        it('test-data ${index + 1}', function () {

            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(info.firstname)
            cy.get('input[name="last_name"]').type(info.lastname)
            cy.get('input[name="email"]').type(info.email)
            cy.get('textarea[name="message"]').type(info.Comment)


        })


    })



})