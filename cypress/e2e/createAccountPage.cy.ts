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
  it("Should Register a New User", () => {
    cy.navigateToPage(pages.loginPage.name, pages.loginPage.pageLoadSelector);
    cy.fillNameAndEmailForm(randomPerson.name, randomPerson.email);
    cy.verifyAccountCreationForm();
    cy.fillAccountCreationForm(
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
    cy.confirmAccountCreation();
    cy.deleteAccount();
  });

  it("Should Fail to Register New User with Existing Email", () => {
    cy.navigateToPage(pages.loginPage.name, pages.loginPage.pageLoadSelector);
    cy.fillNameAndEmailForm(users.bruno.name, users.bruno.email);
    cy.verifySignupFailureMessage();
  });
});
