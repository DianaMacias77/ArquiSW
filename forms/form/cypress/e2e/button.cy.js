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

//uno de los campos esta mal
it('Textfield name is incorrectly filled and click the button', () =>{
  cy.get('#nombre').type('Diana')
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
  cy.get('input#edad').type('22')
  cy.get('input#edad').invoke('text').should('match', /^[0-119]*$/)
  cy.get('input#email').type('diana@gmail.com')
  cy.get('input#pass').type('Dian@123')
  cy.get('input#repass').type('Dian@123')
  cy.get('.Button').click()
})

it('Textfield email is incorrectly filled and click the button', () =>{
  cy.get('#nombre').type('Diana')
  cy.get('input#nombre').type('Diana')
  cy.get('input#edad').type('22')
  cy.get('input#email').type('diana@gmail.com')
  cy.get('input#email').find("[type='email']")
  cy.get('input#pass').type('Dian@123')
  cy.get('input#repass').type('Dian@123')
  cy.get('.Button').click()
})

it('Textfield password is incorrectly filled and click the button', () =>{
  cy.get('#nombre').type('Diana')
  cy.get('input#nombre').type('Diana')
  cy.get('input#edad').type('22')
  cy.get('input#email').type('diana@gmail.com')
  cy.get('input#pass').type('diana123')
  //cy.get('input#pass').find"[type='password']"
  cy.get('input#repass').type('dia123')
  cy.get('.Button').click()
})

it('Textfield password again is incorrectly filled and click the button', () =>{
  cy.get('#nombre').type('Diana')
  cy.get('input#nombre').type('Diana')
  cy.get('input#edad').type('22')
  cy.get('input#email').type('diana@gmail.com')
  cy.get('input#pass').type('diana123')
  cy.get('input#repass').type('dian123')
  //cy.get('input#repass').find"[type='password']"
  cy.get('.Button').click()
})
})


