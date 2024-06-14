/// <reference types="cypress" />

describe('intercept in cypress', function () {


    // it('test one to get element ', function () {
    //     cy.visit('https://example.cypress.io/commands/network-requests')
    //     cy.contains('Post Comment').click()
    //     cy.get('[class="network-post-comment"]').should('have.text', 'POST successful!')
    // })


    it('test two using cy.intercept', function () {
        cy.intercept({
            url: "https://jsonplaceholder.cypress.io/comments",
            method: "POST"
        }).as('Post Comment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@Post Comment').then(function (info) {
            cy.log(info)
            expect(info.response.statusCode).to.eq(201)
        })
        cy.get('[class="network-post-comment"]').should('have.text', 'POST successful!')
    })

    it.only('test three using cy.request', function () {
        cy.request({

        })
    })
})

