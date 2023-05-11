const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

const btnTry = document.querySelector('#btnTry') 
const btnReset = document.querySelector('#btnReset') 

let randomNumber = Math.round(Math.random() * 10);

let attempts = 1

btnTry.addEventListener('click', tryClick)
btnReset.addEventListener('click', resetClick)
document.addEventListener('keydown', resetWithEnter)

function toogleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function tryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector('#inputNumber');

  if(Number(inputNumber.value) == randomNumber){
    toogleScreen()
    screen2.querySelector('h2').innerHTML = `Acertou em ${attempts} tentativas!`
  }

  inputNumber.value = ''
  ++attempts
}

function resetClick(){
  toogleScreen()
  randomNumber = Math.round(Math.random() * 10);
  attempts = 1;
}

function resetWithEnter(event){
  if(event.key == 'Enter' && screen1.classList.contains('hide')){
    resetClick();
  }
}