Cypress.Commands.add("verifyProductDetails", () => {
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

Cypress.Commands.add("setProductQuantity", (quantity) => {
  cy.get("#quantity").clear().type(quantity).should("have.value", quantity);
});

Cypress.Commands.add('addToCartOnDetailProductPage', () => {
  cy.get('[type="button"]').contains('Add to cart').click()
})

Cypress.Commands.add('submitProductReview', (name, email, message) => {
  cy.get('#name').type(name).should("have.value", name)
  cy.get('#email').type(email).should("have.value", email)
  cy.get('#review').type(message).should("have.value", message)
  cy.get('#button-review').click()
})

Cypress.Commands.add('verifyReviewConfirmation', () => {
  cy.contains('Thank you for your review.').should('be.visible')
})