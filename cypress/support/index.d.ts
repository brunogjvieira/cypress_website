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
    ): string;
    fillNameAndEmailForm(name, email): string;
    confirmAccountCreation()
    verifyAccountCreationForm()
    deleteAccount()
    fillLoginForm(email, password): string;
    verifyUserIsLoggedIn(username): string;
    verifyFailedLoginMessage()
    logout()
    verifyLogoutSuccess()
    verifySignupFailureMessage()
    fillContactUsForm(name, email, subject, message): string;
    insertUploadArquiveJPG()
    submitContactUsForm()
    verifyContactUsSuccessMessage()
    verifyTestCasesOnPage(array: string[])
    viewProductByIndex(indexProduct): number;
    verifyProductDetails()
    searchProductByName(nameProduct): string;
    verifyProductCountOnPage(quantityProduct): number;
    sendSubscriptionOnProductsPage(email): string;
    subscribeToNewsletterOnCartPage(email): string;
    addProductToCart(index): number;
    verifyProductAddedToCartMessage(boolean): boolean;
    verifyItemsInCart()
    setProductQuantity(quantity): number;
    addToCartOnDetailProductPage()
    verifyProductQuantityInCart(quantityProductAdd): number;
    clickProceedToCheckout()
    messageCheckoutLogin(boolean): boolean;
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
    ): string;
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
    ): string;
    verifyItemsOnCheckoutPage()
    addCommentToCheckoutPage(text): string;
    clickPlaceOrder()
    fillPaymentForm(
      cardName,
      cardNumber,
      cardCvc,
      cardMonthExpiration,
      cardYearExpiration
    ): string;
    submitPayment()
    verifyPaymentSuccessMessage()
    removeItemFromCart()
    verifyCartIsEmpty()
    selectProductCategory(categoryProduct, subCategoryProduct): string;
    selectProductBrand(brandProduct): string;
    submitProductReview(name, email, message): string;
    verifyReviewConfirmation()
    scrollToRecommendedProducts()
    addRecommendedProductToCart()
    verifyDownloadedInvoice(request): any;
    scrollUpUsingArrow()
    scrollUpWithoutArrow()
    navigateToPage(namePage, verifyPage): string;
  }
}
