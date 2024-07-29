Cypress.Commands.add("fillContactUsForm", (name, email, subject, message) => {
  cy.get('[data-qa="name"]').type(name).should("have.value", name);
  cy.get('[data-qa="email"]').type(email).should("have.value", email);
  cy.get('[data-qa="subject"]').type(subject).should("have.value", subject);
  cy.get('[data-qa="message"]').type(message).should("have.value", message);
});
Cypress.Commands.add("submitContactUsForm", () => {
  cy.get('[data-qa="submit-button"]').click();
});
Cypress.Commands.add("verifyContactUsSuccessMessage", () => {
  cy.contains("Success! Your details have been submitted successfully.").should(
    "be.visible"
  );
});
