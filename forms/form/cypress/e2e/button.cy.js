describe('button-functionality', () => {
  beforeEach('passes', () =>{
    cy.visit('http://localhost:3000')
  })
//revisar que cuando todos esten vacios y le de sumbit te diga algo
it('Check textfields are empty and click the button', () =>{
  cy.get('#nombre').should('have.length.gt',0)
  cy.get('input#nombre').should('have.length.gt',0)
  cy.get('input#edad').should('have.length.gt',0)
  cy.get('input#email').should('have.length.gt',0)
  cy.get('input#pass').should('have.length.gt',0)
  cy.get('input#repass').should('have.length.gt',0)
  cy.get('.Button').click()
})

//si lleno todo bien comporbar que si lo acepte
it('Check textfields are filled correctly and click the button', () =>{
  cy.get('#nombre').type('Diana')
  cy.get('input#nombre').type('Diana')
  cy.get('input#edad').type('22')
  cy.get('input#email').type('diana@gmail.com')
  cy.get('input#pass').type('Dian@123')
  cy.get('input#repass').type('Dian@123')
  cy.get('.Button').click()
})

//revisar que un campo esté incorrecto
it('Textfield name is incorrectly filled and click the button', () =>{
  cy.get('#nombre').type('Diana1')
  cy.expect('#nombre').to.have.string('#nombre')
  cy.get('input#nombre').type('Diana')
  cy.expect('input#nombre').to.have.string('input#nombre')
  cy.get('input#edad').type('22')
  cy.get('input#email').type('diana@gmail.com')
  cy.get('input#pass').type('Dian@123')
  cy.get('input#repass').type('Dian@123')
  cy.get('.Button').click()
})

it('Textfield edad is incorrectly filled and click the button', () =>{
  cy.get('#nombre').type('Diana')
  cy.get('input#nombre').type('Diana')
  cy.get('input#edad').type('veintidos')
  cy.get('input#edad').invoke('text').should('match', /^[0-119]*$/)
  cy.get('input#email').type('diana@gmail.com')
  cy.get('input#pass').type('Dian@123')
  cy.get('input#repass').type('Dian@123')
  cy.get('.Button').click()
})

it('Textfield email is incorrectly filled and click the button', () =>{
  var email = 'diana@.com'
  cy.get('#nombre').type('Diana')
  cy.get('input#nombre').type('Diana')
  cy.get('input#edad').type('22')
  cy.get('input#email').type(email)
  expect(email).to.contain('@')
  expect(email).to.contain('com')
  cy.get('input#pass').type('Dian@123')
  cy.get('input#repass').type('Dian@123')
  cy.get('.Button').click()
})

it('Textfield password is incorrectly filled and click the button', () =>{
  var pass = 'diana12'
  var val = Array.from('input#pass')
  cy.get('#nombre').type('Diana')
  cy.get('input#nombre').type('Diana')
  cy.get('input#edad').type('22')
  cy.get('input#email').type('diana@gmail.com')
  expect(pass).to.not.have.length.least(8)
  cy.get('input#repass').type('dia123')
  cy.get('.Button').click()
})

it('Textfield confirm password is incorrectly filled and click the button', () =>{
  var repass = 'dianaa1'
  cy.get('#nombre').type('Diana')
  cy.get('input#nombre').type('Diana')
  cy.get('input#edad').type('22')
  cy.get('input#email').type('diana@gmail.com')
  cy.get('input#pass').type('diana123')
  cy.get('input#repass').type('dian123')
  expect(repass).to.not.have.length.least(8)
  cy.get('.Button').click()
})

it('Textfield password and confirm password didnt match and click the button', () =>{
  var password = 'Diana123@'
  var repass = 'diana123'
  cy.get('#nombre').type('Diana')
  cy.get('input#nombre').type('Diana')
  cy.get('input#edad').type('22')
  cy.get('input#email').type('diana@gmail.com')
  cy.get('input#pass').type(password)
  cy.get("input#repass").type(repass)
  cy.get('input#pass').invoke('val').should('not.equal',repass)
  cy.get('.Button').click()
})

it('Once you press the button, you clear the textfields', () =>{
  var password = 'Diana123@'
  var repass = 'diana123'
  cy.get('#nombre').type('Diana')
  .clear()
  cy.get('input#nombre').type('Diana')
  .clear()
  cy.get('input#edad').type('22')
  .clear()
  cy.get('input#email').type('diana@gmail.com')
  .clear()
  cy.get('input#pass').type(password)
  .clear()
  cy.get("input#repass").type(repass)
  .clear()
  cy.get('input#pass').invoke('val').should('not.equal',repass)
  cy.get('.Button').click()
})
})