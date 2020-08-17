describe('Home', () => {
  context('Sign up', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('allows you to sign up', () => {
      cy.get('[data-testid="nameInput"]').type('Becky');
      cy.get('[data-testid="roleInput"]').type('Developer');
      cy.get('[data-testid="emailInput"]').type('test@test.com');
      cy.get('[data-testid="passwordInput"]').type('1Aaaa5aaa');
      cy.get('[data-testid="nextButton"]').click();
      cy.get('[data-testid="otherProductUpdatesCheckbox"]')
        .siblings('[data-testid="label"]')
        .click();
      cy.get('[data-testid="submitButton"]').click();
      cy.get('[data-testid="confirmation"]');
    });
  });
});
