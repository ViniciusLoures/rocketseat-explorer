export default function(){
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")
  const forestSnd = new Audio("./assets/forest.wav")
  const rainSnd = new Audio("./assets/rain.wav")
  const coffeeSnd = new Audio("/assets/coffee.wav")
  const fireSnd = new Audio("./assets/fire.wav")

  function pressBtn() {
    buttonPressAudio.play();
  }

  function timeEnd(){
    kitchenTimer.play();
  }

  function play(sound){
    switch (sound) {
      case 'forest':
        forestSnd.play()
        break
      case 'rain':
        rainSnd.play()
        break
      case 'coffee':
        coffeeSnd.play()
        break
      case 'fire':
        fireSnd.play()
        break
      default: break
    }
  }

  function pauseAllSounds(){
    forestSnd.pause()
    rainSnd.pause()
    coffeeSnd.pause()
    fireSnd.pause()
  }


  return {
    pressBtn,
    timeEnd,
    play,
    pauseAllSounds
  }
}
