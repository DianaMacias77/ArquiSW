//Giselle
describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('#nombre').type('giselle')
    cy.get('#edad').type('15')
    cy.get('#email').type("giselle@gmail.com")

  })
  
  it('contains at least one special char',() => {
   

  })

  it('does not contain at least one special char',() => {
    
  })
  
  //fix
  it('has 8 to 10 characters',() => {
    cy.get('#pass').type(12345678)
    cy.get('#pass').invoke('text')
    .then((text) => {
      expect(text.length).to.be.at.least(8)
    })
  })

})