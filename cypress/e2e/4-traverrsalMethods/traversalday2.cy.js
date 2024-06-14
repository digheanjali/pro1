/// <reference types="cypress" />

describe('traverse methods', function () {
    beforeEach(function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')

    })

    // //7).prevAll()
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command ', function () {
        cy.get('#milk').prevAll().should('have.length', 2)
    })

    //8).nextAll()

    it('To get all next sibling DOM elements within elements, use the .nextAll() command ', function () {
        cy.get('#milk').nextAll().should('have.length', 2)
    })

    //9).siblings()

    it('To get all sibling DOM elements of elements, use the .siblings() command ', function () {
        cy.get('#coffee').siblings().should('have.length', 4)
    })

    //10).filter()

    it('To get DOM elements that match a specific selector, use the .filter() command ', function () {
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text', 'Warning')
    })

    //11).not()

    it('To remove DOM element(s) from the set of elements, use the .not() command', function () {
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length', 3)
    })

    //12).parent()

    it('To get parent DOM element of elements, use the .parent() command ', function () {
        cy.get('.disabled').parent().should('have.attr', 'class', 'traversal-button-states')
    })


})























