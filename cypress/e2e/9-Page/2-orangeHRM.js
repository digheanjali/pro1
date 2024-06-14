class OHRMhomepage {


    selectors = {

        url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
        username: '[name="username"]',
        password: '[name="password"]',
        loginbtn: '[type="submit"]'
    }

    visiturl() {
        cy.visit(this.selectors.url)
    }

    logincredential(userdata) {
        cy.get(this.selectors.username).type(userdata.username)
        cy.get(this.selectors.password).type(userdata.password)
        cy.get(this.selectors.loginbtn).click()
    }
}


export default OHRMhomepage