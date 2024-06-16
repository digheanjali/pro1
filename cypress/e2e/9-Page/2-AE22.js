export default class AExercise {

    selectors = {

        AEurl: 'https://automationexercise.com/',
        loginbtn: 'a[href="/login"]',
        username: '[name="name"]',
        useremail: '[data-qa="signup-email"]',
        signupbtn: '[data-qa="signup-button"]',
        titleMr: '[value="Mr"]',
        titleMrs: '[value="Mrs"]',
        password: '[name="password"]',
        dd: '[name="days"]',
        mm: '[name="months"]',
        yy: '[id="years"]',
        cheakbox1: '[type="checkbox"]',
        cheakbox2: '[name="optin"]',
        firstname: '[name="first_name"]',
        lastname: '[name="last_name"]',
        company: '[name="company"]',
        address1: '[name="address1"]',
        address2: '[name="address1"]',
        country: '[name="country"]',
        state: '[id="state"]',
        city: '[id="city"]',
        zipcode: '[name="zipcode"]',
        mobileno: '[id="mobile_number"]',
        AccCreate: '[data-qa="create-account"]',
        createAccountText: '[data-qa="account-created"]>b',
        logout: 'a[href="/logout"]',
        loginemail: '[data-qa="login-email"]',
        loginpassword: '[data-qa="login-password"]',
        login: '[data-qa="login-button"]',
        logintextvalidation: 'a>b'



    }

    visiturl() {
        cy.visit(this.selectors.AEurl)
    }

    btnclick(css) {
        cy.get(css).click()
    }

    newUserSignup(data2) {
        cy.get(this.selectors.username).type(data2.username)
        cy.get(this.selectors.useremail).type(data2.useremail)

    }

    accountinfo(title, data2) {
        cy.get(title).check()
        cy.get(this.selectors.password).type(data2.password)
        cy.get(this.selectors.dd).type(data2.dd)
        cy.get(this.selectors.mm).type(data2.mm)
        cy.get(this.selectors.yy).type(data2.yy)
        cy.get(this.selectors.cheakbox1).check()
        cy.get(this.selectors.cheakbox2).check()
        cy.get(this.selectors.firstname).type(data2.firstname)
        cy.get(this.selectors.lastname).type(data2.lastname)
        cy.get(this.selectors.company).type(data2.company)
        cy.get(this.selectors.address1).type(data2.address1)
        cy.get(this.selectors.address2).type(data2.address2)
        cy.get(this.selectors.country).select(data2.country)
        cy.get(this.selectors.state).type(data2.state)
        cy.get(this.selectors.city).type(data2.city)
        cy.get(this.selectors.zipcode).type(data2.zipcode)
        cy.get(this.selectors.mobileno).type(data2.mobileno)
        cy.get(this.selectors.AccCreate).click()



    }
    validatetext(locators, text) {
        cy.get(locators).should('contain', text)
    }
    LoginToYourAccount(data2) {
        cy.get(this.selectors.loginemail).type(data2.useremail)
        cy.get(this.selectors.loginpassword).type(data2.password)
        cy.get(this.selectors.login).click()

    }
}