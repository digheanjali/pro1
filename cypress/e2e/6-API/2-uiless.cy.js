///<reference types = "cypress" />
//   this is using fixture file for directly open uilogin page without puting usernamr and password.

import user from "../../fixtures/bookcartuiless.json"

describe('login using session stoarage', function () {


    user.forEach(function (el, index) {

        it('uiless login', function () {

            let userdata = { username: el.username, password: el.password }

            cy.request('POST', 'https://bookcart.azurewebsites.net/api/login', userdata)
                .its('body')
                .then(function (body) {
                    cy.log(body)
                    cy.log(body.token)
                    const token2 = body.token

                    cy.visit('https://bookcart.azurewebsites.net/', {
                        onBeforeLoad(browser) {
                            browser.localStorage.setItem('authToken', token2)
                        }

                    })
                    cy.wait(2000)
                })




        })


    })


})

