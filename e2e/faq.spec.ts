describe('FAQ', () => {
    it('should take a screenshot of default page', () => {
        cy.visit('/faq');
        cy.wait(2000);
        cy.matchImageSnapshot('faq');
    });
});