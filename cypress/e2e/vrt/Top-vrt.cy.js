const testDevices = ['macbook-15', 'ipad-2', 'iphone-x'];

cy.on('uncaught:exception', (error) => {
  if (/is not a function/gi.test(error.message)) {
    return false;
  }
  // 他のエラーは無視しない
  return true;
});

describe('Topページにアクセス', () => {
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
      cy.get('.players-list').compareSnapshot(`Topページ on ${screen}`, 0.05);
    });
  });
});
