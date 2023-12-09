beforeEach(() => {
  cy.rankingRequest();
});

describe('エラーモーダルの表示', () => {
  it('モーダル閉じたらローディングスピナーが表示される', () => {
    cy.intercept(
      {
        method: 'GET',
        url: `https://cebd9wfite.execute-api.ap-northeast-1.amazonaws.com/dev/proxy/competitions/PL/standings?standingType=TOTAL`
      },
      {
        statusCode: 500
      }
    );
    cy.clock(new Date(2022, 8, 27).getTime(), ['Date']);
    cy.viewport('macbook-16');
    cy.visit('/ranking');
    // モーダル表示
    cy.get('.Backdrop').click({ force: true });
    cy.get('.Loader').should('be.visible');
  });
  it('apiコールに失敗したらモーダルでる', () => {
    cy.intercept(
      {
        method: 'GET',
        url: `https://cebd9wfite.execute-api.ap-northeast-1.amazonaws.com/dev/proxy/competitions/PL/standings?standingType=TOTAL`
      },
      {
        statusCode: 500
      }
    );
    cy.clock(new Date(2022, 8, 27).getTime(), ['Date']);
    cy.viewport('macbook-16');
    cy.visit('/ranking');
    // モーダル表示
    cy.get('.Modal').should('be.visible');
    cy.get('.Modal').should('contain', 'Request failed. Please try again later.');
  });
  it('apiコールに成功したらモーダルでない', () => {
    cy.clock(new Date(2022, 8, 27).getTime(), ['Date']);
    cy.viewport('macbook-16');
    cy.visit('/ranking');
    // モーダル非表示
    cy.get('.Modal').should('not.exist');
  });
});
