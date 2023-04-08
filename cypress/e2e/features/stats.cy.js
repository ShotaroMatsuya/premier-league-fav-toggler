beforeEach(() => {
  cy.playersStatsRequest();
  cy.viewport('macbook-16');
  cy.visit('/');
  cy.get(
    ':nth-child(1) > .player-item > .info > .detail > .button-outline'
  ).click();
});

describe('モーダルの動作', () => {
  it('攻撃用statsが表示される', () => {
    cy.get('.main-header > nav > ul > :nth-child(2) > a').click();
    cy.get('.player-stats > :nth-child(3)').click();
    cy.get('thead > tr > th').should('have.length', 5);
  });
  it('守備用statsが表示される', () => {
    cy.get('.main-header > nav > ul > :nth-child(2) > a').click();
    cy.get('.player-stats > :nth-child(4)').click();
    cy.get('thead > tr > th').should('have.length', 4);
  });
  it('バックドロップでモーダルが消える', () => {
    cy.get('.main-header > nav > ul > :nth-child(2) > a').click();
    cy.get('.player-stats > :nth-child(4)').click();
    cy.get('thead > tr > th').should('have.length', 4);
    cy.get('.Backdrop').click({ force: true });
    cy.get('.card').should('be.visible');
  });
});
