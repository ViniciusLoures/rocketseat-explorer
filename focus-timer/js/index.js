import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { elements } from "./elements.js";
import Sound from "./sounds.js";

const {
  btnPlay,
  btnPause,
  btnStop,
  btnSet,
  btnSoundOn,
  btnSoundOff,
  minutesDisplay,
  secondsDisplay
} = elements 

const controls = Controls({
  btnPause,
  btnPlay,
  btnSet,
  btnStop,
  btnSoundOn,
  btnSoundOff
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.stop,
})

const sounds = Sound();

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

btnSet.addEventListener('click', function(){
  let newMinutes = controls.getTime();
  if(!newMinutes){
    timer.reset()
    return;
  }
  timer.updateTimeDisplay(newMinutes,0);
  timer.updateMinutes(newMinutes)
})

btnSoundOn.addEventListener('click', controls.toggleSound);
btnSoundOff.addEventListener('click', controls.toggleSound);