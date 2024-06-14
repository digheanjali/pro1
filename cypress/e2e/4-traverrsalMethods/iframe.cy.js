/// <reference types="cypress" />


describe('iframe in cypress', function () {



    it('iframe using jquery', function () {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        // cy.contains('Home')
        cy.get('#frame').then(function ($iframe) {
            cy.log($iframe)
            cy.log($iframe.contents())           //document (html ( head and body ))
            let body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
            cy.get('@iframe').contains('Home')
        })
    })



    it.only('iframe using javascript', function () {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        // cy.contains('Home')
        cy.get('#frame').then(function (iframe) {
            // cy.log(iframe)
            // cy.log(iframe.contents())           //document (html ( head and body ))
            let body = iframe.contents().find('body')
            cy.wrap(body).as('iframe')
            cy.get('@iframe').contains('Home')
        })
    })


    it.only('iframe using - javascript other method', function () {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')

        let frame = cy.get('#frame').its('0.contentDocument.body').then(cy.wrap)
        frame.find('a[href= "index.html"]').should('have.text', "Home")

    })


    it.only('iframe 4 - javascript', function () {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.getIframeBody('frame').find('a[href= "index.html"]').should('have.text', "Home")

    })

    it.only('iframe 5 - javascript', function () {
        cy.visit('https://the-internet.herokuapp.com/tinymce')
        cy.getIframeBody('mce_0_ifr').find('p')
            .should('have.text', 'Your content goes here.')
        cy.getIframeBody('mce_0_ifr').find('p').type(`{ctrl+a}{ctrl+b}`)
        cy.get('@iframe').find('strong').first().should('have.text', 'Your content goes here.')

    })
})