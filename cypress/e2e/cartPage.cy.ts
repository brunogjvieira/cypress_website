describe("Cart", () => {
  it("Should send a subscription in the cart page", () => {
    const email = "brunoqa1@gmail.com";
    const cartPage = ' Cart'
    const verifyCartPage = '#cart_items'

    cy.navigateToPage(cartPage, verifyCartPage);
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
    cy.verifyItemFromCart();
  });

  it("Should verify product quantity in cart", () => {
    const indexProduct = 0;
    const quantityProduct = 4;
    const continueShopping = false;

    cy.enterToProductsPage();
    cy.viewProductByIndex(indexProduct);
    cy.addQuantityProductInDetailProductPage(quantityProduct);
    cy.addToCartInDetailProductPage();
    cy.messageProductAddedToCart(continueShopping);
    cy.verifyQuantitySameProductInCartPage(quantityProduct);
  });

  it("Should add a product in cart and remove it", () => {
    const indexFirstProduct = 0;
    var continueShopping = false;

    cy.enterToProductsPage();
    cy.addProductInCart(indexFirstProduct);
    cy.messageProductAddedToCart(continueShopping);
    cy.verifyItemFromCart();
    cy.removeItemInCartPage()
    cy.verifyIfTheCartIsEmpty()

  });
});
