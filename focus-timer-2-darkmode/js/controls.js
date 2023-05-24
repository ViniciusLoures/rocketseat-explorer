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
  btnLight,
  btnDark,
  root,
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
      btn.style.backgroundColor = 'var(--bg-card-color)'
    }

    for(let icon of listOfIcons){
      icon.style.fill = 'var(--fc-secondary)'
    }

    pauseAllMusic()
  }

  function selectedBtn(btn, icon){
    resetAllSoundsBtn();

    btn.style.backgroundColor = "var(--bg-card-color-select)";
    icon.style.fill = 'var(--fc-primary)';
    playMusic(btn.className)

  }

  function toggleTheme(theme){
    btnDark.classList.toggle('hide')
    btnLight.classList.toggle('hide')
    toogleColors(theme);
  }

  function toogleColors(theme) {
    for (const property in theme) {
      root.style.setProperty(theme[property][0], theme[property][1]);
    }
  }
  

  return {
    stop,
    play,
    pause,
    selectedBtn,
    toggleTheme
  }
}