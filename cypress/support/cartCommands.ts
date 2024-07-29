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

Cypress.Commands.add('verifyQuantitySameProductInCartPage', (quantityProductAdd) => {
    cy.get('[class="cart_quantity"]').find('button').then((quantityInCart) => {
      const quantityText = quantityInCart.text();
      const quantityNumber = parseInt(quantityText, 10);
    expect(quantityNumber).to.equal(quantityProductAdd);
    })
})

Cypress.Commands.add('removeItemInCartPage', () => {
  cy.get('[class="cart_quantity_delete"]').click();
})

Cypress.Commands.add('verifyIfTheCartIsEmpty', () => {
  cy.contains('Cart is empty!').should('be.visible')
})