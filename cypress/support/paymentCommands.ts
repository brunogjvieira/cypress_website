Cypress.Commands.add('paymentFillForm', (cardName, cardNumber, cardCvc, cardMonthExpiration, cardYearExpiration) => {
  cy.get('[data-qa="name-on-card"]').type(cardName).should('have.value', cardName)
  cy.get('[data-qa="card-number"]').type(cardNumber).should('have.value', cardNumber)
  cy.get('[data-qa="cvc"]').type(cardCvc).should('have.value', cardCvc)
  cy.get('[data-qa="expiry-month"]').type(cardMonthExpiration).should('have.value', cardMonthExpiration)
  cy.get('[data-qa="expiry-year"]').type(cardYearExpiration).should('have.value', cardYearExpiration)
})

Cypress.Commands.add('submitPaymentButton', () => {
  cy.get('[data-qa="pay-button"]').click()
})

Cypress.Commands.add('paymentSuccessMessage', () => {
  cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
})