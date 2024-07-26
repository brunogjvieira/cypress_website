Cypress.Commands.add("enterToLoginPage", () => {
  cy.visit("/");
  cy.contains(" Signup / Login").click();
  cy.get('[class="login-form"]')
    .should("be.visible")
    .find("h2")
    .contains("Login to your account");
});

Cypress.Commands.add("loginAccountFillForm", (email, password) => {
  cy.get('[data-qa="login-email"]').type(email).should("have.value", email);
  cy.get('[data-qa="login-password"]')
    .type(password)
    .should("have.value", password);
});

Cypress.Commands.add("confirmButtonLogin", () => {
  cy.get('[data-qa="login-button"]').click();
});

Cypress.Commands.add("verifyLogged", (username) => {
  cy.contains(" Logged in as ").should("be.visible");
  cy.contains(username).should("be.visible");
});

Cypress.Commands.add("messageFailedLogin", () => {
  cy.contains("Your email or password is incorrect!").should("be.visible");
});

Cypress.Commands.add("clickLogoutButton", () => {
  cy.contains("Logout").click();
});

Cypress.Commands.add("confirmLogout", () => {
  cy.url().should('include', '/login')
});
