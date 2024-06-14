import Homepage2 from "../Page/HomePage2.cy.js"

describe('POM', () => {
    let greenKart = new Homepage2
    it('verify POM', () => {

        greenKart.visiturl(greenKart.ekart.eurl)
        greenKart.searchProduct('be')
        greenKart.productslist('Beans')
        greenKart.placeOrder()
        greenKart.validatetext()


    })
})