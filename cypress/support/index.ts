declare namespace Cypress {
    interface Chainable {
        loginForm: (username: string, password: string) => void;
        checkoutForm: (firstName: string, lastName: string, postalCode: string) => void;
        addProductsToCart: () => void;
        validateProductsInCart: () => void;
    }
}