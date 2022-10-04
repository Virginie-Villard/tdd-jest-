describe('empty spec', () => {
	it('passes', () => {
		cy.wait(2000)
		cy.get("#sn-b-custom").click()
		cy.wait(1000)
		cy.get("#sn-b-save").click()
	})
})