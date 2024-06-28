///<reference types="cypress" />

describe('verify multiwindow ', () => {

    it('to validate multi window property in cypress-letkodei', () => {
        cy.visit('https://www.letskodeit.com/practice')

        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url

            })

            cy.get('#openwindow').click()
            cy.url().should('contain', '/courses')
        })
    })



    it.skip('to validate multiwindow property in cypress-rahulshetty', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url
            })
        })

        cy.get('[id="openwindow"]').click()
        cy.url().should('contain', 'qaclickacademy')





        // cy.window().then((win) => {
        //     cy.stub(win, 'open').callsFake((url) => {
        //         win.location.href = url
        //     })

        //     cy.get('#openwindow').click()
        //     // cy.wait(3000)
        //     cy.url().should('contain', 'qaclickacademy')
        // })
    })


    it('to validate multitab property in cypress-rahulshetty', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[class="btn-style class1 class2"]').click().should('have.attr', 'href').and('include', 'www.qaclickacademy')
    })

    it('to validate multitab property in cypress-rahulshetty', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[class="btn-style class1 class2"]').invoke('removeAttr', 'target').click()
        cy.url().should('contain', 'www.qaclickacademy')



    })

    it.only('to validate multitab without removing target property in cypress-rahulshetty', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[class="btn-style class1 class2"]').then((newTab) => {
            let url = newTab.prop('href')
            cy.visit(url)
            cy.url().should('contains', 'qaclickacademy')
        })
    })




})