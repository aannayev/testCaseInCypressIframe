describe('template spec', () => {

beforeEach(()=>{
  cy.visit('/forms')
})

  // it('passes the header test', () => { // Give this test a more descriptive name
  //   // cy.visit('/fundamentals');
  //   cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals')
  //   // cy.get('[data-test="fundamentals-header"]').contains('Testing Fundamentals');
  // });

  // it('toggles visibility of the accordion content', () => { // Provide a unique name for this test
  //   // cy.visit('/fundamentals');
  //   cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible');
  //   cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
  //   cy.contains(/Your tests will exist in a describe block/i).should('be.visible');
  //   cy.get('[data-test="accordion-item-1"] div[role="button"]' ).click();
  //   cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible');
  // });
});
