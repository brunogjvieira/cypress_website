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
  it("Should Send a Subscription on the Cart Page", () => {
    cy.navigateToPage(pages.cartPage.name, pages.cartPage.pageLoadSelector);
    cy.subscribeToNewsletterOnCartPage(randomPerson.email);
  });

  it("Should Add Two Products to the Cart", () => {
    const indexFirstProduct = 0;
    var continueShopping = true;
    const indexSecondProduct = 1;

    cy.navigateToPage(
      pages.productsPage.name,
      pages.productsPage.pageLoadSelector
    );
    cy.addProductToCart(indexFirstProduct);
    cy.verifyProductAddedToCartMessage(continueShopping);
    cy.addProductToCart(indexSecondProduct);
    cy.verifyProductAddedToCartMessage((continueShopping = false));
    cy.verifyItemsInCart();
  });

  it("Should Verify Product Quantity in the Cart", () => {
    const indexProduct = 0;
    const quantityProduct = 4;
    const continueShopping = false;

    cy.navigateToPage(
      pages.productsPage.name,
      pages.productsPage.pageLoadSelector
    );
    cy.viewProductByIndex(indexProduct);
    cy.setProductQuantity(quantityProduct);
    cy.addToCartOnDetailProductPage();
    cy.verifyProductAddedToCartMessage(continueShopping);
    cy.verifyProductQuantityInCart(quantityProduct);
  });

  it("Should Add a Product to the Cart and Remove It", () => {
    const indexFirstProduct = 0;
    var continueShopping = false;

    cy.navigateToPage(
      pages.productsPage.name,
      pages.productsPage.pageLoadSelector
    );
    cy.addProductToCart(indexFirstProduct);
    cy.verifyProductAddedToCartMessage(continueShopping);
    cy.verifyItemsInCart();
    cy.removeItemFromCart();
    cy.verifyCartIsEmpty();
  });
});
