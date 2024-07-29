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
  it("Should Login User with Correct Email and Password", () => {
    cy.navigateToPage(pages.loginPage.name, pages.loginPage.pageLoadSelector);
    cy.fillLoginForm(users.bruno.email, users.bruno.password);
    cy.verifyUserIsLoggedIn(users.bruno.name);
  });

  it("Should Login User with Incorrect Email and Password", () => {
    cy.navigateToPage(pages.loginPage.name, pages.loginPage.pageLoadSelector);
    cy.fillLoginForm(randomPerson.email, randomPerson.password);
    cy.verifyFailedLoginMessage();
  });

  it("Should log in User and then log out", () => {
    cy.navigateToPage(pages.loginPage.name, pages.loginPage.pageLoadSelector);
    cy.fillLoginForm(users.bruno.email, users.bruno.password);
    cy.logout();
    cy.verifyLogoutSuccess();
  });
});
