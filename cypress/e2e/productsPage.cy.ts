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
    cy.verifyProductDetails();
  });

  it("Should search for a product", () => {
    const nameProduct = "Men tshirt";

    cy.navigateToPage(
      pages.productsPage.name,
      pages.productsPage.pageLoadSelector
    );
    cy.searchProductByName(nameProduct);
    cy.verifyProductCountOnPage(1);
  });

  it("Should send a subscription on the products page", () => {
    cy.navigateToPage(
      pages.productsPage.name,
      pages.productsPage.pageLoadSelector
    );
    cy.sendSubscriptionOnProductsPage(users.bruno.email);
  });

  it("Should view products by category", () => {
    const categoryProduct = "Women";
    const subCategoryProduct = "Dress";
    const otherCategoryProduct = "Men";
    const otherSubCategoryProduct = "Tshirts";

    cy.navigateToPage(
      pages.productsPage.name,
      pages.productsPage.pageLoadSelector
    );
    cy.selectProductCategory(categoryProduct, subCategoryProduct);
    cy.verifyProductCountOnPage(3);
    cy.selectProductCategory(otherCategoryProduct, otherSubCategoryProduct);
    cy.verifyProductCountOnPage(6);
  });

  it("Should view products by brand", () => {
    const brandProduct = "Polo";
    const otherBrandProduct = "Madame";

    cy.navigateToPage(
      pages.productsPage.name,
      pages.productsPage.pageLoadSelector
    );
    cy.selectProductBrand(brandProduct);
    cy.verifyProductCountOnPage(6);
    cy.selectProductBrand(otherBrandProduct);
    cy.verifyProductCountOnPage(5);
  });

  it("Should search for a product and add to cart", () => {
    const nameProduct = "tshirt";
    const quantityProductFiltered = 6;
    const indexFirstProductToCart = 0;
    const indexSecondProductToCart = 2;
    var continueShopping = true;

    cy.navigateToPage(
      pages.productsPage.name,
      pages.productsPage.pageLoadSelector
    );
    cy.searchProductByName(nameProduct);
    cy.verifyProductCountOnPage(quantityProductFiltered);
    cy.addProductToCart(indexFirstProductToCart);
    cy.verifyProductAddedToCartMessage(continueShopping);
    cy.addProductToCart(indexSecondProductToCart);
    cy.verifyProductAddedToCartMessage((continueShopping = false));
    cy.verifyItemsInCart();
    cy.navigateToPage(pages.loginPage.name, pages.loginPage.pageLoadSelector);
    cy.fillLoginForm(users.bruno.email, users.bruno.password);
    cy.navigateToPage(pages.cartPage.name, pages.cartPage.pageLoadSelector);
    cy.verifyItemsInCart();
  });

  it("Should add a review to a product", () => {
    const indexProduct = 0;
    const username = "TesteReview";
    const email = "test@gmail.com";
    const message = "Lorem ipsum";

    cy.navigateToPage(
      pages.productsPage.name,
      pages.productsPage.pageLoadSelector
    );
    cy.viewProductByIndex(indexProduct);
    cy.submitProductReview(username, email, message);
    cy.verifyReviewConfirmation();
  });

  it("Should add to cart from recommended products", () => {
    const continueShopping = false;

    cy.navigateToPage(pages.homePage.name, pages.homePage.pageLoadSelector);
    cy.scrollToRecommendedProducts();
    cy.addRecommendedProductToCart();
    cy.verifyProductAddedToCartMessage(continueShopping);
    cy.verifyItemsInCart();
  });

  it("Should verify scroll up using 'Arrow' button and scroll down functionality", () => {
    cy.navigateToPage(pages.homePage.name, pages.homePage.pageLoadSelector);
    cy.sendSubscriptionOnProductsPage(users.bruno.email);
    cy.scrollUpUsingArrow();
  });

  it("Should verify scroll up without 'Arrow' button and scroll down functionality", () => {
    cy.navigateToPage(pages.homePage.name, pages.homePage.pageLoadSelector);
    cy.sendSubscriptionOnProductsPage(users.bruno.email);
    cy.scrollUpWithoutArrow();
  });
});
