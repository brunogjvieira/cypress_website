/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Comando personalizado para teste.
     * @example cy.teste()
     */
    fillAccountCreationForm(
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
    fillNameAndEmailForm(name, email): any;
    confirmAccountCreation(): any;
    verifyAccountCreationForm(): any;
    deleteAccount(): any;
    fillLoginForm(email, password): any;
    verifyUserIsLoggedIn(username): any;
    verifyFailedLoginMessage(): any;
    logout(): any;
    verifyLogoutSuccess(): any;
    verifySignupFailureMessage(): any;
    fillContactUsForm(name, email, subject, message): any;
    insertUploadArquiveJPG(): any;
    submitContactUsForm(): any;
    verifyContactUsSuccessMessage(): any;
    verifyTestCasesOnPage(array: string[]): Chainable<void>;
    viewProductByIndex(indexProduct): any;
    verifyProductDetails(): any;
    searchProductByName(nameProduct): any;
    verifyProductCountOnPage(quantityProduct): any;
    sendSubscriptionOnProductsPage(email): any;
    subscribeToNewsletterOnCartPage(email): any;
    addProductToCart(index): any;
    verifyProductAddedToCartMessage(boolean): any;
    verifyItemsInCart(): any;
    setProductQuantity(quantity): any;
    addToCartOnDetailProductPage(): any;
    verifyProductQuantityInCart(quantityProductAdd): any;
    clickProceedToCheckout(): any;
    messageCheckoutLogin(boolean): any;
    verifyUserBillingAddressOnCheckoutPage(
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
    verifyUserDeliveryAddressOnCheckoutPage(
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
    verifyItemsOnCheckoutPage(): any;
    addCommentToCheckoutPage(text): any;
    clickPlaceOrder(): any;
    fillPaymentForm(
      cardName,
      cardNumber,
      cardCvc,
      cardMonthExpiration,
      cardYearExpiration
    ): any;
    submitPayment(): any;
    verifyPaymentSuccessMessage(): any;
    removeItemFromCart(): any;
    verifyCartIsEmpty(): any;
    selectProductCategory(categoryProduct, subCategoryProduct): any;
    selectProductBrand(brandProduct): any;
    submitProductReview(name, email, message): any;
    verifyReviewConfirmation(): any;
    scrollToRecommendedProducts(): any;
    addRecommendedProductToCart(): any;
    verifyDownloadedInvoice(request): any;
    scrollUpUsingArrow(): any;
    scrollUpWithoutArrow(): any;
    navigateToPage(namePage, verifyPage): any;
  }
}
