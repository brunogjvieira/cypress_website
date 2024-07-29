import generatePerson from "../support/personModel";


describe('Place Order', () => {
  it.only('Should place order: register while checkout', () => {
    const indexProduct = 0;
    const continueShopping = true;
    const continueOrder = true;
    const person = generatePerson();
    const personName = person.name;
    const personEmail = person.email;
    const personPassword = person.password
    const personLastName = person.lastName;
    const personCompany = person.company
    const personAddress = person.address
    const personAddressDetails = person.addressDetails
    const personState = person.state
    const personCity = person.city
    const personZipcode = person.zipcode
    const personPhoneNumber = person.phoneNumber
    const personCountry = 'India'
    const checkoutMessage = 'teste'
    const personCardName = person.cardName
    const personCardNumber = person.cardNumber
    const personCardCvc = person.cardCvc
    const personCardExpirationYear = person.cardExpirationYear
    const personCardExpirationMonth = person.cardExpirationMonth
    const cartPage = ' Cart'
    const verifyCartPage = '#cart_items'


    cy.enterToProductsPage();
    cy.addProductInCart(indexProduct);
    cy.messageProductAddedToCart(continueShopping);
    cy.navigateToPage(cartPage, verifyCartPage);
    cy.proceedToCheckoutButton()
    cy.messageOrderCheckoutLogin(continueOrder)
    cy.nameAndEmailFillForm(personName, personEmail);
    cy.createAccountFillForm(personPassword, personName, personLastName, personCompany, personAddress, personAddressDetails, personState, personCity, personZipcode, personPhoneNumber);
    cy.confirmCreatedAccount();
    cy.verifyLogged(personName)
    cy.navigateToPage(cartPage, verifyCartPage);
    cy.proceedToCheckoutButton()
    cy.verifyUserDeliveryAddressCheckoutPage(personName, personLastName, personCompany, personAddress, personAddressDetails, personCity, personState, personZipcode, personCountry, personPhoneNumber)
    cy.verifyItemFromCheckoutPage()
    cy.sendCommentInCheckoutPage(checkoutMessage)
    cy.placeOrderButton()
    cy.paymentFillForm(personCardName, personCardNumber, personCardCvc, personCardExpirationMonth, personCardExpirationYear)
    cy.submitPaymentButton()
    cy.paymentSuccessMessage()
  });

  it('Should place order: register before checkout', () => {
    const indexProduct = 0;
    const continueShopping = false;
    const person = generatePerson();
    const personName = person.name;
    const personEmail = person.email;
    const personPassword = person.password
    const personLastName = person.lastName;
    const personCompany = person.company
    const personAddress = person.address
    const personAddressDetails = person.addressDetails
    const personState = person.state
    const personCity = person.city
    const personZipcode = person.zipcode
    const personPhoneNumber = person.phoneNumber
    const personCountry = 'India'
    const checkoutMessage = 'teste'
    const personCardName = person.cardName
    const personCardNumber = person.cardNumber
    const personCardCvc = person.cardCvc
    const personCardExpirationYear = person.cardExpirationYear
    const personCardExpirationMonth = person.cardExpirationMonth

    cy.enterToLoginPage();
    cy.nameAndEmailFillForm(personName, personEmail);
    cy.createAccountFillForm(personPassword, personName, personLastName, personCompany, personAddress, personAddressDetails, personState, personCity, personZipcode, personPhoneNumber);
    cy.confirmCreatedAccount();
    cy.verifyLogged(personName)
    cy.addProductInCart(indexProduct);
    cy.messageProductAddedToCart(continueShopping);
    cy.proceedToCheckoutButton()
    cy.verifyUserDeliveryAddressCheckoutPage(personName, personLastName, personCompany, personAddress, personAddressDetails, personCity, personState, personZipcode, personCountry, personPhoneNumber)
    cy.verifyUserBillingAddressCheckoutPage(personName, personLastName, personCompany, personAddress, personAddressDetails, personCity, personState, personZipcode, personCountry, personPhoneNumber)
    cy.verifyItemFromCheckoutPage()
    cy.sendCommentInCheckoutPage(checkoutMessage)
    cy.placeOrderButton()
    cy.paymentFillForm(personCardName, personCardNumber, personCardCvc, personCardExpirationMonth, personCardExpirationYear)
    cy.submitPaymentButton()
    cy.paymentSuccessMessage()
  });

  it('Should place order: login before checkout and downloaded invoice', () => {
    cy.intercept('GET',
      'https://automationexercise.com/download_invoice/500').as('getInvoice')
    const indexProduct = 0;
    const continueShopping = false;
    const person = generatePerson();
    const checkoutMessage = 'teste'
    const personCardName = person.cardName
    const personCardNumber = person.cardNumber
    const personCardCvc = person.cardCvc
    const personCardExpirationYear = person.cardExpirationYear
    const personCardExpirationMonth = person.cardExpirationMonth
    const email = "brunoqa1@gmail.com";
    const password = "brunoqa";
    const name = 'bruno_qa'

    cy.enterToLoginPage();
    cy.loginAccountFillForm(email, password);
    cy.confirmButtonLogin();
    cy.verifyLogged(name)
    cy.addProductInCart(indexProduct);
    cy.messageProductAddedToCart(continueShopping);
    cy.proceedToCheckoutButton()
    cy.verifyItemFromCheckoutPage()
    cy.sendCommentInCheckoutPage(checkoutMessage)
    cy.placeOrderButton()
    cy.paymentFillForm(personCardName, personCardNumber, personCardCvc, personCardExpirationMonth, personCardExpirationYear)
    cy.submitPaymentButton()
    cy.paymentSuccessMessage()
    cy.downloadInvoice(`getInvoice`)
  });
});