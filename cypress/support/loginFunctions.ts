Cypress.Commands.add("fillLoginForm", (email, password) => {
  cy.get('[data-qa="login-email"]').type(email).should("have.value", email);
  cy.get('[data-qa="login-password"]')
    .type(password)
    .should("have.value", password);
    cy.get('[data-qa="login-button"]').click();
});
Cypress.Commands.add("verifyUserIsLoggedIn", (username) => {
  cy.contains(" Logged in as ").should("be.visible");
  cy.contains(username).should("be.visible");
});

Cypress.Commands.add("verifyFailedLoginMessage", () => {
  cy.contains("Your email or password is incorrect!").should("be.visible");
});

Cypress.Commands.add("logout", () => {
  cy.contains("Logout").click();
});

Cypress.Commands.add("verifyLogoutSuccess", () => {
  cy.url().should("include", "/login");
});
