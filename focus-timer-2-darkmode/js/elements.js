const btnPause = document.querySelector('.pause');
const btnPlay = document.querySelector('.play');
const btnStop = document.querySelector('.stop');
const btnPlus = document.querySelector('.plus');
const btnLess = document.querySelector('.less');

const btnForest = document.querySelector('.forest');
const btnRain = document.querySelector('.rain');
const btnCoffee = document.querySelector('.coffee');
const btnFire = document.querySelector('.fire');
const iconForest = document.querySelector(".forest svg path")
const iconRain = document.querySelector(".rain svg path")
const iconCoffee = document.querySelector(".coffee svg path")
const iconFire = document.querySelector(".fire svg path")

const btnLight = document.querySelector('.theme-light')
const btnDark = document.querySelector('.theme-dark')

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

const root = document.querySelector(':root');

const lightColorsList = [['--bg-color', '#ffffff'],
                        ['--bg-card-color', '#e1e1e6'],
                        ['--bg-card-color-select', '#02799d'],
                        ['--fc-primary', '#FFFFFF'],
                        ['--fc-secondary','#323238']]

const darkColorsList = [['--bg-color', '#121214'],
                        ['--bg-card-color', '#29292E'],
                        ['--bg-card-color-select', '#0A3442'],
                        ['--fc-primary', '#FFFFFF'],
                        ['--fc-secondary','#C4C4CC']]

export const elements = {
  btnPause,
  btnPlay,
  btnStop,
  btnPlus,
  btnLess,
  btnForest,
  btnRain,
  btnCoffee,
  btnFire,
  iconForest,
  iconRain,
  iconCoffee, 
  iconFire,
  btnLight,
  btnDark,
  minutesDisplay,
  secondsDisplay,
  root,
  lightColorsList,
  darkColorsList,
}