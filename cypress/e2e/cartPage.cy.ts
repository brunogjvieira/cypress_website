import generatePerson from "../support/personModel";

describe("Cart", () => {
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
  it("Should send a subscription in the cart page", () => {
    cy.navigateToPage(pages.cartPage.name, pages.cartPage.pageLoadSelector);
    cy.subscribeToNewsletterOnCartPage(randomPerson.email);
  });

  it("Should add two products in cart", () => {
    const indexFirstProduct = 0;
    var continueShopping = true;
    const indexSecondProduct = 1;

    cy.navigateToPage(
      pages.productsPage.name,
      pages.productsPage.pageLoadSelector
    );
    cy.addProductInCart(indexFirstProduct);
    cy.messageProductAddedToCart(continueShopping);
    cy.addProductInCart(indexSecondProduct);
    cy.messageProductAddedToCart((continueShopping = false));
    cy.verifyItemsInCart();
  });

  it("Should verify product quantity in cart", () => {
    const indexProduct = 0;
    const quantityProduct = 4;
    const continueShopping = false;

    cy.navigateToPage(
      pages.productsPage.name,
      pages.productsPage.pageLoadSelector
    );
    cy.viewProductByIndex(indexProduct);
    cy.addQuantityProductInDetailProductPage(quantityProduct);
    cy.addToCartInDetailProductPage();
    cy.messageProductAddedToCart(continueShopping);
    cy.verifyQuantitySameProductInCartPage(quantityProduct);
  });

  it("Should add a product in cart and remove it", () => {
    const indexFirstProduct = 0;
    var continueShopping = false;

    cy.navigateToPage(
      pages.productsPage.name,
      pages.productsPage.pageLoadSelector
    );
    cy.addProductInCart(indexFirstProduct);
    cy.messageProductAddedToCart(continueShopping);
    cy.verifyItemsInCart();
    cy.removeItemInCartPage();
    cy.verifyIfTheCartIsEmpty();
  });
});
