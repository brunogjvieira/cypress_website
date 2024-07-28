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
    loginAccountFillForm(email, password): any;
    enterToLoginPage(): any;
    confirmButtonLogin(): any;
    verifyLogged(username): any;
    messageFailedLogin(): any;
    clickLogoutButton(): any;
    confirmLogout(): any;
    messageFailedSignup(): any;
    enterToContactUsPage(): any;
    contactUsFillForm(name, email, subject, message): any;
    insertUploadArquiveJPG(): any;
    contactUsSubmitButton(): any;
    contactUsSuccessMessage(): any;
    enterToTestCasesPage(): any;
    verifyAllTestCasesPage(array: string[]): Chainable<void>;
    enterToProductsPage(): any;
    viewProductByIndex(indexProduct): any;
    verifyDetailProduct(): any;
    selectProductBySearch(nameProduct): any;
    verifyQuantityProductsInThePage(quantityProduct): any;
    sendSubscriptionInProductsPage(email): any;
    enterToCartPage(): any;
    sendSubscriptionInCartPage(email): any;
    addProductInCart(index): any;
    messageProductAddedToCart(boolean): any;
    verifyItemFromCart(): any;
  }
}
