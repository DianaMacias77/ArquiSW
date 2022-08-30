//Giselle
describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('#nombre').type('giselle')
    cy.get('#edad').type('15')
    cy.get('#email').type("giselle@gmail.com")

  })

    it('has 8 to 10 characters',() => {
      var password = '12345678'
      var chara=Array.from(password)
      cy.log(chara)
   
      
      cy.get('#pass').type(password)
      expect(chara).to.have.length.least(8)
    })
  
  it('contains at least one special char',() => {
   

  })

  it('does not contain at least one special char',() => {
    
  })
  


})