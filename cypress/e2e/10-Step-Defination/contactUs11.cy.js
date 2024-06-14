///<reference types="cypress"/>
import hp from "../9-Page/contactUs1"


describe('verify contactUs form using Object orientation', function () {

    let selector = new hp
    it('verify the Form', function () {

        selector.visiturl()
        selector.FormDetails('anjali', 'pawase', 'anjali1999@gmail.com', 'hello anjali')



    })
})