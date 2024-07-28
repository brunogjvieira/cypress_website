describe("Cart", () => {
  it("Should send a subscription in the cart page", () => {
    const email = "brunoqa1@gmail.com";

    cy.enterToCartPage();
    cy.sendSubscriptionInCartPage(email);
  });

  it("Should add two products in cart", () => {
    const indexFirstProduct = 0;
    var continueShopping = true;
    const indexSecondProduct = 1;

    cy.enterToProductsPage();
    cy.addProductInCart(indexFirstProduct);
    cy.messageProductAddedToCart(continueShopping);
    cy.addProductInCart(indexSecondProduct);
    cy.messageProductAddedToCart((continueShopping = false));
    cy.verifyItemFromCart()
  });
});
