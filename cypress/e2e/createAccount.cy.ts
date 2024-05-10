const person = require('../support/person.ts');

describe('Create Account', () => {
  it('Should create a account successfully', () => {
    cy.visit('signup');
    cy.get('[data-qa="signup-name"]')
      .type(person.name)
      .should('have.value', `${person.name}`);
    cy.get('[data-qa="signup-email"]')
      .type(person.email)
      .should('have.value', `${person.email}`);
    cy.get('[data-qa="signup-button"]').should('be.visible').click();
  });
});
