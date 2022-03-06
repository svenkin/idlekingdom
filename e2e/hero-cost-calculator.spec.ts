describe('Hero cost calculator', () => {
    it('should take a screenshot of default page', () => {
        cy.visit('/hero-cost-calculator');
        cy.wait(2000);
        cy.matchImageSnapshot('hero-cost-calculator');
    });
});