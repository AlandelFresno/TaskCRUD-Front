/// <reference types="cypress" />

const baseUrl = 'http://localhost:3001';

context('Test homepage Title', () => {
  beforeEach(() => {
    cy.visit(`${baseUrl}/`);
  });

  it('should find "Welcome" title', () => {
    cy.get('h2').contains('Welcome');
  });
});
