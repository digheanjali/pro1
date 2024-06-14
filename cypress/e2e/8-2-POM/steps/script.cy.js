import HP from "../page/HomePage"

describe('POM', () => {

    let greenKart = new HP



    it('verify POM', () => {

        greenKart.visiturl(greenKart.ekart.eurl)
        greenKart.searchProduct('be')
        greenKart.productslist('Beans')
        greenKart.placeOrder()
        greenKart.validatetext()


    })
})