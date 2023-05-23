export function Controls({
  btnPause,
  btnPlay,
  btnForest,
  btnRain,
  btnCoffee,
  btnFire,
  iconForest,
  iconRain,
  iconCoffee, 
  iconFire,
  playMusic,
  pauseAllMusic
}) {

  const listOfIcons = [ iconForest, iconRain, iconCoffee, iconFire]
  const listOfModelsButtons = [ btnForest, btnRain, btnCoffee, btnFire]

  function play() {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
  }
  
  function pause() {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
  }
  
  function stop() {
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
    resetAllSoundsBtn()
  }


  function resetAllSoundsBtn() {
    for (let btn of listOfModelsButtons){
      btn.style.backgroundColor = 'var(--bg-card-color-light)'
    }

    for(let icon of listOfIcons){
      icon.style.fill = 'var(--color-light)'
    }

    pauseAllMusic()
  }

  function selectedBtn(btn, icon){
    resetAllSoundsBtn();

    btn.style.backgroundColor = "var(--bg-select-card-color)";
    icon.style.fill = 'var(--bg-color-light)';
    playMusic(btn.className)

  }

  return {
    stop,
    play,
    pause,
    selectedBtn
  }
}