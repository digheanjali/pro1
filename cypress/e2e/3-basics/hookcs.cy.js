/// <reference types="cypress" />


before(function () {                                    //1
    cy.log("before block first executed")
})


beforeEach(function () {                                   //2           //5
    cy.log('executed before testcase')
})

it('testcase one executed', function () {                  //3
    cy.log('testcase one executed')
})

it('testcase two executed', function () {                                  //6
    cy.log('testcase two executed')
})

afterEach(function () {                                       //4          //7
    cy.log('executed after testcase')
})

after(function () {                                              //8
    cy.log('executed at the last---z')
})