import generatePerson from "../support/personModel";

describe("createAccount", () => {
  const person = generatePerson();
beforeEach( ()=> {
  cy.visit('/signup')
})


  it("Should create a new user and delete after", () => {
    cy.nameAndEmailFillForm(person.name, person.email);
    cy.createAccountVerifyForm();
    cy.createAccountFillForm();
    cy.confirmCreatedAccount();
    cy.deleteAccount();
  });

  it('Should fail to create a user with repeated email', () => {
    cy.nameAndEmailFillForm('brunoqa', 'brunoqa1@gmail.com');
    cy.contains('Email Address already exist!').should('be.visible')
  });

  it.skip('Should fail to create if the email is wrong format', () => {
  })

  it.skip('Should fail to create if name have 4 less words', () => {

  })

  it.skip('Should fail to create if the name is blank', () => {

  })
  
  it.skip('Should fail to create if the email is blank', () => {
    
  })
});
