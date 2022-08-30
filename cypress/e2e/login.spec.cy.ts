/// <reference types="cypress" />

const baseUrl = 'http://localhost:3001';
context('Test Login', () => {
  beforeEach(() => {
    cy.visit(`${baseUrl}/login`);
    sessionStorage.removeItem('token');
  });

  it('should have inputs with attributes ', () => {
    cy.get('input[name=email]')
      .invoke('attr', 'placeholder')
      .should('contain', 'Email');
    cy.get('input[name=email]')
      .invoke('attr', 'type')
      .should('contain', 'text');
    cy.get('input[name=password]')
      .invoke('attr', 'type')
      .should('contain', 'password');
    cy.get('input[name=password]')
      .invoke('attr', 'placeholder')
      .should('contain', 'Password');
  });

  it('should have a submit button', () => {
    cy.get('button[id=loginButton]')
      .invoke('attr', 'type')
      .should('contain', 'submit');
  });

  it('should have error message', () => {
    cy.get('button[id=loginButton]').click();
    cy.get('.FormComponent_form__CH5OT p:first').contains('Email is required');
    cy.get('.FormComponent_form__CH5OT p:last').contains(
      'Password is required'
    );
  });

  it('should log in', () => {
    cy.get('input[name=email]').type('example@example.com');
    cy.get('input[name=password]').type('123123');
    cy.get('button[id=loginButton]').click();
    cy.wait(1000);
    cy.get('h2[id=swal2-title]').contains('Logged succesfully');
  });
});

export {};
