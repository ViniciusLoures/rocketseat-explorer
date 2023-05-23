export function Controls({
  btnPlay,
  btnPause,
  btnSet,
  btnStop,
  btnSoundOn,
  btnSoundOff,
}) {

  
  function play() {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    btnSet.classList.add('hide')
    btnStop.classList.remove('hide')
  }
  
  function pause() {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
  }
  
  function stop() {
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
    btnSet.classList.remove('hide')
    btnStop.classList.add('hide')
  }
  
  function toggleSound(){
    btnSoundOn.classList.toggle('hide')
    btnSoundOff.classList.toggle('hide')
  }

  function getTime() {
    let newMinutes = prompt('Quantos minutos?')
    if(!newMinutes){
      return false
    }
    return newMinutes
  }

  return {
    stop,
    play,
    pause,
    getTime, 
    toggleSound
  }
}