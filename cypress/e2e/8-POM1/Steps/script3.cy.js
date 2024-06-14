

describe('POM', () => {


    it('verify POM', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/country')
        cy.get('.search-keyword').type('be')
        cy.get('[class="search-button"]').click()
        cy.get('h4[class="product-name"]').each((el, i) => {
            // cy.log(el)
            if (el == 'Beans - 1 Kg') {
                cy.get('[class="product-action"]').eq(i).click()

            }
        })
        cy.get('[alt="Cart"]').click()
        cy.get('[class="action-block"]>button').first().click()
        cy.contains('Place Order').click()
        cy.get('Select').select('India')
        cy.get('.chkAgree').click()
        cy.contains('Proceed').click()
        cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')


    })
})