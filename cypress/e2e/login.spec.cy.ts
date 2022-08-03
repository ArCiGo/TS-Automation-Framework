describe('SWAG Labs login', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('should login to the application using valid credentials', () => {
    cy.loginForm(Cypress.env('valid_user').username, Cypress.env('valid_user').password);
    cy.get('.title').should('have.text', 'Products');
  });

  it('should not login to the application because the user is blocked', () => {
    cy.loginForm(Cypress.env('locked_user').username, Cypress.env('valid_user').password);
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
  });

  it('should not login to the application if the user enters wrong credentials', () => {
    cy.loginForm(Cypress.env('invalid_user').username, Cypress.env('invalid_user').password);
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('should not login to the application if the user doesn\'t enter a username', () => {
    cy.loginForm('', Cypress.env('valid_user').password);
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required');
  });

  it('should not login to the application if the user doesn\'t enter a password', () => {
    cy.loginForm(Cypress.env('valid_user').username, '');
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required');
  });
});