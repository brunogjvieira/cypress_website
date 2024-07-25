/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Comando personalizado para teste.
     * @example cy.teste()
     */
    createAccountFillForm(): Chainable<any>;
    nameAndEmailFillForm(name, email): any;
    confirmCreatedAccount(): any;
    createAccountVerifyForm(): any;
    deleteAccount(): any;
    
  }
}