class contactUs {

    Selectors = {

        url: 'https://webdriveruniversity.com/Contact-Us/contactus.html',
        firstname: '[name="first_name"]',
        lastname: '[name="last_name"]',
        email: '[name="email"]',
        comments: '[name="message"]',
        // reset: '[type="reset"]',
        // submit: '[type="submit"]'
    }

    visiturl() {
        cy.visit(this.Selectors.url)
    }

    FormDetails(fn, ln, em, comm) {
        cy.get(this.Selectors.firstname).type(fn)
        cy.get(this.Selectors.lastname).type(ln)
        cy.get(this.Selectors.email).type(em)
        cy.get(this.Selectors.comments).type(comm)

    }

}

export default contactUs