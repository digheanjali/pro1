///<reference types="cypress" />
import page from "../9-Page/AutoExc"
import data from "../../fixtures/AutoExcPayload"

describe('verify Automation Exercise login page', function () {
    let title = undefined

    it('create a new user ', function () {
        let pg = new page
        pg.visiturl()
        pg.btnclick(pg.selectors.loginsignup)
        pg.newUserCredential(data)
        pg.btnclick(pg.selectors.signupbtn)

        //next page 
        if (data.title == 'Mrs') {
            title = pg.selectors.titleMrs
        }
        else {
            title = pg.selectors.titleMr

        }

        pg.newUserinfo(title, data)
        pg.validatetext(pg.selectors.createAccountText, 'Account Created!')
        pg.btnclick(pg.selectors.loginsignup)
        pg.btnclick(pg.selectors.logout)
        pg.newuserlogin(data)
        pg.validatetext(pg.selectors.logintextvalidation, data.username)




    })

})