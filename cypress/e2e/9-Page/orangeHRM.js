
class myPage {

    selectors = {
        url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        username: '[name="username"]',
        password: '[type="password"]',
        loginbtn: '[type="submit"]'

    }

    visiturl() {
        cy.visit(this.selectors.url)
    }

    logincredential() {
        cy.get(this.selectors.username).type('Admin')
        cy.get(this.selectors.password).type('admin678')
        cy.get(this.selectors.loginbtn).click()
    }
}

export default myPage