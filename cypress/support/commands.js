// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginForm', (username, password) => {
    if(username.length !==  0) {
        cy.get('#user-name').clear().type(username);
    } else {
        cy.get('#user-name').clear().type('{backspace}');
    }

    if(password.length !== 0) {
        cy.get('#password').clear().type(password);
    } else {
        cy.get('#password').clear().type('{backspace}');
    }
    
    cy.get('#login-button').click();
});

Cypress.Commands.add('checkoutForm', (firstName, lastName, postalCode) => {
    if(firstName.length !== 0) {
        cy.get('#first-name').clear().type(firstName);
    } else {
        cy.get('#first-name').clear().type('{backspace}');
    }

    if(lastName.length !== 0) {
        cy.get('#last-name').clear().type(lastName);
    } else {
        cy.get('#last-name').clear().type('{backspace}');
    }

    if(postalCode.length !== 0) {
        cy.get('#postal-code').clear().type(postalCode);
    } else {
        cy.get('#postal-code').clear().type('{backspace}');
    }

    cy.get('#continue').click();
});

Cypress.Commands.add('addProductsToCart', () => {
    cy.get('.title').should('have.text', 'Products'); // Checking if I'm in the Products page

    /*products.forEach((item) => {
        cy.contains('.inventory_item', item)
        .find('button[class*="btn btn_primary"]')
        .click();
    });*/

    cy.fixture("products")
        .then((products) => {
            products.forEach(item => {
                cy.contains('.inventory_item', item)
                .find('button[class*="btn btn_primary"]')
                .click();     
            });
        });

    cy.get('#shopping_cart_container').click();
});

Cypress.Commands.add('validateProductsInCart', () => {
    cy.fixture("products").then((product) => {
        cy.get('div[class="inventory_item_name"]').then(($item) => {
            return (Cypress.$.makeArray($item)).map((el) => el.innerText)
        }).should('deep.equal', product);
    });

    cy.get('#checkout').click();
});