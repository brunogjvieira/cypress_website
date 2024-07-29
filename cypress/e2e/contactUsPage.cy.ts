import generatePerson from "../support/personModel";

describe("Contact Us", () => {
  let pages: any;
  let randomPerson: any;
  before(() => {
    cy.fixture("pages.json").then((loadedPages) => {
      pages = loadedPages;
    });
  });
  beforeEach(() => {
    randomPerson = generatePerson();
  });
  it("Should Fill the Contact Us Form and Submit", () => {
    cy.navigateToPage(
      pages.contactUsPage.name,
      pages.contactUsPage.pageLoadSelector
    );
    cy.fillContactUsForm(
      randomPerson.name,
      randomPerson.email,
      randomPerson.lorem,
      randomPerson.lorem
    );
    cy.insertUploadArquiveJPG();
    cy.submitContactUsForm();
    cy.verifyContactUsSuccessMessage();
  });
});
