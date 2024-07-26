Cypress.Commands.add("insertUploadArquiveJPG" ,() => {
  cy.get('input[type=file]').selectFile('cypress/fixtures/testImage.jpg')
})