beforeEach(() => {
  cy.playersStatsRequest();
});
describe('お気に入り選手を登録', () => {
  it('お気に入り選手がないときは表示アイテムなし', () => {
    cy.viewport('macbook-16');
    cy.visit('/');
    cy.get('.main-header > nav > ul > :nth-child(2) > a').click();
    cy.get('.placeholder')
      .should('be.visible')
      .and('contain', 'Got no favorites yet!');
  });
  it('お気に入り選手を登録したらアイテムが表示', () => {
    cy.viewport('macbook-16');
    cy.visit('/');
    cy.get(
      ':nth-child(1) > .player-item > .info > .detail > .button-outline'
    ).click();
    cy.get('.main-header > nav > ul > :nth-child(2) > a').click();
    cy.get('.card').should('be.visible');
    cy.get('.card').should('have.length', 1);
  });
  it('お気に入り選手を登録解除して戻るとアイテムが非表示', () => {
    cy.viewport('macbook-16');
    cy.visit('/');
    cy.get(
      ':nth-child(1) > .player-item > .info > .detail > .button-outline'
    ).click();
    cy.get('.main-header > nav > ul > :nth-child(2) > a').click();
    cy.get('.card').should('be.visible');
    cy.get('.card').should('have.length', 1);
    cy.get('.main-header > nav > ul > :nth-child(1) > a').click();
    cy.get(':nth-child(1) > .player-item > .info > .detail > button').should(
      'contain',
      'Un-Favorite'
    );
    cy.get(':nth-child(1) > .player-item > .info > .detail > button').click();
    cy.get(':nth-child(1) > .player-item > .info > .detail > button').should(
      'contain',
      'Favorite'
    );
    cy.get('.main-header > nav > ul > :nth-child(2) > a').click();
    cy.get('.placeholder')
      .should('be.visible')
      .and('contain', 'Got no favorites yet!');
  });
});

describe('通信失敗時', () => {
  it('エラーモーダルが表示される', () => {
    cy.intercept(
      {
        method: 'GET',
        url: `https://api-football-beta.p.rapidapi.com/players*`
      },
      {
        statusCode: 500
      }
    );
    cy.viewport('macbook-16');
    cy.visit('/');
    cy.get(
      ':nth-child(1) > .player-item > .info > .detail > .button-outline'
    ).click();
    cy.get('.main-header > nav > ul > :nth-child(2) > a').click();
    cy.get('.Modal').should(
      'contain',
      '一日のリクエストの上限(100)に達しました。'
    );
  });
});
