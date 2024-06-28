///<reference types="cypress" />
describe('verify multitab', function () {
    it.only('verify href property of multitab', function () {
        cy.visit('https://www.kesari.in/')
        cy.get('[class="blink-text ng-tns-c36-0"]').should('have.attr', 'href').and('include', 'summerhd24/')
    })

    //using (.invoke('removeAttr', 'target')--this will help in after click on button  next page open in same tabs

    it('verify multitab using remove attribute', function () {
        cy.visit('https://www.kesari.in/')
        cy.get('[class="blink-text ng-tns-c36-0"]').invoke('removeAttr', 'target').click()
        cy.url().should('contain', 'summerhd24/')
    })
    //without removing target we can handle in cypress in other ways
    // always select target atrribute for open new tabs in same tabs

    it('verify multitab without removing target attribute', function () {
        cy.visit('https://www.kesari.in/')
        cy.get('[class="blink-text ng-tns-c36-0"]').then((newTab) => {
            let url = newTab.prop('href')
            cy.visit(url)
            cy.url().should('contain', 'summerhd24/')
        })

        cy.go('back')
        cy.wait(4000)
        cy.go('forward')
    })
})




