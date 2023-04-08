export const checkURL = (url) => cy.url().should('contain', url);
