describe("test", () => {
  it("desktop search", () => {
    cy.visit("");
    cy.url().should("include", "/new/url");
  });
});
