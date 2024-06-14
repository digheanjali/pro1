///<reference types="cypress" />


describe('list of user', function () {

    let token = `8baa9672378d3e638fe752886e78faff44acd6e81a4240ded13e1db5165f3297`

    let id = undefined

    it('list of user using get method', function () {

        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                "Authorization": "Bearer 8baa9672378d3e638fe752886e78faff44acd6e81a4240ded13e1db5165f3297"
            }
        })
            .then(function (response) {
                cy.log(response)
                expect(response.status).to.eq(200)

            })



    })


    // creste--->id-->update---->deleted


    it.only('create user,get id,pass to update,and then delete user', function () {

        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {

                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": `tenali.ramakrishna@15ce${Math.floor(Math.random() * 10000) + 1}.com`,
                "status": "active"

            },
            headers: {

                "Authorization": `Bearer ${token}`
            }
        })
            .then(function (response) {
                cy.log(response)

                expect(response.status).to.eq(201)
                cy.log(response.body.id)

                id = response.body.id

            })
            .then(function () {

                cy.request({
                    method: "PUT",
                    url: "https://gorest.co.in/public/v2/users/2931751",
                    body: {

                        "name": "Anjali Ramakrishna",
                        "email": `tenali.ramakrishna@15ce${Math.floor(Math.random() * 10000) + 1}.com`,
                        "status": "active"

                    },
                    headers: {

                        "Authorization": `Bearer ${token}`
                    }
                })
                    .then(function (response) {
                        cy.log(response)

                        expect(response.status).to.eq(200)
                    })
                    .then(function (response) {

                        cy.request({
                            method: "DELETE",
                            url: "https://gorest.co.in/public/v2/users/2931751",

                            headers: {

                                "Authorization": `Bearer ${token}`
                            }
                        })
                            .then(function (response) {

                                expect(response.status).to.eq(204)
                            })


                    })


            })




    })






})