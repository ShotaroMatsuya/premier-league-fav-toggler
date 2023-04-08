import { checkURL } from '../../support/utils.js';

const testDevices = ['macbook-15', 'ipad-2', 'iphone-x'];

beforeEach(() => {
  cy.playersStatsRequest();
});

describe('Favoritesページにアクセス(favoriteなし)', () => {
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
      cy.visit('/favorites');
      cy.compareSnapshot(`Favoritesページ on ${screen}`, 0.05);
    });
  });
});

describe('Favoritesページにアクセス(favoriteあり)', () => {
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
      cy.visit('/');
      cy.get(
        ':nth-child(1) > .player-item > .info > .detail > .button-outline'
      ).click();
      if (screen === 'small') {
        cy.get('.DrawerToggle').click();
        cy.get('.SideDrawer > nav > ul > :nth-child(2) > a').click();
      } else {
        cy.get('.main-header > nav > ul > :nth-child(2) > a').click();
      }
      checkURL('/favorites');
      cy.compareSnapshot(`Favoritesページ 全体 on ${screen}`, 0.05);
      // 攻撃スタッツ
      cy.get('.player-stats > :nth-child(3)').click();
      cy.get('.Modal').compareSnapshot(
        `Favoritesページ 攻撃スタッツ on ${screen}`,
        0.05
      );
      // 守備スタッツ
      cy.get('.Backdrop').click({ force: true });
      cy.get('.player-stats > :nth-child(4)').click();
      cy.get('.Modal').compareSnapshot(
        `Favoritesページ 守備スタッツ on ${screen}`,
        0.05
      );
    });
  });
});
