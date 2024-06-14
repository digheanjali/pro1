///<reference types = "cypress"/>

describe('login using Session stoarage', function () {


    it('uiless login', function () {

        let usercri = {
            username: "AnjaliPawase",
            password: "Siya@810"
        }

        cy.request('POST',
            "https://bookcart.azurewebsites.net/api/login", usercri)
            .its('body')
            .then(function (body) {
                cy.log(body)
                // cy.log(body.token)
                const token = body.token

                cy.visit('https://bookcart.azurewebsites.net/', {
                    onBeforeLoad(browser) {
                        browser.localStorage.setItem('authToken', token)
                    }
                })
                cy.wait(2000)
            })

    })
})

