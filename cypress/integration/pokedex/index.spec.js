describe('Navigation', () => {
  it('should navigate to the pokemon page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('a[href*="pokemon/bulbasaur"]').click();
    cy.url().should('include', 'pokemon');
    cy.get('h1').contains('bulbasaur');
  });
});
