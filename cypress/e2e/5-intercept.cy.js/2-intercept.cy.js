/// <reference types="cypress" />

describe('intercept in cypress', function () {


    // it('test one normal way to get  element', function () {
    //     cy.visit('https://example.cypress.io/commands/network-requests')
    //     cy.contains('Get Comment').click()
    //     cy.get('.network-comment').should('contain', 'laudantium enim quasi ')
    // })

    //  without .then block

    it('wait with cy.intercept', function () {
        cy.intercept({
            url: "https://jsonplaceholder.cypress.io/comments/1",
            method: "GET"
        }).as('Get Comment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@Get Comment')
        cy.get('.network-comment').should('contain', 'laudantium')


    })

    // to mapp data with ui use .then ()

    it.skip('wait with cy.intercept and data mapped', function () {
        cy.intercept({
            url: "https://jsonplaceholder.cypress.io/comments/1",
            method: "GET"
        }).as('Get Comment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@Get Comment').then(function ({ response, request }) {
            cy.log(response.body.body)
            cy.get('.network-comment').should('contain', response.body.body)      //ui data

        })

    })


    // stub network with mock use for change ui data


    it.only('wait with cy.intercept and stub network with mock', function () {
        cy.intercept({
            url: "https://jsonplaceholder.cypress.io/comments/1",
            method: "GET"
        },
            {
                body: {

                    "postId": 1,
                    "id": 1,
                    "name": "id labore ex et quam laborum",
                    "email": "Eliseo@gardner.biz",
                    "body": "anjali"


                }
            }).as('Get Comment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@Get Comment').then(function ({ response, request }) {
            cy.log(response.body.body)
            cy.get('.network-comment').should('contain', response.body.body)

        })


    })



})




