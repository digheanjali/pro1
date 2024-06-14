/// <reference types="cypress" />

describe("traversal method", function () {

    // sibling methods
    //1).first()

    it("To get first DOM element within the elements, use .first() commands", function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().first().should('have.text', 'Fruits')
    })

    //2).last()
    it("To get last DOM element within the elements, use the .last() command ", function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().last().should('have.text', 'Lentils')
    })
    //3).eq()
    it("To get a DOM element at a specific index, use the .eq() command ", function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().eq(2).should('have.text', 'Banana')
    })

    //4).childeren()
    it("To get children of DOM elements, use the .children() command ", function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length', '5')
    })

    //5).prev()

    it("To get the previous sibling DOM element within elements, use the .prev() command. ", function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').prev().should('have.text', 'Tea')
    })

    //6).next()
    it("To get the next sibling DOM element within elements, use the .next() command. ", function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').next().should('have.text', 'Espresso')
    })
})



































