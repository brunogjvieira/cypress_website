Cypress.Commands.add("enterToTestCasesPage", () => {
  cy.visit("/");
  cy.contains(" Test Cases").click();
  cy.get('[id="form"]').should("be.visible").find("h2").contains("Test Cases");
});

Cypress.Commands.add("verifyAllTestCasesPage", (array) => {
  cy.get('[id="form"]').find('[class="panel-title"]').find('u').each((element, index) => {
    cy.wrap(element).should('have.text', array[index]);
  })
});
