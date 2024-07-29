Cypress.Commands.add("verifyDetailProduct", () => {
  cy.get('[class="product-information"]')
    .should("be.visible")
    .then((infoProduct) => {
      cy.wrap(infoProduct).find("h2").should("not.be.empty");
      cy.wrap(infoProduct).find("p").should("not.be.empty");
      cy.wrap(infoProduct).find("span span").should("not.be.empty");
      cy.wrap(infoProduct)
        .find("p")
        .each((test) => {
          cy.wrap(test.text()).should("not.be.empty");
        });
    });
});

Cypress.Commands.add("addQuantityProductInDetailProductPage", (quantity) => {
  cy.get("#quantity").clear().type(quantity).should("have.value", quantity);
});

Cypress.Commands.add('addToCartInDetailProductPage', () => {
  cy.get('[type="button"]').contains('Add to cart').click()
})

Cypress.Commands.add('sendMessageReviewOnProduct', (name, email, message) => {
  cy.get('#name').type(name).should("have.value", name)
  cy.get('#email').type(email).should("have.value", email)
  cy.get('#review').type(message).should("have.value", message)
  cy.get('#button-review').click()
})

Cypress.Commands.add('confirmMessageReview', () => {
  cy.contains('Thank you for your review.').should('be.visible')
})