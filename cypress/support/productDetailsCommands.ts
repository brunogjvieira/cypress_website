Cypress.Commands.add("verifyDetailProduct", () => {
  cy.get('[class="product-information"]').should('be.visible').then((infoProduct) => {
    cy.wrap(infoProduct).find('h2').should('not.be.empty');
    cy.wrap(infoProduct).find('p').should('not.be.empty');
    cy.wrap(infoProduct).find('span span').should('not.be.empty');
    cy.wrap(infoProduct).find('p').each((test) => {
    cy.wrap(test.text()).should('not.be.empty');
    });
  })
})