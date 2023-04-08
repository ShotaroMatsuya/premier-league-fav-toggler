const testDevices = ['macbook-15', 'ipad-2', 'iphone-x'];

beforeEach(() => {
  cy.scheduleRequest();
});

describe('Scheduleページにアクセス', () => {
  testDevices.forEach((device) => {
    const screen =
      device === 'macbook-15'
        ? 'large'
        : device === 'ipad-2'
        ? 'medium'
        : 'small';
    it('全画面のスナップショット', () => {
      cy.clock(new Date(2022, 8, 27).getTime(), ['Date']);
      cy.viewport(device);
      cy.visit('/schedule');
      cy.wait('@fetchedScheduleList')
        .its('response.statusCode')
        .should('eq', 200);
      cy.get('.Loader').should('not.exist');
      cy.get('tbody img')
        .should('have.length', 34)
        .each((el) => {
          cy.get(el)
            .should('have.prop', 'naturalWidth')
            .and('be.greaterThan', 0);
        });
      cy.get('.card').compareSnapshot(`Scheduleページ on ${screen}`, 0.05);
    });
  });
});

describe('ハンバーガーメニュー押下', () => {
  it('ナビゲーションメニューのスナップショット', () => {
    cy.clock(new Date(2022, 8, 27).getTime(), ['Date']);
    cy.viewport('iphone-x');
    cy.visit('/schedule');
    cy.wait('@fetchedScheduleList')
      .its('response.statusCode')
      .should('eq', 200);
    cy.get('.Loader').should('not.exist');
    cy.get('tbody img')
      .should('have.length', 34)
      .each((el) => {
        cy.get(el).should('have.prop', 'naturalWidth').and('be.greaterThan', 0);
      });
    cy.get('.DrawerToggle').click();
    cy.get('.SideDrawer').should('be.visible');
    cy.get('.SideDrawer').compareSnapshot(`サイドメニュー on iphone-x`, 0.05);
  });
});
