describe("Input Form", () => {
  beforeEach(() => {
    //will visit the website before every test case runs
    cy.visit("/");
  });
  it("focuses input on load", () => {
    //cy.visit("http://localhost:3030");
    cy.focused().should("have.class", "new-todo");
  });

  it("accepts input", () => {
    const typedText = "Buy Milk";
    //cy.visit("http://localhost:3030");
    cy.get(".new-todo")
      .type(typedText)
      //.type("milk")
      .should("have.value", typedText);
  });
});
