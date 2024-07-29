/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Comando personalizado para teste.
     * @example cy.teste()
     */
    createAccountFillForm(
      password,
      name,
      lastName,
      company,
      address,
      addressDetails,
      state,
      city,
      zipCode,
      phoneNumber
    ): Chainable<any>;
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
    sendSubscriptionInCartPage(email): any;
    addProductInCart(index): any;
    messageProductAddedToCart(boolean): any;
    verifyItemFromCart(): any;
    addQuantityProductInDetailProductPage(quantity): any;
    addToCartInDetailProductPage(): any;
    verifyQuantitySameProductInCartPage(quantityProductAdd): any;
    proceedToCheckoutButton(): any;
    messageOrderCheckoutLogin(boolean): any;
    verifyUserBillingAddressCheckoutPage(
      name,
      lastName,
      company,
      address,
      addressDetails,
      city,
      state,
      zipcode,
      country,
      phoneNumber
    ): any;
    verifyUserDeliveryAddressCheckoutPage(
      name,
      lastName,
      company,
      address,
      addressDetails,
      city,
      state,
      zipcode,
      country,
      phoneNumber
    ): any;
    verifyItemFromCheckoutPage(): any;
    sendCommentInCheckoutPage(text): any;
    placeOrderButton(): any;
    paymentFillForm(
      cardName,
      cardNumber,
      cardCvc,
      cardMonthExpiration,
      cardYearExpiration
    ): any;
    submitPaymentButton(): any;
    paymentSuccessMessage(): any;
    removeItemInCartPage(): any;
    verifyIfTheCartIsEmpty(): any;
    selectCategoryProduct(categoryProduct, subCategoryProduct): any;
    selectBrandProduct(brandProduct): any;
    sendMessageReviewOnProduct(name, email, message): any;
    confirmMessageReview(): any;
    enterToHomePage(): any;
    scrollToRecommendedProducts(): any;
    selectRecommendedProduct(): any;
    downloadInvoice(request): any;
    scrollUpUsingArrow(): any;
    scrollUpWithoutArrow(): any;
    navigateToPage(namePage, verifyPage): any;
  }
}
