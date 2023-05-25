export function Controls({
  btnExplorer,
  btnHome,
  btnUniverse,
  btnKnowMore
})
{
  const listOfNavBtn = [btnExplorer,btnHome,btnUniverse]

  function clickOnNav(btn){
    for(let item of listOfNavBtn){
      item.classList.remove('active')
    }
    btn.classList.add('active')
  }


  return {
    clickOnNav
  }
}