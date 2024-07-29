import generatePerson from "./personModel";

const person = generatePerson();
Cypress.Commands.add("nameAndEmailFillForm", (name, email) => {
  cy.get('[data-qa="signup-name"]').type(name).should("have.value", `${name}`);
  cy.get('[data-qa="signup-email"]')
    .type(email)
    .should("have.value", `${email}`);
  cy.get('[data-qa="signup-button"]').click();
});

Cypress.Commands.add("createAccountFillForm", (password, name, lastName, company, address, addressDetails, state, city, zipcode, phoneNumber) => {
  cy.get("#id_gender1").check();
  cy.get("#newsletter").check();
  cy.get("#optin").check();
  cy.get('[data-qa="password"]')
    .type(password)
    .should("have.value", password);
  cy.get('[data-qa="days"]').select(1).should("have.value", "1");
  cy.get('[data-qa="months"]').select("January").should("have.value", "1");
  cy.get('[data-qa="years"]').select("2020").should("have.value", "2020");
  cy.get('[data-qa="first_name"]')
    .type(name)
    .should("have.value", name);
  cy.get('[data-qa="last_name"]')
    .type(lastName)
    .should("have.value", lastName);
  cy.get('[data-qa="company"]')
    .type(company)
    .should("have.value", company);
  cy.get('[data-qa="address"]')
    .type(address)
    .should("have.value", address);
  cy.get('[data-qa="address2"]')
    .type(addressDetails)
    .should("have.value", addressDetails);
  cy.get('[data-qa="country"]').type("India").should("have.value", "India");
  cy.get('[data-qa="state"]')
    .type(state)
    .should("have.value", state);
  cy.get('[data-qa="city"]')
    .type(city)
    .should("have.value", city);
  cy.get('[data-qa="zipcode"]')
    .type(zipcode)
    .should("have.value", zipcode);
  cy.get('[data-qa="mobile_number"]')
    .type(phoneNumber)
    .should("have.value", phoneNumber);
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
