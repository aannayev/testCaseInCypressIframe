describe("forms tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("Test subsribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form").find("input").as('subscribe-input')

    cy.get('@subscribe-input').type("hell@gmail");
    cy.contains(/Invalid email: /i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Invalid email: /i).should("exist");
    cy.wait(3000);
    cy.contains(/Invalid email: /i).should("not.exist");
  });
});
