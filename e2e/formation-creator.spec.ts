describe('Formation creator', () => {
    it('should take a screenshot of default page', () => {
        cy.visit('/formation-creator');
        cy.wait(2000);
        cy.matchImageSnapshot('formation-creator');
    });
});