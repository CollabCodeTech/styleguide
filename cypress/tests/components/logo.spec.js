describe('The Home Page', function () {
  beforeEach(function () {
    console.log('Antes do teste!!!')
  })

  it('successfully loads', function () {
    cy.visit('/components/logo')
  })
})