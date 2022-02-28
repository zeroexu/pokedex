describe('Navigation', () => {
  it('should navigate to the about page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="pokemon/1"]').click()
    cy.url().should('include', 'pokemon')
    cy.get('h1').contains('bulbasaur')
  })
})