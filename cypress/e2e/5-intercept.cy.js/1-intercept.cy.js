/// <reference types="cypress" />


describe('intercept ', function () {


    // it('test one to get intercept', function () {
    //     cy.visit('https://example.cypress.io/commands/network-requests')
    //     cy.contains('Get Comment').click()
    //     cy.get('.network-comment').should('contain', 'laudantium enim quasi est quidem magnam voluptate')
    // })


    //    request send by button click() --ui using cy.intercept

    it('test two to get intercept using cy.intercept', function () {

        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('GetComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@GetComment').then(function (info) {
            cy.log(info)
            expect(info.response.statusCode).to.eq(200)
        })
        cy.get('.network-comment').should('contain', 'laudantium enim quasi est quidem magnam voluptate')
    })

    //     request send by manualy --- Api-- using cy.request

    it.only('test three to get intercept using cy.request', function () {

        let text = undefined

        cy.request({
            url: "https://jsonplaceholder.cypress.io/comments/1",
            method: "GET"
        })
            .then(function (info) {
                text = info.body.body
            })
            .then(function () {
                cy.visit('https://example.cypress.io/commands/network-requests')
                cy.contains('Get Comment').click()
                cy.get('.network-comment').should('have.text', text)
            })

    })


})








