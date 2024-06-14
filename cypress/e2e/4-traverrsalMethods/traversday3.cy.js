/// <reference types="cypress" />


describe('traverse Methods', function () {

    beforeEach(function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
    })


    //13).prevAll()---> given all  previous element 

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command', function () {
        cy.get('.traversal-food-list').children().prevAll().should('contain', 'Figs')
    })

    //14).nextAll()----> given all next element


    it('To get all previous sibling DOM elements within elements, use the .nextAll() command', function () {
        cy.get('.traversal-food-list').children().nextAll().should('contain', 'Apple')
    })

    //15).find()--->use for find any class through child element


    it.skip('To get descendant DOM elements of the selector, use the .find() command', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('#contact_me').find('input[name="first_name"]').type("anjali")
        cy.get('.col-md-12').find('input[name="last_name"]').type("pawase")
    })

    //16).nextUntil()---->1 element pasun to next element prynt find element


    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command', function () {
        cy.get('#coffee').nextUntil('#sugar').should('have.length', '3')
    })

    //17).prevUntil()---> last pasun tr 1 prynt


    it('To get all of the previous sibling DOM elements within elements until another element, use the .prevUntil() command', function () {
        cy.get('.traversal-food-list').children().prevUntil().should('contain', 'Figs', 'Apple')
    })

    //18).parents()-----> any parent class find


    it('To get parents DOM element of elements, use the .parents() command', function () {
        cy.get('#milk').parents().should('have.class', 'thumbnail')
    })

    //19).parent()----> immidiate class ul() cha ne3ntr cha


    it.only('To get the closest ancestor DOM element, use the .closest() command.', function () {
        cy.get('#veggie').closest('div').should('have.class', 'thumbnail')
    })

    //20).parentsUntil()----->any element in wich class find 


    it.only('To get parents DOM element of elements until other element, use the .parentsUntil() command.', function () {
        cy.get('#veggie').parentsUntil('.thumbnail').should('have.length', '1')

    })


})

// -------------------------------------------------------------------------------



// it.skip('To get descendant DOM elements of the selector, use the .find() command.',function(){
//     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
//     cy.get('#contact_me').find('input[name="first_name"]').type('chinmay')
// })

// it.only('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',function(){
//     cy.get('#coffee').nextUntil('#sugar').should('have.length','3')
// })

// it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',function(){
//     cy.get('#sugar').prevUntil('#coffee').should('have.length','3')
//     cy.get('#sugar').prevUntil('#coffee').should("be.greaterThan",'2')
// })

// it.only('To get parents DOM element of elements, use the .parents() command.',function(){
//     cy.get('#milk').parents().should('have.class','thumbnail')
// })

























