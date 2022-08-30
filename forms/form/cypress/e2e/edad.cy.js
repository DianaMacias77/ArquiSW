describe('open-the-app', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
})

const handleSubmit=(e)=>{
  if(age>=1000)
  {
    
    alert("Age not aceppted");
  }
  else{
    
    alert('Succesful');
  }
  e.preventDefault();
}