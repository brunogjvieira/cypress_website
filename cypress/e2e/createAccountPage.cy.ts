import generatePerson from "../support/personModel";

describe("Create Account", () => {
  let randomPerson: any;
  let pages: any;
  let users: any;
  before(() => {
    cy.fixture("pages.json").then((loadedPages) => {
      pages = loadedPages;
    });
    cy.fixture("users.json").then((loadedUsers) => {
      users = loadedUsers;
    });
  });
  beforeEach(() => {
    randomPerson = generatePerson();
  });
  it("Should register a new user", () => {
    cy.navigateToPage(pages.loginPage.name, pages.loginPage.pageLoadSelector);
    cy.nameAndEmailFillForm(randomPerson.name, randomPerson.email);
    cy.createAccountVerifyForm();
    cy.createAccountFillForm(
      randomPerson.password,
      randomPerson.name,
      randomPerson.lastName,
      randomPerson.company,
      randomPerson.address,
      randomPerson.addressDetails,
      randomPerson.state,
      randomPerson.city,
      randomPerson.zipcode,
      randomPerson.phoneNumber
    );
    cy.confirmCreatedAccount();
    cy.deleteAccount();
  });

  it("Should fail register new user with existing email", () => {
    cy.navigateToPage(pages.loginPage.name, pages.loginPage.pageLoadSelector);
    cy.nameAndEmailFillForm(users.bruno.name, users.bruno.email);
    cy.messageFailedSignup();
  });
});
