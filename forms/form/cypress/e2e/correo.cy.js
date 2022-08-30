describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    
  })
  it('activates the button after filled in', () => {
    cy.get('#nombre').type('javier')
    cy.get('input#nombre').type('Javier')
    cy.get('input#edad').type('23')
    cy.get('input#email').type('ejemplo@gmail.com')
    cy.get('input#pass').type('Contra')
    cy.get('input#repass').type('contra')
  
    cy.get('button').should('be.enabled')
  
  })
})

