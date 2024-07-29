import generatePerson from "../support/personModel";

describe("login User", () => {
  let pages: any;
  let users: any;
  let randomPerson: any;
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
  it("Should login User with correct email and password", () => {
    cy.navigateToPage(pages.loginPage.name, pages.loginPage.pageLoadSelector);
    cy.loginAccountFillForm(users.bruno.email, users.bruno.password);
    cy.confirmButtonLogin();
    cy.verifyLogged(users.bruno.name);
  });

  it("Should login User with incorrect email and password", () => {
    cy.navigateToPage(pages.loginPage.name, pages.loginPage.pageLoadSelector);
    cy.loginAccountFillForm(randomPerson.email, randomPerson.password);
    cy.confirmButtonLogin();
    cy.messageFailedLogin();
  });

  it("Should login User with correct email and password after Logout", () => {
    cy.navigateToPage(pages.loginPage.name, pages.loginPage.pageLoadSelector);
    cy.loginAccountFillForm(users.bruno.email, users.bruno.password);
    cy.confirmButtonLogin();
    cy.clickLogoutButton();
    cy.confirmLogout();
  });
});
