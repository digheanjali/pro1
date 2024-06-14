///<reference types="cypress" />

// import cypress = require("cypress");



// it('test #1', () => {
//     cy.wrap('foo').should((foo) =>
//         cy.log(foo));

// });

it.skip('test #2', () => {
    cy.wrap('foo').then((foo) =>
        cy.log(foo));

});


it.skip('should pass?', () => {
    cy.visit('https://cypress.io');
    cy.visit('https://cypressquiz.com/');
    cy.get('h1').should('contain.text', 'Quiz');
});



// it.only('heloo', function () {
//     cy.wrap(['JS', 'TS']).its(-1).should('eq', 'TS')
// })


// it.only('', () => {
//     cy.wrap('foo').should((foo) => {
//         expect(foo).to.eq('foo');
//         return 'boo';
//     }).then((boo) => {
//         expect(boo).to.eq('boo');
//     });
// })


// 

// it.only('heloo', function () {
//     cy.go(-1)
// })



it.skip('', () => {
    Cypress.env('Not a number', NaN)

    cy.log(typeof Cypress.env('Not a number'))
})

// const stack = [];
// const addTostack = (n) =>
//     stack.push(n);

// it.only('', () => {
// cy.wrap([addTostack]).invoke(0, 4).then(() =>
//     console.log(stack));

// cy.wrap([reverse, double]).invoke(1, 4).should('eq', 16)

//     cy.get('li').eq(-1)
// })


// beforeEach(() => {
//     cy.wrap('some text').as('text');
// })

// it('test #1', () => {

//     cy.log(this.text);
// });

// it('test #2', function () {
//     cy.log(this.text);

// });




// 



before(() => {
    cy.wrap('some value').as('value')
})

it('test #1', () => {
    cy.get('@value').should('eq', 'some value')
})

it('test #2', () => {
    cy.get('@value').should('eq', 'some value')
})






