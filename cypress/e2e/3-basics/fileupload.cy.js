//<reference type = "cypress"/>

describe('verify file upload ', function () {

    it('verify file upload example 1', function () {

        // assertion

        cy.on('window:alert', function (str) {
            expect(str).to.eq('Your file has now been uploaded!')
            return true
        })


        cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
        cy.get('input[type="file"]').selectFile('C:\\Users\\OM\\OneDrive\\Desktop\\cypress2024\\cypress\\fixtures\\example.json')
        cy.get('input[type="submit"]').click()
        cy.url().should('contains', 'example')

    })


    it.only('verify multiple file upload example', function () {
        cy.visit('https://www.zoho.com/au/books/accounting-software-demo/#/salesorders/new')

        cy.get('input[type="file"]').first().selectFile(["C:\\Users\\OM\\OneDrive\\Desktop\\cypress2024\\cypress\\fixtures\\example.json", "C:\\Users\\OM\\OneDrive\\Desktop\\cypress2024\\cypress\\fixtures\\34 SQL CLASS Sign Indicator Function.docx"])
        cy.get('#ember378').should('contain', '2')
    })

})














