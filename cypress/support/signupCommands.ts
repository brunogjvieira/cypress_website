import generatePerson from "./personModel";

const person = generatePerson();
Cypress.Commands.add("nameAndEmailFillForm", (name, email) => {
  cy.get('[data-qa="signup-name"]').type(name).should("have.value", `${name}`);
  cy.get('[data-qa="signup-email"]')
    .type(email)
    .should("have.value", `${email}`);
  cy.get('[data-qa="signup-button"]').click();
});

Cypress.Commands.add("createAccountFillForm", () => {
  cy.get("#id_gender1").check();
  cy.get("#newsletter").check();
  cy.get("#optin").check();
  cy.get('[data-qa="password"]')
    .type(person.password)
    .should("have.value", `${person.password}`);
  cy.get('[data-qa="days"]').select(1).should("have.value", "1");
  cy.get('[data-qa="months"]').select("January").should("have.value", "1");
  cy.get('[data-qa="years"]').select("2020").should("have.value", "2020");
  cy.get('[data-qa="first_name"]')
    .type(person.name)
    .should("have.value", `${person.name}`);
  cy.get('[data-qa="last_name"]')
    .type(person.lastName)
    .should("have.value", `${person.lastName}`);
  cy.get('[data-qa="company"]')
    .type(person.company)
    .should("have.value", `${person.company}`);
  cy.get('[data-qa="address"]')
    .type(person.address)
    .should("have.value", `${person.address}`);
  cy.get('[data-qa="address2"]')
    .type(person.addressDetails)
    .should("have.value", `${person.addressDetails}`);
  cy.get('[data-qa="country"]').type("India").should("have.value", "India");
  cy.get('[data-qa="state"]')
    .type(person.state)
    .should("have.value", `${person.state}`);
  cy.get('[data-qa="city"]')
    .type(person.city)
    .should("have.value", `${person.city}`);
  cy.get('[data-qa="zipcode"]')
    .type(person.zipcode)
    .should("have.value", `${person.zipcode}`);
  cy.get('[data-qa="mobile_number"]')
    .type(person.phoneNumber)
    .should("have.value", `${person.phoneNumber}`);
  cy.get('[data-qa="create-account"]').click();
});

Cypress.Commands.add("createAccountVerifyForm", () => {
  cy.get('[class="login-form"]')
    .find("label")
    .then((nameField) => {
      expect(nameField.text())
        .to.be.contain("Title")
        .and.contain(
          "Name *Email *Password *Date of BirthSign up for our newsletter!Receive special offers from our partners!First name *Last name *CompanyAddress * (Street address, P.O. Box, Company name, etc.)Address 2Country * State * City * Zipcode * Mobile Number"
        );
    });
});

Cypress.Commands.add("confirmCreatedAccount", () => {
  cy.get('[data-qa="account-created"]').should("be.visible");
  cy.url().should("include", "/account_created");
  cy.get('[data-qa="continue-button"]').click();
});

Cypress.Commands.add("deleteAccount", () => {
  cy.contains(" Delete Account").click();
  cy.get('[data-qa="account-deleted"]').should("be.visible");
});

Cypress.Commands.add("messageFailedSignup", () => {
  cy.contains("Email Address already exist!").should("be.visible");
});
