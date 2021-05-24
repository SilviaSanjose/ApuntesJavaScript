




document.addEventListener('DOMContentLoaded', () => { 

  const grid2 = document.querySelector('.prueba');

  function prueba(){
      var card1 = document.createElement('p');
      card1.innerHTML= "Hola caracola"
      grid2.appendChild(card1)
  }

  prueba()
});