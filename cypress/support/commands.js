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
const compareSnapshotCommand = require('cypress-visual-regression/dist/command');

compareSnapshotCommand();

Cypress.Commands.add('rankingRequest', () => {
  cy.intercept(
    {
      method: 'GET',
      url: `https://cebd9wfite.execute-api.ap-northeast-1.amazonaws.com/dev/proxy/competitions/PL/standings?standingType=TOTAL`
    },
    {
      statusCode: 200,
      fixture: 'rankingList'
    }
  ).as('fetchedRankingList');
});

Cypress.Commands.add('scheduleRequest', () => {
  cy.intercept(
    {
      method: 'GET',
      url: `https://cebd9wfite.execute-api.ap-northeast-1.amazonaws.com/dev/proxy/competitions/PL/matches?status=SCHEDULED&*`
    },
    {
      statusCode: 200,
      fixture: 'scheduleList'
    }
  ).as('fetchedScheduleList');
});
