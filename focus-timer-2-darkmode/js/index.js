import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { elements } from "./elements.js";
import Sound from "./sounds.js";

const {
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
  darkColorsList
} = elements 

const sounds = Sound();

const controls = Controls({
  btnPause,
  btnPlay,
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
  root,
  playMusic: sounds.play,
  pauseAllMusic: sounds.pauseAllSounds
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.stop,
})


btnPlay.addEventListener('click', function(){
  controls.play();
  timer.countDown();
  sounds.pressBtn();
});

btnPause.addEventListener('click', function(){
  controls.pause();
  timer.hold();
  sounds.pressBtn();

});

btnStop.addEventListener('click', function(){
  controls.stop();
  timer.reset();
  sounds.pressBtn();
});

btnPlus.addEventListener('click', function(){
  timer.addTime();
})

btnLess.addEventListener('click', function(){
  timer.removeTime();
})

btnForest.addEventListener('click', function(){
  controls.selectedBtn(btnForest, iconForest);
})
btnRain.addEventListener('click', function(){
  controls.selectedBtn(btnRain, iconRain);
})
btnCoffee.addEventListener('click', function(){
  controls.selectedBtn(btnCoffee, iconCoffee);
})
btnFire.addEventListener('click', function(){
  controls.selectedBtn(btnFire, iconFire);
})

btnLight.addEventListener('click', function(){
  controls.toggleTheme(darkColorsList)
})

btnDark.addEventListener('click', function(){
  controls.toggleTheme(lightColorsList)
})