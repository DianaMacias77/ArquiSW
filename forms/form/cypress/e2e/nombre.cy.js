describe('empty spec', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000')

})

it('Activates the button after filled in',()=>{
  cy.get('input#nombre').type('Karla')
  cy.expect('input#nombre').to.be.a('string')
  cy.get('input#edad').type('23')
  cy.get('input#email').type('karla@gmail.com')
  cy.get('input#pass').type('Holahola100')
  cy.get('input#repass').type('Holahola100')
  cy.get('.Button').click()
  })


it('Typing numbers into the name field sends an alert',()=>{
  cy.get('input#nombre').type('Karla 123').should('have.value', 'Karla 123')
  cy.expect('input#nombre').to.have.string('#nombre')
  cy.get('input#edad').type('23')
  cy.get('input#email').type('karla@gmail.com')
  cy.get('input#pass').type('Holahola100')
  cy.get('input#repass').type('Holahola100')
  cy.get('.Button').click()
  })


  it('Typing special characters inside the name field sends an alert',()=>{
    cy.get('input#nombre').type('Karla **').should('have.value', 'Karla **')
    cy.expect('input#nombre').to.have.string('#nombre')
    cy.get('input#edad').type('23')
    cy.get('input#email').type('karla@gmail.com')
    cy.get('input#pass').type('Holahola100')
    cy.get('input#repass').type('Holahola100')
    cy.get('.Button').click()
  })

})
