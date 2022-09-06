describe('correo', () => {
  beforeEach(() => {
    //cy.exec("npm start")
    cy.visit('http://localhost:3000/')
    cy.get('input#nombre').type('Javier')
    cy.get('input#edad').type('23')
    cy.get('input#pass').type('contra')
    cy.get('input#repass').type('contra')
    
    
  })
  it('textfields are filled correctly and press the button', () => {
    
    cy.get('input#email').type('ejemplo@gmail.com')
    cy.get('.Button').click()
  
  })

  it('email is at least lenght 3', ()=>{
    var email = 'a@a'
    var chara=Array.from(email)
    cy.log(chara)

    cy.get('input#email').type(email)
    expect(chara).to.have.length.least(3)
    cy.get('.Button').click()

  })

  it('email contains one special character @', ()=>{
    var email = "a0@gmail.com"
    var chara=Array.from(email)

    cy.get('input#email').type(email)
    const regex = /[@]/

    cy.get('input#email').invoke('val').should('match', regex)

  })
})

