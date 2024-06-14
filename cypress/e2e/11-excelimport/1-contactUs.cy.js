///<reference types="cypress" />

describe('verify contactus form with excel data sheet', () => {

    it('read data from excel', () => {

        cy.parseXlsx('/Users/OM/OneDrive/Desktop/cypress2024/cypress/fixtures/login Credentials2.xlsx').then((jsonData) => {
            cy.log(jsonData[0].data[1])

            for (let i = 1; i < jsonData[0].data.length; i++) {
                cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

                cy.get('[name="first_name"]').type(jsonData[0].data[i][0])
                cy.get('[name="last_name"]').type(jsonData[0].data[i][1])
                cy.get('[name="email"]').type(jsonData[0].data[i][2])
                cy.get('[name="message"]').type(jsonData[0].data[i][3])
                cy.get('[value="SUBMIT"]').click()
                cy.get('h1').should('have.text', 'Thank You for your Message!')

            }

        })
    })
})

// ///<reference types="cypress" />

// //const cypress = require("cypress")

// describe("verify contact us page with exel data sheet", () => {
//     it('read data from exel', function () {

//         cy.parseXlsx('/Users/OM/OneDrive/Desktop/cypress2024/cypress/fixtures/login Credentials.xlsx').then((jsonData) => {
//             cy.log(jsonData[0].data[1])
//             for (let i = 1; i < jsonData[0].data.length; i++) {

//                 cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

//                 cy.get('[name="first_name"]').type(jsonData[0].data[i][0])
//                 cy.get('[name="last_name"]').type(jsonData[0].data[i][1])
//                 cy.get('[name="email"]').type(jsonData[0].data[i][2])
//                 cy.get('[name="message"]').type(jsonData[0].data[i][3])
//                 cy.get('[value="SUBMIT"]').click()
//                 cy.get('h1').should('have.text', "Thank You for your Message!")


//             }



//         })
//     })
// })


