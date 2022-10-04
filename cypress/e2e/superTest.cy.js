describe('My First Test', () => {
    it('Visits url en short page', () => {
        cy.visit('https://www.w3schools.com/')
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