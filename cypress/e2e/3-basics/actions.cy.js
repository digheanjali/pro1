/// <reference types="cypress" />


describe('verify actions', function () {

    it('verify drag and drop action using trigger', function () {
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').first().trigger('mousedown', { which: 1 })
        cy.get('#droppable').first().trigger('mousemove', { which: 1 }).trigger('mouseup', { force: true })
        cy.get('#droppable').should('contain', "Dropped!")
    })



    it.skip('verify double click using trigger', function () {
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        // cy.get('#double-click').dblclick().should('have.class', "div-double-click")
        cy.get('#double-click').trigger('dblclick').should('have.class', "double")

    })


    // it.only('Hover Over Me First!', function () {
    //     cy.visit('https://webdriveruniversity.com/Actions/index.html')
    //     cy.get('.dropbtn').first().trigger('mouseover', { multiple: true })
    //     cy.get('.dropbtn').first().should('contain', 'Hover Over Me First!')
    //     cy.get('#div-hover').should('contain', "Link 1").click()
    //     cy.get('.thumbnail>').should('contain', 'Well done you clicked on the link!')


    // })


    // it.only('hover over me 1st', function () {
    //     cy.get('hover over me 1st', function (text) {
    //         expect(text).to.equals({{'Well done you clicked on the link!'}})
    //         return true
    //     })
    //     cy.contains('Hover Over Me First!').click()
    //     cy.get('#thumbnail').should('have.text', 'You successfully clicked an alert')
    // })

    it('Righ click', function () {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-one').first().rightclick()
        //cy.get('.context-menu-one').first().trigger('contextmenu')
        cy.get('body > ul > li.context-menu-item.context-menu-icon.context-menu-icon-cut > span').should('be.visible')
    })

    it('Mouse over', function () {
        cy.visit('https://demo.opencart.com/')
        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('not.be.visible')
        cy.get('#narbar-menu > ul > li:nth-child(1) > a').trigger('mouseover').click()
        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('be.visible')
    })



})

























