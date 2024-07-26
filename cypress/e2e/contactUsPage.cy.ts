import generatePerson from "../support/personModel";

describe("Contact Us", () => {
  it("Should Fill the Contact Us Form and submit", () => {
    const person = generatePerson();
    const name = person.name;
    const email = person.email;
    const message = person.lorem;
    const subject = person.lorem;

    cy.enterToContactUsPage();
    cy.contactUsFillForm(name, email, message, subject);
    cy.insertUploadArquiveJPG();
    cy.contactUsSubmitButton();
    cy.contactUsSuccessMessage();
  });
});
