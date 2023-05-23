import Sound from "./sounds.js";

export function Timer({ 
  minutesDisplay, 
  secondsDisplay, 
  resetControls, 
}) {

  let minutes = Number(minutesDisplay.textContent);
  let timerTimeOut;

  function updateTimeDisplay(newMinutes, seconds){
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
  }

  function reset() {
    updateTimeDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countDown(){
    timerTimeOut = setTimeout(function(){
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateTimeDisplay(minutes, 0);

      if(isFinished){
        resetControls();
        updateTimeDisplay();
        Sound().timeEnd();
        return
      }

      if(seconds <= 0){
        seconds = 60
        minutes--
      }
      updateTimeDisplay(minutes, seconds - 1);

      countDown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    countDown,
    reset,
    updateTimeDisplay,
    updateMinutes,
    hold
  }
}
