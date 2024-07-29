describe("Products", () => {
  let pages: any;
  let users: any;
  before(() => {
    cy.fixture("pages.json").then((loadedPages) => {
      pages = loadedPages;
    });
    cy.fixture("users.json").then((loadedUsers) => {
      users = loadedUsers;
    });
  });
  it("Should verify all products and product detail page", () => {
    const indexProduct = 0;

    cy.navigateToPage(
      pages.productsPage.name,
      pages.productsPage.pageLoadSelector
    );
    cy.viewProductByIndex(indexProduct);
    cy.verifyDetailProduct();
  });

  it("Should search a product", () => {
    const nameProduct = "Men tshirt";

    cy.navigateToPage(
      pages.productsPage.name,
      pages.productsPage.pageLoadSelector
    );
    cy.selectProductBySearch(nameProduct);
    cy.verifyQuantityProductsInThePage(1);
  });

  it("Should send a subscription in products page", () => {
    cy.navigateToPage(
      pages.productsPage.name,
      pages.productsPage.pageLoadSelector
    );
    cy.sendSubscriptionInProductsPage(users.bruno.email);
  });

  it("Should view category products", () => {
    const categoryProduct = "Women";
    const subCategoryProduct = "Dress";
    const otherCategoryProduct = "Men";
    const otherSubCategoryProduct = "Tshirts";

    cy.navigateToPage(
      pages.productsPage.name,
      pages.productsPage.pageLoadSelector
    );
    cy.selectCategoryProduct(categoryProduct, subCategoryProduct);
    cy.verifyQuantityProductsInThePage(3);
    cy.selectCategoryProduct(otherCategoryProduct, otherSubCategoryProduct);
    cy.verifyQuantityProductsInThePage(6);
  });

  it("Should view cart brand products", () => {
    const brandProduct = "Polo";
    const otherBrandProduct = "Madame";

    cy.navigateToPage(
      pages.productsPage.name,
      pages.productsPage.pageLoadSelector
    );
    cy.selectBrandProduct(brandProduct);
    cy.verifyQuantityProductsInThePage(6);
    cy.selectBrandProduct(otherBrandProduct);
    cy.verifyQuantityProductsInThePage(5);
  });

  it("Should search a product and add cart", () => {
    const nameProduct = "tshirt";
    const quantityProductFiltered = 6;
    const indexFirstProductToCart = 0;
    const indexSecondProductToCart = 2;
    var continueShopping = true;

    cy.navigateToPage(
      pages.productsPage.name,
      pages.productsPage.pageLoadSelector
    );
    cy.selectProductBySearch(nameProduct);
    cy.verifyQuantityProductsInThePage(quantityProductFiltered);
    cy.addProductInCart(indexFirstProductToCart);
    cy.messageProductAddedToCart(continueShopping);
    cy.addProductInCart(indexSecondProductToCart);
    cy.messageProductAddedToCart((continueShopping = false));
    cy.verifyItemsInCart();
    cy.navigateToPage(pages.loginPage.name, pages.loginPage.pageLoadSelector);
    cy.loginAccountFillForm(users.bruno.email, users.bruno.password);
    cy.navigateToPage(pages.cartPage.name, pages.cartPage.pageLoadSelector);
    cy.verifyItemsInCart();
  });

  it("Should add review on product", () => {
    const indexProduct = 0;
    const username = "TesteReview";
    const email = "test@gmail.com";
    const message = "Lorem ipsum";

    cy.navigateToPage(
      pages.productsPage.name,
      pages.productsPage.pageLoadSelector
    );
    cy.viewProductByIndex(indexProduct);
    cy.sendMessageReviewOnProduct(username, email, message);
    cy.confirmMessageReview();
  });

  it("Should add to cart from recommended products", () => {
    const continueShopping = false;

    cy.navigateToPage(pages.homePage.name, pages.homePage.pageLoadSelector);
    cy.scrollToRecommendedProducts();
    cy.selectRecommendedProduct();
    cy.messageProductAddedToCart(continueShopping);
    cy.verifyItemsInCart();
  });

  it("Should verify scroll up using 'Arrow' button and scroll down functionality ", () => {
    cy.navigateToPage(pages.homePage.name, pages.homePage.pageLoadSelector);
    cy.sendSubscriptionInProductsPage(users.bruno.email);
    cy.scrollUpUsingArrow();
  });

  it("Should verify scroll up without 'Arrow' button and scroll down functionality ", () => {
    cy.navigateToPage(pages.homePage.name, pages.homePage.pageLoadSelector);
    cy.sendSubscriptionInProductsPage(users.bruno.email);
    cy.scrollUpWithoutArrow();
  });
});
