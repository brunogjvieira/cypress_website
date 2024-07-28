describe("Products", () => {
  it("Should verify all products and product detail page", () => {
    const indexProduct = 0;

    cy.enterToProductsPage();
    cy.viewProductByIndex(indexProduct);
    cy.verifyDetailProduct();
  });

  it("Should search a product", () => {
    const nameProduct = "Men tshirt";

    cy.enterToProductsPage();
    cy.selectProductBySearch(nameProduct);
    cy.verifyQuantityProductsInThePage(1);
  });

  it("Should send a subscription in products page", () => {
    const email = "brunoqa1@gmail.com";

    cy.enterToProductsPage();
    cy.sendSubscriptionInProductsPage(email);
  });
});
