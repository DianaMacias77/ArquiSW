describe('empty spec', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000')

})

it('Activates the button after filled in',()=>{
  cy.get('input#nombre').type('Karla')
  cy.get('input#edad').type('23')
  cy.get('input#email').type('karla@gmail.com')
  cy.get('input#pass').type('Holahola100')
  cy.get('input#repass').type('Holahola100')
  cy.get('.Button').click()
  })


it('Introducir int en nombre',()=>{
  cy.get('input#nombre').type('123')
  cy.get('input#edad').type('23')
  cy.get('input#email').type('karla@gmail.com')
  cy.get('input#pass').type('Holahola100')
  cy.get('input#repass').type('Holahola100')
  cy.get('.Button').click()
  })
})
