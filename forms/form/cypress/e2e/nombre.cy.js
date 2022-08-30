describe('open-the-app', () => {
  it('passes', () =>{
    cy.visit('http://localhost:3000')
  })
})

it('Interacting with text fields',()=>{
  cy.get('input[name="nombre"]')
    .type('Sachin')
.should('have.value','Sachin')
})