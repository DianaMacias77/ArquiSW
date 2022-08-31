//Giselle
describe('password testing', () => {
  beforeEach(() => {
    cy.exec("npm start")
    cy.visit('http://localhost:3000')
    cy.get('#nombre').type('giselle')
    cy.get('#edad').type('15')
    cy.get('#email').type("giselle@gmail.com")

  })

  it.skip('has at least 8 characters',() => {
    var password = '12345678911'
    var chara=Array.from(password)
    cy.log(chara)
    
    cy.get('#pass').type(password)
    expect(chara).to.have.length.least(8)
  })

  it.skip('does not have at least 8 characters',() => {
    var password = 'abc123'
    var chara=Array.from(password)
    
    cy.get('#pass').type(password)
    expect(chara).to.not.have.length.least(8)
  })
  
  //fix
  
  it.skip('contains at least one special char',() => {
    var password = 'abc123@'
    cy.get('#pass').type(password)
    const regex = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g

    cy.get('#pass').invoke('val').should('match',regex)

  })

  // it('does not contain at least one special char',() => {
  //   var password = 'abc123@@'
  //   cy.get('#pass').type(password)
  //   const regex =  /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g
  //   expect('#pass').invoke('val').to.not('match',regex)
  //   //cy.get('#pass').invoke('val').should(('match',regex))
  // })
  
  it.skip('password matches the confirm password',() => {
    var password = 'abc123@'
    var repass = 'abc123@'
  
    cy.get('#pass').type(password)
    cy.get("#repass").type(repass)

    cy.get('#pass').invoke('val').should('equal',repass)
  })
  
  it.skip('password does not match the confirm password',() => {
    var password = 'abc123@'
    var repass = 'abc123'
  
    cy.get('#pass').type(password)
    cy.get("#repass").type(repass)

    cy.get('#pass').invoke('val').should('not.equal',repass)
  })

})