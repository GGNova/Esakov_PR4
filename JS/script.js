const cartBtn = document.querySelector('.header-btnCart'); 
const closeBtn = document.querySelector('.closer');
const wind = document.querySelector('.Modal-bg')

function Opener(){
  console.log("Окно открыто")
  wind.classList.toggle('Modal-opened')
};

function Closer(){
  console.log("Окно закрыто")
  wind.classList.remove('Modal-opened')
  wind.classList.add('Modal-bg')
};

cartBtn.addEventListener('click',Opener);
closeBtn.addEventListener('click',Closer);