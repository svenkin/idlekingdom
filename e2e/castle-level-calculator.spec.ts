describe('Castle level calculator', () => {
    it('should take a screenshot of default page', () => {
        cy.visit('/castle-level-calculator');
        cy.wait(2000);
        cy.matchImageSnapshot('castle-level-calculator');
    });
});