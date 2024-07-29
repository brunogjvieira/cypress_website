Cypress.Commands.add("insertUploadArquiveJPG" ,() => {
  cy.get('input[type=file]').selectFile('cypress/fixtures/testImage.jpg')
})

Cypress.Commands.add("scrollUpUsingArrow", () => {  
  cy.get('#scrollUp').should('be.visible').click()
  cy.get('#scrollUp').should('not.be.visible')
})

Cypress.Commands.add("scrollUpWithoutArrow", () => {  
  cy.contains('Home').scrollIntoView()
})

Cypress.Commands.add("navigateToPage", (namePage, verifyPage) => {  
  cy.visit("/");
  cy.contains(namePage).click();
  cy.get(verifyPage).should("be.visible");
})