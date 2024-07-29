import 'cypress-plugin-api'

Cypress.Commands.add("clickProceedToCheckout", () => {
  cy.contains("Proceed To Checkout").click();
});

Cypress.Commands.add("messageCheckoutLogin", (boolean) => {
  const continueOrder = boolean;
  cy.get('[id="checkoutModal"]').contains("Checkout").should("be.visible");
  if (continueOrder) {
    cy.get("a").contains("Register / Login").should("be.visible").click();
    cy.url().should("include", "login");
  } else {
    cy.contains("Continue On Cart").should("be.visible").click();
    cy.url().should("include", "view_cart");
  }
});

Cypress.Commands.add("verifyUserBillingAddressOnCheckoutPage", (
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
) => {
  cy.get('[id="address_invoice"]').then((boxAddress) => {
    cy.wrap(boxAddress)
      .find('[class="address_firstname address_lastname"]')
      .should("have.text", `Mr. ${name} ${lastName}`);
    cy.wrap(boxAddress)
      .find('[class="address_address1 address_address2"]')
      .should("have.text", `${company}${address}${addressDetails}`);
    cy.wrap(boxAddress)
      .find('[class="address_city address_state_name address_postcode"]')
      .should("contain.text", city)
      .and("contain.text", state)
      .and("contain.text", zipcode);
    cy.wrap(boxAddress)
      .find('[class="address_country_name"]')
      .should("have.text", country);
    cy.wrap(boxAddress)
      .find('[class="address_phone"]')
      .should("have.text", phoneNumber);
  });
})

Cypress.Commands.add("verifyUserDeliveryAddressOnCheckoutPage",
  (
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
  ) => {
    cy.get('[id="address_delivery"]').then((boxAddress) => {
      cy.wrap(boxAddress)
        .find('[class="address_firstname address_lastname"]')
        .should("have.text", `Mr. ${name} ${lastName}`);
      cy.wrap(boxAddress)
        .find('[class="address_address1 address_address2"]')
        .should("have.text", `${company}${address}${addressDetails}`);
      cy.wrap(boxAddress)
        .find('[class="address_city address_state_name address_postcode"]')
        .should("contain.text", city)
        .and("contain.text", state)
        .and("contain.text", zipcode);
      cy.wrap(boxAddress)
        .find('[class="address_country_name"]')
        .should("have.text", country);
      cy.wrap(boxAddress)
        .find('[class="address_phone"]')
        .should("have.text", phoneNumber);
    });
  }
);

Cypress.Commands.add("verifyItemsOnCheckoutPage", () => {
  cy.get('[id="cart_info"]')
    .should("be.visible")
    .find("tbody")
    .find('tr[id]')
    .each((product) => {
      cy.wrap(product).find("img").should("have.attr", "src");
      cy.wrap(product)
        .find('[class="cart_description"]')
        .find("p")
        .should("not.be.empty");
      cy.wrap(product)
        .find('[class="cart_price"]')
        .find("p")
        .should("not.be.empty");
      cy.wrap(product)
        .find('[class="cart_quantity"]')
        .find("button")
        .should("have.length.greaterThan", 0);
      cy.wrap(product)
        .find('[class="cart_total"]')
        .find("p")
        .should("not.be.empty");
    });
});

Cypress.Commands.add('addCommentToCheckoutPage', (text) => {
  cy.get('.form-control').type(text)
})

Cypress.Commands.add('clickPlaceOrder', () => {
  cy.contains('Place Order').click()
})

Cypress.Commands.add('verifyDownloadedInvoice', (request) => {
  cy.contains(`Download Invoice`).click()
  cy.wait(`@${request}`)
})