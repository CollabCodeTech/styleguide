describe('MainLogo component', function () {
  it('type attribute whithout value or with horizontal value', function () {
    cy.visit('/components/main-logo')
    cy.get('#horizontal').find('.main-logo.horizontal').find('#title').contains('Logo da CollabCode')
  })

  it('type attribute with horizontalLight value', function () {
    cy.visit('/components/main-logo')
    cy.get('#horizontalLight').find('.main-logo.horizontal-light').find('#title').contains('Logo da CollabCode')
  })

  it('type attribute with ball value', function () {
    cy.visit('/components/main-logo')
    cy.get('#ball').find('.main-logo.ball').find('#title').contains('Logo da CollabCode')
  })

  it('type attribute with ballText value', function () {
    cy.visit('/components/main-logo')
    cy.get('#ballText').find('.main-logo.ball-text').find('#title').contains('Logo da CollabCode')
  })
})