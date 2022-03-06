describe('Ascension calculator', () => {
    it('should take a screenshot of default page', () => {
        cy.visit('/ascension-calculator');
        cy.wait(2000);
        cy.matchImageSnapshot('ascension-calculator');
    });
});