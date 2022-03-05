describe('Home screenshot', () => {
  it('should take a screenshot of the home page', () => {
    cy.visit('/');
    cy.wait(2000);
    cy.matchImageSnapshot('home');
  });
});