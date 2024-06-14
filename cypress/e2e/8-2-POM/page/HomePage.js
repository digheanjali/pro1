
class HomePage {

    ekart = {
        eurl: 'https://rahulshettyacademy.com/seleniumPractise/#/country',
        Sbox: '.search-keyword',
        Sbtn: '[class="search-button"]',
        Prodlst: 'h4[class="product-name"]',
        addtocart: '[class="product-action"]',
        cart: '[alt="Cart"]',
        proceedbtn: '[class="action-block"]>button',
        cheakboxbtn: '.chkAgree'

    }

    visiturl() {
        cy.visit(this.ekart.eurl)
    }

    searchProduct(prod) {
        cy.get(this.ekart.Sbox).type(prod)
        cy.get(this.ekart.Sbtn).click()
    }

    productslist(product) {
        cy.get(this.ekart.Prodlst).each((el, i) => {
            let vegitable = el.text().replace(' - 1 Kg', ' ').trim() // Cashews 
            // cy.log(el)
            if (vegitable == product) {
                cy.get(this.ekart.addtocart).eq(i).click({ force: true })

            }
        })


    }

    placeOrder() {
        cy.get(this.ekart.cart).click()
        cy.get(this.ekart.proceedbtn).first().click()
        cy.contains('Place Order').click()
        cy.get('Select').select('India')
        cy.get(this.ekart.cheakboxbtn).click()
        cy.contains('Proceed').click()
    }

    validatetext() {
        cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')

    }
}

export default HomePage