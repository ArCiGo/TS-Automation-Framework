describe('SWAG Labs logout', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.loginForm(Cypress.env('valid_user').username, Cypress.env('valid_user').password);
    });

    it('should logout to the application', () => {
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
        cy.get('.login_logo').should('be.visible');
    });

    it('should throw an error', () => {
        cy.get('#r-menu-btn').click();
        cy.get('#lk').click();
        cy.get('.login_logo').should('be.visible');
    });
});