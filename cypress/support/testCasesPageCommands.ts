Cypress.Commands.add("verifyAllTestCasesPage", (array) => {
  cy.get('[id="form"]')
    .find('[class="panel-title"]')
    .find("u")
    .each((element, index) => {
      cy.wrap(element).should("have.text", array[index]);
    });
});
