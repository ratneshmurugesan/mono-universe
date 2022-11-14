describe('acme inc', () => {
  it('should  perform interactions', () => {
    cy.visit('/acme')
      .get('[aria-rowindex="2"]')
      .click()
      .get('[data-id="albumId"]')
      .trigger('mouseover')
      .get('[name="header-checkbox"]')
      .click()
  })
})
