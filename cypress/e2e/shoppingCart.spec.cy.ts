describe('Shopping articles in the SWAG Labs store', () => {

  

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.loginForm(Cypress.env('valid_user').username, Cypress.env('valid_user').password);
  });

  it('should purchase items from the store', () => {
    cy.addProductsToCart();
    cy.validateProductsInCart();
    cy.checkoutForm('Eduardo', 'Videgaray', '89000');
    
    cy.get('#finish').click();
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
  });
});