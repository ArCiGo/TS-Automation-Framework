describe('Shopping articles in the SWAG Labs store', () => {

  let items: object;

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.loginForm(Cypress.env('valid_user').username, Cypress.env('valid_user').password);

    cy.fixture("products").then((product) => {
      items = product;
    });
  });

  it('should purchase items from the store', () => {
    cy.get('.title').should('have.text', 'Products'); // Checking if I'm in the Products page

    // adding the items to the cart
    cy.addProductsToCart();
    cy.get('#shopping_cart_container').click();

    // checking the products I added
    cy.get('div[class="inventory_item_name"]')
      .then(($item) => {
        return (Cypress.$.makeArray($item)).map((el) => el.innerText)
      })
      .should('deep.equal', items);

    cy.get('#checkout').click();
    cy.checkoutForm('Eduardo', 'Videgaray', '89000');
    cy.get('#finish').click();
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
  });
});