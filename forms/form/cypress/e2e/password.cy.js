//Giselle
describe('password testing', () => {
  beforeEach(() => {
    cy.exec("npm start")
    cy.visit('http://localhost:3000')
    cy.get('#nombre').type('giselle')
    cy.get('#edad').type('15')
    cy.get('#email').type("giselle@gmail.com")

  })

  it('has at least 8 characters',() => {
    var password = '12345678911'
    var chara=Array.from(password)
    cy.log(chara)
    
    cy.get('#pass').type(password)
    expect(chara).to.have.length.least(8)
  })

  it('does not have at least 8 characters',() => {
    var password = 'abc123'
    var chara=Array.from(password)
    
    cy.get('#pass').type(password)
    expect(chara).to.not.have.length.least(8)
  })
  
  //fix
  it('contains at least one special char',() => {
    var password = 'abc123@'
    var chara=Array.from(password)
    cy.get('#pass').type(password)
    cy.log("allowed special characters: @ | . | _ | - | * | ' | / ")
    var allowed = ["@",".", "_", "-", "*", "'", "/"]
    expect(allowed).to.include.members(chara)

  })

  it('does not contain at least one special char',() => {
    
  })
  


})