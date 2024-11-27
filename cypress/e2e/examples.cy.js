describe("Varisous examples", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });
  it("intercepts,", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json",
    });
    cy.getDataTest("post-button").click();
  });
});
