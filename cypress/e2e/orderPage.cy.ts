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
  it('Should place order: register while checkout', () => {
    const indexProduct = 0;
    const continueShopping = true;
    const continueOrder = true;
    const personCountry = 'India'
    const checkoutMessage = 'teste'
    
    cy.navigateToPage(pages.productsPage.name, pages.productsPage.pageLoadSelector);
    cy.addProductInCart(indexProduct);
    cy.messageProductAddedToCart(continueShopping);
    cy.navigateToPage(pages.cartPage.name, pages.cartPage.pageLoadSelector);
    cy.proceedToCheckoutButton()
    cy.messageOrderCheckoutLogin(continueOrder)
    cy.nameAndEmailFillForm(randomPerson.name, randomPerson.email);
    cy.createAccountFillForm(randomPerson.password, randomPerson.name, randomPerson.lastName, randomPerson.company, randomPerson.address, randomPerson.addressDetails, randomPerson.state, randomPerson.city, randomPerson.zipcode, randomPerson.phoneNumber);
    cy.confirmCreatedAccount();
    cy.verifyLogged(randomPerson.name)
    cy.navigateToPage(pages.cartPage.name, pages.cartPage.pageLoadSelector);
    cy.proceedToCheckoutButton()
    cy.verifyUserDeliveryAddressCheckoutPage(randomPerson.name, randomPerson.lastName, randomPerson.company, randomPerson.address, randomPerson.addressDetails, randomPerson.city, randomPerson.state, randomPerson.zipcode, personCountry, randomPerson.phoneNumber)
    cy.verifyItemFromCheckoutPage()
    cy.sendCommentInCheckoutPage(checkoutMessage)
    cy.placeOrderButton()
    cy.paymentFillForm(randomPerson.cardName, randomPerson.cardNumber, randomPerson.cardCvc, randomPerson.cardExpirationMonth, randomPerson.cardExpirationYear)
    cy.submitPaymentButton()
    cy.paymentSuccessMessage()
  });

  it('Should place order: register before checkout', () => {
    const indexProduct = 0;
    const continueShopping = false;
    const personCountry = 'India'
    const checkoutMessage = 'teste'

    cy.navigateToPage(pages.loginPage.name, pages.loginPage.pageLoadSelector);
    cy.nameAndEmailFillForm(randomPerson.name, randomPerson.email);
    cy.createAccountFillForm(randomPerson.password, randomPerson.name, randomPerson.lastName, randomPerson.company, randomPerson.address, randomPerson.addressDetails, randomPerson.state, randomPerson.city, randomPerson.zipcode, randomPerson.phoneNumber);
    cy.confirmCreatedAccount();
    cy.verifyLogged(randomPerson.name)
    cy.addProductInCart(indexProduct);
    cy.messageProductAddedToCart(continueShopping);
    cy.proceedToCheckoutButton()
    cy.verifyUserDeliveryAddressCheckoutPage(randomPerson.name, randomPerson.lastName, randomPerson.company, randomPerson.address, randomPerson.addressDetails, randomPerson.city, randomPerson.state, randomPerson.zipcode, personCountry, randomPerson.phoneNumber)
    cy.verifyUserBillingAddressCheckoutPage(randomPerson.name, randomPerson.lastName, randomPerson.company, randomPerson.address, randomPerson.addressDetails, randomPerson.city, randomPerson.state, randomPerson.zipcode, personCountry, randomPerson.phoneNumber)
    cy.verifyItemFromCheckoutPage()
    cy.sendCommentInCheckoutPage(checkoutMessage)
    cy.placeOrderButton()
    cy.paymentFillForm(randomPerson.cardName, randomPerson.cardNumber, randomPerson.cardCvc, randomPerson.cardExpirationMonth, randomPerson.cardExpirationYear)
    cy.submitPaymentButton()
    cy.paymentSuccessMessage()
  });

  it('Should place order: login before checkout and downloaded invoice', () => {
    cy.intercept('GET',
      'https://automationexercise.com/download_invoice/500').as('getInvoice')
    const indexProduct = 0;
    const continueShopping = false;
    const checkoutMessage = 'teste'

    cy.navigateToPage(pages.loginPage.name, pages.loginPage.pageLoadSelector);
    cy.loginAccountFillForm(users.bruno.email, users.bruno.password);
    cy.confirmButtonLogin();
    cy.verifyLogged(users.bruno.name)
    cy.addProductInCart(indexProduct);
    cy.messageProductAddedToCart(continueShopping);
    cy.proceedToCheckoutButton()
    cy.verifyItemFromCheckoutPage()
    cy.sendCommentInCheckoutPage(checkoutMessage)
    cy.placeOrderButton()
    cy.paymentFillForm(randomPerson.cardName, randomPerson.cardNumber, randomPerson.cardCvc, randomPerson.cardExpirationMonth, randomPerson.cardExpirationYear)
    cy.submitPaymentButton()
    cy.paymentSuccessMessage()
    cy.downloadInvoice(`getInvoice`)
  });
});