describe('SearchField component', function () {
  before(function () {
    cy.visit('/components/search-field');
  })

  it('verify type is search', function () {
    cy.get('.search-field[type="search"]')
  })

  it('verify placeholder contains Busca', function () {
    cy.get('.search-field').should('have.attr', 'placeholder', 'Busca');
  })

  it('verify search icon', function () {
    cy.get('.wrapper-search-field').find('svg');
  })
})