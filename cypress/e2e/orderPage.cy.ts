import generatePerson from "../support/personModel";


describe('Place Order', () => {
  let pages: any;
  let randomPerson: any;
  let users: any;
  before(() => {
    cy.fixture('pages.json').then((loadedPages) => {
      pages = loadedPages;
    });
    cy.fixture('users.json').then((loadedUsers) => {
      users = loadedUsers;
    });
  });
  beforeEach(() => {
    randomPerson = generatePerson();
  });
  it('Should register while checking out and place an order', () => {
    const indexProduct = 0;
    const continueShopping = true;
    const continueOrder = true;
    const personCountry = 'India'
    const checkoutMessage = 'teste'
    
    cy.navigateToPage(pages.productsPage.name, pages.productsPage.pageLoadSelector);
    cy.addProductToCart(indexProduct);
    cy.verifyProductAddedToCartMessage(continueShopping);
    cy.navigateToPage(pages.cartPage.name, pages.cartPage.pageLoadSelector);
    cy.clickProceedToCheckout()
    cy.messageCheckoutLogin(continueOrder)
    cy.fillNameAndEmailForm(randomPerson.name, randomPerson.email);
    cy.fillAccountCreationForm(randomPerson.password, randomPerson.name, randomPerson.lastName, randomPerson.company, randomPerson.address, randomPerson.addressDetails, randomPerson.state, randomPerson.city, randomPerson.zipcode, randomPerson.phoneNumber);
    cy.confirmAccountCreation();
    cy.verifyUserIsLoggedIn(randomPerson.name)
    cy.navigateToPage(pages.cartPage.name, pages.cartPage.pageLoadSelector);
    cy.clickProceedToCheckout()
    cy.verifyUserDeliveryAddressOnCheckoutPage(randomPerson.name, randomPerson.lastName, randomPerson.company, randomPerson.address, randomPerson.addressDetails, randomPerson.city, randomPerson.state, randomPerson.zipcode, personCountry, randomPerson.phoneNumber)
    cy.verifyItemsOnCheckoutPage()
    cy.addCommentToCheckoutPage(checkoutMessage)
    cy.clickPlaceOrder()
    cy.fillPaymentForm(randomPerson.cardName, randomPerson.cardNumber, randomPerson.cardCvc, randomPerson.cardExpirationMonth, randomPerson.cardExpirationYear)
    cy.submitPayment()
    cy.verifyPaymentSuccessMessage()
  });

  it('Should register before checkout and place an order', () => {
    const indexProduct = 0;
    const continueShopping = false;
    const personCountry = 'India'
    const checkoutMessage = 'teste'

    cy.navigateToPage(pages.loginPage.name, pages.loginPage.pageLoadSelector);
    cy.fillNameAndEmailForm(randomPerson.name, randomPerson.email);
    cy.fillAccountCreationForm(randomPerson.password, randomPerson.name, randomPerson.lastName, randomPerson.company, randomPerson.address, randomPerson.addressDetails, randomPerson.state, randomPerson.city, randomPerson.zipcode, randomPerson.phoneNumber);
    cy.confirmAccountCreation();
    cy.verifyUserIsLoggedIn(randomPerson.name)
    cy.addProductToCart(indexProduct);
    cy.verifyProductAddedToCartMessage(continueShopping);
    cy.clickProceedToCheckout()
    cy.verifyUserDeliveryAddressOnCheckoutPage(randomPerson.name, randomPerson.lastName, randomPerson.company, randomPerson.address, randomPerson.addressDetails, randomPerson.city, randomPerson.state, randomPerson.zipcode, personCountry, randomPerson.phoneNumber)
    cy.verifyUserBillingAddressOnCheckoutPage(randomPerson.name, randomPerson.lastName, randomPerson.company, randomPerson.address, randomPerson.addressDetails, randomPerson.city, randomPerson.state, randomPerson.zipcode, personCountry, randomPerson.phoneNumber)
    cy.verifyItemsOnCheckoutPage()
    cy.addCommentToCheckoutPage(checkoutMessage)
    cy.clickPlaceOrder()
    cy.fillPaymentForm(randomPerson.cardName, randomPerson.cardNumber, randomPerson.cardCvc, randomPerson.cardExpirationMonth, randomPerson.cardExpirationYear)
    cy.submitPayment()
    cy.verifyPaymentSuccessMessage()
  });

  it('Should log in before checkout and download invoice', () => {
    cy.intercept('GET',
      '**/download_invoice/**').as('getInvoice')
    const indexProduct = 0;
    const continueShopping = false;
    const checkoutMessage = 'teste'

    cy.navigateToPage(pages.loginPage.name, pages.loginPage.pageLoadSelector);
    cy.fillLoginForm(users.bruno.email, users.bruno.password);
    cy.verifyUserIsLoggedIn(users.bruno.name)
    cy.addProductToCart(indexProduct);
    cy.verifyProductAddedToCartMessage(continueShopping);
    cy.clickProceedToCheckout()
    cy.verifyItemsOnCheckoutPage()
    cy.addCommentToCheckoutPage(checkoutMessage)
    cy.clickPlaceOrder()
    cy.fillPaymentForm(randomPerson.cardName, randomPerson.cardNumber, randomPerson.cardCvc, randomPerson.cardExpirationMonth, randomPerson.cardExpirationYear)
    cy.submitPayment()
    cy.verifyPaymentSuccessMessage()
    cy.verifyDownloadedInvoice(`getInvoice`)
  });
});