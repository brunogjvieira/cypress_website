Cypress.Commands.add("viewProductByIndex", (indexProduct) => {
  cy.get('[class="features_items"]')
    .find('[class="product-image-wrapper"]')
    .eq(indexProduct)
    .contains("View Product")
    .click();
});
Cypress.Commands.add("searchProductByName", (nameProduct) => {
  cy.get("#search_product").type(nameProduct).should("have.value", nameProduct);
  cy.get("#submit_search").click();
  cy.contains("Searched Products").should("be.visible");
});

Cypress.Commands.add("verifyProductCountOnPage", (quantityProduct) => {
  cy.get('[class="product-image-wrapper"]').should(
    "have.length",
    quantityProduct
  );
});

Cypress.Commands.add("sendSubscriptionOnProductsPage", (email) => {
  cy.get("#susbscribe_email")
    .scrollIntoView()
    .type(email)
    .should("have.value", email);
  cy.get("#subscribe").click();
  cy.get(".alert-success").should("be.visible");
});

Cypress.Commands.add("addProductToCart", (index) => {
  cy.get('[class="single-products"]').eq(index).contains("Add to cart").click();
});

Cypress.Commands.add("verifyProductAddedToCartMessage", (boolean) => {
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
  "selectProductCategory",
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

Cypress.Commands.add("selectProductBrand", (brandProduct) => {
  cy.get('[class="brands_products"]')
    .should("be.visible")
    .contains(brandProduct)
    .click();
  cy.get('[class="title text-center"]').should("contain.text", brandProduct);
});

Cypress.Commands.add("scrollToRecommendedProducts", () => {
  cy.get(".recommended_items > .title").scrollIntoView();
});

Cypress.Commands.add("addRecommendedProductToCart", () => {
  cy.get('[id="recommended-item-carousel"]')
    .find('[data-product-id="1"]', { timeout: 10000 })
    .should("be.visible")
    .contains("Add to cart")
    .eq(0)
    .click();
});
