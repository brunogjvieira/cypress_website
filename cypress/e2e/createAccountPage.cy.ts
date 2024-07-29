import generatePerson from "../support/personModel";

describe("Create Account", () => {
  it("Should register a new user", () => {
    const person = generatePerson();
    const personName = person.name;
    const personEmail = person.email;
    const personPassword = person.password
    const personLastName = person.lastName;
    const personCompany = person.company
    const personAddress = person.address
    const personAddressDetails = person.addressDetails
    const personState = person.state
    const personCity = person.city
    const personZipcode = person.zipcode
    const personPhoneNumber = person.phoneNumber

    cy.enterToLoginPage();
    cy.nameAndEmailFillForm(personName, personEmail);
    cy.createAccountVerifyForm();
    cy.createAccountFillForm(personPassword, personName, personLastName, personCompany, personAddress, personAddressDetails, personState, personCity, personZipcode, personPhoneNumber);
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
