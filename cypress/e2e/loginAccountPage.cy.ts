describe("login User", () => {
  it("Should login User with correct email and password", () => {
    const username = "bruno_qa";
    const email = "brunoqa1@gmail.com";
    const password = "brunoqa";
    cy.enterToLoginPage();
    cy.loginAccountFillForm(email, password);
    cy.confirmButtonLogin();
    cy.verifyLogged(username);
  });

  it("Should login User with incorrect email and password", () => {
    const email = "wrongEmail@gmail.com";
    const password = "teste321";
    cy.enterToLoginPage();
    cy.loginAccountFillForm(email, password);
    cy.confirmButtonLogin();
    cy.messageFailedLogin();
  });

  it("Should login User with correct email and password after Logout", () => {
    
    const email = "brunoqa1@gmail.com";
    const password = "brunoqa";
    cy.enterToLoginPage();
    cy.loginAccountFillForm(email, password);
    cy.confirmButtonLogin();
    cy.clickLogoutButton();
    cy.confirmLogout();
  });
});
