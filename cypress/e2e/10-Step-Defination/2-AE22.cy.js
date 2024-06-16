///<reference types='cypress' />
import page from "../9-Page/2-AE22"
import data2 from "../../fixtures/2-AE22payload"

describe('verify Automation Exercise page', function () {
    let title = undefined

    it('verify login page', function () {
        let pg = new page

        pg.visiturl()
        pg.btnclick(pg.selectors.loginbtn)
        pg.newUserSignup(data2)
        pg.btnclick(pg.selectors.signupbtn)

        cy.wait(3000)

        //next

        if (data2.title == 'Mrs') {
            title = pg.selectors.titleMrs
        }
        else {
            title = pg.selectors.titleMr
        }

        pg.accountinfo(title, data2)
        pg.validatetext(pg.selectors.createAccountText, 'Account Created!')
        pg.btnclick(pg.selectors.loginbtn)
        pg.btnclick(pg.selectors.logout)
        pg.LoginToYourAccount(data2)
        pg.validatetext(pg.selectors.logintextvalidation, data2.username)







    })
})