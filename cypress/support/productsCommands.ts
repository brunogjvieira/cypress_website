Cypress.Commands.add("enterToProductsPage", () => {
  cy.visit("/");
  cy.contains(" Products").click();
  cy.get('[class="features_items"]')
    .should("be.visible")
    .find("h2")
    .contains("All Products");
});

Cypress.Commands.add("viewProductByIndex", (indexProduct) => {
  cy.get('[class="features_items"]')
    .find('[class="product-image-wrapper"]')
    .eq(indexProduct)
    .contains("View Product")
    .click();
});
Cypress.Commands.add("selectProductBySearch", (nameProduct) => {
  cy.get("#search_product").type(nameProduct).should("have.value", nameProduct);
  cy.get("#submit_search").click();
  cy.contains("Searched Products").should("be.visible");
});

Cypress.Commands.add("verifyQuantityProductsInThePage", (quantityProduct) => {
  cy.get('[class="product-image-wrapper"]').should(
    "have.length",
    quantityProduct
  );
});

Cypress.Commands.add("sendSubscriptionInProductsPage", (email) => {
  cy.get("#susbscribe_email")
    .scrollIntoView()
    .type(email)
    .should("have.value", email);
  cy.get("#subscribe").click();
  cy.get(".alert-success").should("be.visible");
});

Cypress.Commands.add("addProductInCart", (index) => {
  cy.get('[class="single-products"]').eq(index).contains("Add to cart").click();
});

Cypress.Commands.add("messageProductAddedToCart", (boolean) => {
  const continueShopping = boolean;
  cy.get('[id="cartModal"]').contains("Added!").should("be.visible");
  if (continueShopping) {
    cy.contains("Continue Shopping").should("be.visible").click();
  } else {
    cy.contains("View Cart").should("be.visible").click();
    cy.url().should("include", "view_cart");
  }
});

Cypress.Commands.add(
  "selectCategoryProduct",
  (categoryProduct, subCategoryProduct) => {
    cy.get('[class="panel-group category-products"]')
      .should("be.visible")
      .contains(categoryProduct)
      .click();
    cy.get('[class="panel-group category-products"]')
      .contains(subCategoryProduct)
      .click();
    cy.get('[class="title text-center"]')
      .should("contain.text", categoryProduct)
      .and("contain.text", subCategoryProduct);
  }
);

Cypress.Commands.add("selectBrandProduct", (brandProduct) => {
  cy.get('[class="brands_products"]')
    .should("be.visible")
    .contains(brandProduct)
    .click();
  cy.get('[class="title text-center"]').should("contain.text", brandProduct);
});

Cypress.Commands.add("enterToHomePage", () => {
  cy.visit("/");
});

Cypress.Commands.add("scrollToRecommendedProducts", () => {
  cy.get(".recommended_items > .title").scrollIntoView();
});

Cypress.Commands.add("selectRecommendedProduct", () => {
  cy.get('[id="recommended-item-carousel"]')
    .find('[data-product-id="1"]', { timeout: 10000 })
    .should("be.visible")
    .contains("Add to cart")
    .eq(0)
    .click();
});
