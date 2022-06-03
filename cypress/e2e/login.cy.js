/// <reference types="Cypress" />
describe('login test', () => {
    it('visit gallery app and click login button', () => {
        cy.visit('/')
        cy.url().should('contains', 'gallery-app')
        //cy.get('a[href="/login"]').click();
        cy.get('.nav-link').eq(1).click();
        cy.url().should('contains', '/login')
    })
    xit('login with valid credentials', () => {
        cy.get('#email').type("mejl1@mejl.mejl")
        cy.get('#password').type("cypress1")
        cy.get('button').click();
        cy.url().should('not.contains','/login')
    })

    xit('login with invalid credentials', () => {
        cy.get('#email').type("mejl1.mejl.mejl")
        cy.get('#password').type("cypress1")
        cy.get('button').click();
        cy.url().should('not.contains','/login')
    })

    xit('login without credentials', () => {
        cy.get('button').click();
        cy.url().should('include','/login')
    })

    it('login without mail', () => {
        cy.get('#password').type('cypress1')
        cy.get('button').click();
    })

    xit('logout', () => {
        cy.get('.nav-link').should('have.length', 4);
        cy.get('.nav-link').eq(3).click();
        cy.url().should('contains','/login')
    })
})
