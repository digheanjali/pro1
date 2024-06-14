export default class AutoExercisepage {

    selectors = {
        AEurl: 'https://automationexercise.com/',
        loginsignup: 'a[href="/login"]',
        signupbtn: '[data-qa="signup-button"]',
        username: '[data-qa="signup-name"]',
        email: '[data-qa="signup-email"]',
        titleMr: '[id="id_gender1"]',
        titleMrs: '[value="Mrs"]',
        password: '[id="password"]',
        dd: '[id="days"]',
        mm: '[id="months"]',
        yy: '[id="years"]',
        checkbox1: '[id="newsletter"]',
        checkbox2: '[id="optin"]',
        firstname: '[id="first_name"]',
        lastname: '[id="last_name"]',
        company: '[id="company"]',
        address1: '[id="address1"]',
        address2: '[id="address2"]',
        contry: '[id="country"]',
        state: '[id="state"]',
        city: '[id="city"]',
        zipcode: '[id="zipcode"]',
        mobno: '[id="mobile_number"]',
        createAccountbtn: '[data-qa="create-account"]',
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

    newUserCredential(data) {
        cy.get(this.selectors.username).type(data.username)
        cy.get(this.selectors.email).type(data.email)

    }

    validatetext(locators, text) {
        cy.get(locators).should('contain', text)
    }


    newUserinfo(title, data) {
        cy.get(title).check()
        cy.get(this.selectors.password).type(data.password)
        cy.get(this.selectors.dd).select(data.dd)
        cy.get(this.selectors.mm).select(data.mm)
        cy.get(this.selectors.yy).select(data.yy)
        cy.get(this.selectors.checkbox1).check()
        cy.get(this.selectors.checkbox2).check()
        cy.get(this.selectors.firstname).type(data.firstname)
        cy.get(this.selectors.lastname).type(data.lastname)
        cy.get(this.selectors.company).type(data.company)
        cy.get(this.selectors.address1).type(data.address1)
        cy.get(this.selectors.contry).select(data.contry)
        cy.get(this.selectors.state).type(data.state)
        cy.get(this.selectors.city).type(data.city)
        cy.get(this.selectors.zipcode).type(data.zipcode)
        cy.get(this.selectors.mobno).type(data.mobno)
        cy.get(this.selectors.createAccountbtn).click({ multiple: true })



    }

    newuserlogin(data) {
        cy.get(this.selectors.loginemail).type(data.email)
        cy.get(this.selectors.loginpassword).type(data.password)
        cy.get(this.selectors.login).click()
    }

}