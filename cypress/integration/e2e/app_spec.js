/* eslint-disable no-undef */
describe('Nav links render correctly', () => {
    it('shop link', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.shop-link')
    })

    it('cart link', () => {
        cy.visit('http://localhost:3000')
        cy.get('.cart-link')
    })
})

describe('Nav links navigate correctly', () => {
    it('shop link', () => {
        cy.visit('http://localhost:3000/cart')
        cy.get('.shop-link').click();
        cy.url().should('include', '/')
    })

    it('cart link', () => {
        cy.visit('http://localhost:3000')
        cy.get('.cart-link').click();
        cy.url().should('include', '/cart')
    })
})

describe('Adds to cart correctly', () => {
    it('Decrements qty value', () => {
        cy.visit('http://localhost:3000')
        cy.contains('9').should('not.exist');
        cy.get('button').first().click();
        cy.contains('9');
    })

    it('Increments cart value by 1', () => {
        cy.visit('http://localhost:3000')
        cy.get('button').first().click();
        cy.get('.badge').should('include.text', '1');
    })

    it('Increments cart value by 2', () => {
        cy.visit('http://localhost:3000')
        cy.get('button').first().click();
        cy.get('button').first().click();
        cy.get('.badge').should('include.text', '2');
    })

    it('Renders the cart contents', () => {
        cy.visit('http://localhost:3000')
        cy.get('button').first().click();
        cy.get('.cart-link').click();
        cy.contains('Jungle Art Print Unframed');
        cy.contains('Jungle Art Print Unframed A4');    
    })
});

describe('Removes from cart correctly', () => {

    it('Removes an item from the cart', () => {
        cy.visit('http://localhost:3000');
        cy.get('button').first().click();
        cy.get('.badge').should('include.text', '1');
        cy.get('.cart-link').click();
        cy.contains('Jungle Art Print Unframed');
        cy.get('.margin-right').click();
        cy.contains('Jungle Art Print Unframed').should('not.exist');
    });

    it('Empties the cart', () => {
        cy.visit('http://localhost:3000');
        cy.get('button').first().click();
        cy.get('.badge').should('include.text', '1');
        cy.get('.cart-link').click();
        cy.get('.empty-cart-button').click();
        cy.get('.badge').should(('not.exist'));
    })

});