import generatePerson from "../support/personModel";

describe("Create Account", () => {
  it("Should register a new user", () => {
    const person = generatePerson();
    const personName = person.name;
    const personEmail = person.email;

    cy.enterToLoginPage();
    cy.nameAndEmailFillForm(personName, personEmail);
    cy.createAccountVerifyForm();
    cy.createAccountFillForm();
    cy.confirmCreatedAccount();
    cy.deleteAccount();
  });

  it("Should fail register new user with existing email", () => {
    const personName = "brunoqa";
    const personEmail = "brunoqa1@gmail.com";

    cy.enterToLoginPage();
    cy.nameAndEmailFillForm(personName, personEmail);
    cy.messageFailedSignup()
  });
});
