const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I already on Tokopedia homepage', () => {
    cy.visit(Cypress.env('webUrl'));
});

When('I enter the keyword "fiio" on the search bar', () => {
    cy.get('[data-testid="txtHeaderSearchBar"] > ._css-3017qm exxxdg63').type('fiio{enter}')
});

//Then('I should see the search result that contains the word "fiio"', () => {
    
//});