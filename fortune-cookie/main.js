const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

const fortuneCookie = document.querySelector('#fortuneCookie');
const btnTryAgain = document.querySelector('#btnTryAgain') ;

const fortune = [
  "O aprendizado é como o horizonte: não há limites.",
  "Não há que ser forte, há que ser flexível.",
  "Limitações são fronteiras criadas apenas pela nossa mente.",
  "O cão não ladra por valentia e sim por medo.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão.",
  "A palavra é prata, o silêncio é ouro.",
  "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
  "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
  "O homem só envelhece quando os lamentos substituem seus sonhos.",
  "A persistência realiza o impossível.",
]

btnTryAgain.addEventListener('click', resetClick)
fortuneCookie.addEventListener('click', revealLuck)


function resetClick(){
  toogleScreen()
}

function toogleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function revealLuck() {
  let randomId = Math.round(Math.random() * 9);

  const message = fortune[randomId];
  screen2.querySelector('h2').innerHTML = message;
  toogleScreen();

}