import './style.css'
import * as Potato from './games/potato'
import * as Utils from './utils'
import * as Modals from './modals'
import * as Menu from './menu'
import background from './images/backgrounds/background.svg'
import name from './images/name.png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="wrapper" class="drop-shadow-lg aspect-video relative h-full">
    <embed id="stage" class="absolute -z-50" src="${background}"></embed>
    <div id="start" class="flex flex-col grid place-items-center">
      <div id="title">
        <div class="animate-bounce">
          <img class="mx-auto" src="${name}">
        </div>
      </div>
      <button id="playBtn" class="mx-auto btn-game -mt-36">Play</button>
    </div> 
    <div id="menu" class="hidden w-1/2 mx-auto pt-4">
      
    </div>
  </div>
`
Menu.init()

document.querySelector<HTMLDivElement>('#app')!.append(Modals.welcome())
document.querySelector<HTMLDivElement>('#app')!.append(Modals.digIn())
document.querySelector<HTMLDivElement>('#app')!.append(Modals.inventory())
document.querySelector<HTMLDivElement>('#app')!.append(Modals.info())
document.querySelector<HTMLDivElement>('#app')!.append(Modals.odds())

const elements = {
  stage: document.querySelector<HTMLDivElement>('#stage'),
  start: document.querySelector<HTMLDivElement>('#start'),
  welcome: document.querySelector<HTMLDivElement>('#welcome'),
  digIn: document.querySelector<HTMLDivElement>('#digIn'),
  menu: document.querySelector<HTMLDivElement>('#menu'),
  info: document.querySelector<HTMLDivElement>('#info'),
  odds: document.querySelector<HTMLDivElement>('#odds'),
}

elements.stage!.addEventListener('load', () => {
  const vegetablePatch = Utils.getContentDocument(elements.stage).querySelector('g#vegetablePatch')

  elements.start!.style.height = elements.stage?.offsetHeight + 'px'

  vegetablePatch.addEventListener('click', () => {
    console.log(Potato.dig())
  })
})

elements.start!.querySelector<HTMLDivElement>('#playBtn')!.addEventListener('click', () => {
  elements.start!.classList.toggle('hidden')
  elements.welcome!.classList.toggle('hidden')
})

elements.welcome!.querySelector<HTMLDivElement>('#continueBtn')!.addEventListener('click', () => {
  elements.welcome!.classList.toggle('hidden')
  elements.digIn!.classList.toggle('hidden')
})

elements.digIn!.querySelector<HTMLDivElement>('#digInBtn')!.addEventListener('click', () => {
  elements.digIn!.classList.toggle('hidden')
  elements.menu!.classList.toggle('hidden')
})

elements.info!.querySelector<HTMLDivElement>('#closeInfoBtn')!.addEventListener('click', () => {
  elements.info!.classList.toggle('hidden')
})

elements.odds!.querySelector<HTMLDivElement>('#closeOddsBtn')!.addEventListener('click', () => {
  elements.odds!.classList.toggle('hidden')
})
