Cypress.Commands.add("enterToCartPage", () => {
  cy.visit("/");
  cy.contains(" Cart").click();
  cy.get("#cart_items").should("be.visible");
});

Cypress.Commands.add("sendSubscriptionInCartPage", (email) => {
  cy.get("#susbscribe_email")
    .scrollIntoView()
    .type(email)
    .should("have.value", email);
  cy.get("#subscribe").click();
  cy.get(".alert-success").should("be.visible");
});

Cypress.Commands.add("verifyItemFromCart", () => {
  cy.get("#cart_info_table")
    .should("be.visible")
    .find("tbody")
    .find("tr")
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
      cy.wrap(product).find('[class="cart_delete"]').should("be.visible");
    });
});
