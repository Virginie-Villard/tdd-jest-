describe('My First Test', () => {
    it('Visits W3School page', () => {
        cy.visit('https://www.w3schools.com/')
        cy.wait(2000)
    })

    it('Refuses cookies', () => {
        cy.get("#sn-b-custom").click()
        cy.wait(1000)
        cy.get("#sn-b-save").click()
    })

    it('Login', () => {
        cy.get("#w3loginbtn").click()
        cy.wait(2000)
        cy.get("#modalusername").type("virginie.villard@le-campus-numerique.fr")
        // .should("have.value", "virginie.villard@le-campus-numerique.fr")
        cy.get("#current-password").type("WLvirg86!").should("have.value", "WLvirg86!")
        cy.get("button").contains("Log in").click()
        cy.get("div.MainHeader_messagePanel__3KPUr > h2").should("contain", "Virginie")
    })

    it('logout', () => {
        cy.get("#navigation > div > button").click()
        cy.get("h1").should("contain", "Log in")
    })
  })