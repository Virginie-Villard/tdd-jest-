describe('My First Test', () => {
    it('Visits url en short page', () => {
        cy.visit('https://www.w3schools.com/')
        // cy.get("input[placeholder='username']").type('admin')
        // cy.get("input[placeholder='password']").type('campus')
        // //   cy.get("input[value='Login']").click({ timeout: 10000 }, cy.get("input[value='URLenShort']").click())
        // cy.get("input[value='Login']").click().should('be.visible').click("20px", "22px")
        // #sn-b-custom
        cy.wait(2000)
        cy.get("#sn-b-custom").click()
        cy.wait(1000)
        cy.get("#sn-b-save").click()
        cy.get("#w3loginbtn").click()
        cy.wait(2000)
        cy.get("#modalusername").type("virginie.villard@le-campus-numerique.fr")
        cy.get("#current-password").type("WLvirg86!")
        cy.get("button").contains("Log in").click()
    })
  })