//Oscar
describe('age-validation', () => {
  beforeEach(() => {
    cy.exec("npm start")
    cy.visit('http://localhost:3000')
    cy.get('#nombre').type('oscar')
    // cy.get('#edad').type('23')
    cy.get('#email').type("oscar@gmail.com")
    cy.get('input#pass').type('Oscr@123')
  cy.get('input#repass').type('Oscr@123')
  })

  it.skip('has a correct age',() => {
    var edad = '23'
    var int=Array.from(edad)
    cy.log(int)
    cy.get('#edad').type(edad)
    cy.get('.Button').click()
  })

  it.skip('has a negative age',() => {
    var edad = '-1'
    var int=Array.from(edad)
    cy.log(int)
    cy.get('#edad').type(edad)
    cy.get('.Button').click()
  })

  it.skip('has a incorrect age',() => {
    var edad = '200'
    var int=Array.from(edad)
    cy.log(int)
    cy.get('#edad').type(edad)
    cy.get('.Button').click()
  })

  it.skip('has a special characters',() => {
    var edad = '20!'
    var int=Array.from(edad)
    cy.log(int)
    cy.get('#edad').type(edad)
    cy.get('.Button').click()
  })

  it.skip('has a string',() => {
    var edad = 'veinte'
    var int=Array.from(edad)
    cy.log(int)
    cy.get('#edad').type(edad)
    cy.get('.Button').click()
  })

})