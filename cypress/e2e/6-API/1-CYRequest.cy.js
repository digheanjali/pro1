///<reference types="cypress" />


describe('Verify GET,POST,PUT,DELETE using cy.request', function () {

    it('verify GET request', function () {
        let user = 'Lindsay'
        let flag = false

        cy.request({
            url: 'https://reqres.in/api/users?page=2',
            method: 'GET'
        })
            .then(function (res) {
                // cy.log(res)
                expect(res.body.data.length).to.equal(res.body.per_page)

                expect(res.duration).to.lte(141)

                expect(res.body.data[1]).to.have.keys(["id", "email", "first_name", "last_name", "avatar"])

                res.body.data.forEach(element => {
                    expect(element.id).not.have.null

                    expect(element.email).not.have.null

                    expect(element.first_name).not.have.null

                    expect(element.last_name).not.have.null

                    expect(element.avatar).not.have.null


                });

                res.body.data.forEach(element => {

                    if (element.first_name == user) {
                        flag = true
                    }


                })


            })
            .then(function () {
                expect(flag).to.eq(true)
            })

    })


    it('verify POST Request', function () {

        let userData = {
            "name": "Anjali",
            "job": " tester"
        }

        cy.request({
            url: 'https://reqres.in/api/users?page=2',
            method: 'POST',
            body: userData
        })
            .then(function (res) {
                cy.log(res)
                expect(res.body).to.have.keys(['name', 'job', 'id', 'createdAt'])
                expect(res.status).to.eq(201)
                expect(res.body.name).to.eq(userData.name)
                expect(res.body.job).to.eq(userData.job)
                expect(res.statusText).to.eq('Created')
            })
    })


    it('verify PUT request', function () {

        let Data = {
            "name": "siya",
            "job": "teacher"
        }
        cy.request({
            url: 'https://reqres.in/api/users/2',
            method: 'PUT',
            body: Data
        })
            .then(function (res) {
                // cy.log(res)
                expect(res.body).to.have.keys(['name', 'job', 'updatedAt'])

                expect(res.duration).to.gte(200)

                expect(res.status).to.eq(200)

                expect(res.statusText).to.eq('OK')

                expect(res.body.name).to.eq(Data.name)

                expect(res.body.job).to.eq(Data.job)


            })
    })


    it.only('verify DELETE request', function () {

        cy.request({
            url: "https://reqres.in/api/users/2",
            method: "DELETE"
        })
            .then(function (res) {
                cy.log(res)
                expect(res.body).to.eq("")
                expect(res.duration).to.lessThan(500)
                expect(res.statusText).to.eq("No Content")
                expect(res.status).to.eq(204)
                expect(res.isOkStatusCode).to.eq(true)



            })
    })


})



