import { Router } from "./router.js";
import { elements } from "./elements.js";
import { Controls } from "./controls.js";

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/explorer', '/pages/explorer.html')
router.add('/universe', '/pages/universe.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

const {
  btnExplorer,
  btnHome,
  btnUniverse,
  btnKnowMore
} = elements

const controls = Controls({
  btnExplorer,
  btnHome,
  btnUniverse,
  btnKnowMore
})

btnExplorer.addEventListener('click', function(){
  controls.clickOnNav(btnExplorer)
})

btnHome.addEventListener('click', function(){
  controls.clickOnNav(btnHome)
})
btnUniverse.addEventListener('click', function(){
  controls.clickOnNav(btnUniverse)
})