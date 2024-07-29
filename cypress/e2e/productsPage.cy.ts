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

  it("Should view category products", () => {
    const categoryProduct = "Women";
    const subCategoryProduct = "Dress";
    const otherCategoryProduct = "Men";
    const otherSubCategoryProduct = "Tshirts";

    cy.enterToProductsPage();
    cy.selectCategoryProduct(categoryProduct, subCategoryProduct);
    cy.verifyQuantityProductsInThePage(3);
    cy.selectCategoryProduct(otherCategoryProduct, otherSubCategoryProduct);
    cy.verifyQuantityProductsInThePage(6);
  });

  it("Should view cart brand products", () => {
    const brandProduct = "Polo";
    const otherBrandProduct = "Madame";

    cy.enterToProductsPage();
    cy.selectBrandProduct(brandProduct);
    cy.verifyQuantityProductsInThePage(6);
    cy.selectBrandProduct(otherBrandProduct);
    cy.verifyQuantityProductsInThePage(5);
  });

  it.only("Should search a product and add cart", () => {
    const nameProduct = "tshirt";
    const quantityProductFiltered = 6;
    const indexFirstProductToCart = 0;
    const indexSecondProductToCart = 2;
    var continueShopping = true;
    const emailUser = "brunoqa1@gmail.com";
    const passwordUser = "brunoqa";
    const cartPage = ' Cart'
    const verifyCartPage = '#cart_items'

    cy.enterToProductsPage();
    cy.selectProductBySearch(nameProduct);
    cy.verifyQuantityProductsInThePage(quantityProductFiltered);
    cy.addProductInCart(indexFirstProductToCart);
    cy.messageProductAddedToCart(continueShopping);
    cy.addProductInCart(indexSecondProductToCart);
    cy.messageProductAddedToCart((continueShopping = false));
    cy.verifyItemFromCart();
    cy.enterToLoginPage();
    cy.loginAccountFillForm(emailUser, passwordUser);
    cy.navigateToPage(cartPage, verifyCartPage);
    cy.verifyItemFromCart();
  });

  it("Should add review on product", () => {
    const indexProduct = 0;
    const username = "TesteReview";
    const email = "test@gmail.com";
    const message = "Lorem ipsum";

    cy.enterToProductsPage();
    cy.viewProductByIndex(indexProduct);
    cy.sendMessageReviewOnProduct(username, email, message);
    cy.confirmMessageReview();
  });

  it("Should add to cart from recommended products", () => {
    const continueShopping = false;

    cy.enterToHomePage();
    cy.scrollToRecommendedProducts();
    cy.selectRecommendedProduct();
    cy.messageProductAddedToCart(continueShopping);
    cy.verifyItemFromCart();
  });

  it("Should verify scroll up using 'Arrow' button and scroll down functionality ", () => {
    const email = "brunoqa1@gmail.com";

    cy.enterToHomePage();
    cy.sendSubscriptionInProductsPage(email);
    cy.scrollUpUsingArrow();
  });

  it("Should verify scroll up without 'Arrow' button and scroll down functionality ", () => {
    const email = "brunoqa1@gmail.com";

    cy.enterToHomePage();
    cy.sendSubscriptionInProductsPage(email);
    cy.scrollUpWithoutArrow();
  });
});
