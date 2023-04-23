import './style.css'
import * as Potato from './games/potato'
import * as Utils from './utils'
import * as Modals from './modals'
import * as Menu from './menu'
import * as Footer from './footer'
import background from './images/backgrounds/background.svg'
import name from './images/name.png'
import dig from './images/dig.gif'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="wrapper" class="drop-shadow-lg relative h-screen">
    <embed id="stage" class="absolute -z-50" src="${background}"></embed>
    <img id="dig-animation" class="hidden fixed" src="${dig}" alt="dig" />
    <div id="start" class="flex flex-col grid place-items-center">
      <div id="title">
        <div class="animate-bounce">
          <img class="mx-auto" src="${name}" alt="name" />
        </div>
      </div>
      <button id="playBtn" class="mx-auto btn-game -mt-36">Play</button>
    </div> 
    <div id="menu" class="hidden w-1/2 mx-auto pt-4"></div>
    <div class="absolute" style="left: 55%; top: 35%">
      <div id="potato" class="relative hidden" style="width: 400px; height: 400px">
        <img id="digPotato" class="absolute top-0 left-0" />
        <img id="digHat" class="absolute top-0 left-0" />
        <img id="digAccessory" class="absolute top-0 left-0" />
        <img id="digShoes" class="absolute top-0 left-0" />
        <img id="digToy" class="absolute top-0 left-0" />
      </div>
    </div>
    <div id="footer" class="hidden absolute w-1/4 bottom-4 right-4"></div>
  </div>
  <div id="modals" class="-z-50 fixed top-0 bottom-0 left-0 right-0 bg-gray-500/50"></div>
`
Menu.init()

const inventoryWrapper = document.createElement('div')
inventoryWrapper.setAttribute('id', 'inventory')
inventoryWrapper.classList.add('hidden', 'modal','fixed','top-16','left-1/4','w-1/2','border-8','rounded-3xl','p-8','text-white')

document.querySelector<HTMLDivElement>('#modals')!.append(Modals.welcome())
document.querySelector<HTMLDivElement>('#modals')!.append(Modals.digIn())
document.querySelector<HTMLDivElement>('#modals')!.append(Modals.info())
document.querySelector<HTMLDivElement>('#modals')!.append(Modals.odds())
document.querySelector<HTMLDivElement>('#modals')!.append(Modals.foundItem())

document.querySelector<HTMLDivElement>('#modals')!.append(inventoryWrapper)
document.querySelector<HTMLDivElement>('#footer')!.append(Footer.init())

const elements = {
  modals: document.querySelector<HTMLDivElement>('#modals'),
  stage: document.querySelector<HTMLDivElement>('#stage'),
  start: document.querySelector<HTMLDivElement>('#start'),
  welcome: document.querySelector<HTMLDivElement>('#welcome'),
  digIn: document.querySelector<HTMLDivElement>('#digIn'),
  menu: document.querySelector<HTMLDivElement>('#menu'),
  inventory: document.querySelector<HTMLDivElement>('#inventory'),
  info: document.querySelector<HTMLDivElement>('#info'),
  odds: document.querySelector<HTMLDivElement>('#odds'),
  foundItem: document.querySelector<HTMLDivElement>('#foundItem'),
  // potato: document.querySelector<HTMLDivElement>('#potato'),
  footer: document.querySelector<HTMLDivElement>('#footer')
}

const selectedItems = {
  base: Potato.availableItems.find((item) => item.type === 'potato' && item.selected),
  hat: Potato.availableItems.find((item) => item.type === 'hat' && item.selected),
  shoes: Potato.availableItems.find((item) => item.type === 'shoes' && item.selected),
  accessory: Potato.availableItems.find((item) => item.type === 'accessory' && item.selected),
  toy: Potato.availableItems.find((item) => item.type === 'toy' && item.selected)
}

elements.stage!.addEventListener('load', () => {
  const vegetablePatch = Utils.getContentDocument(elements.stage).querySelector('g#vegetablePatch')
  const character = Utils.getContentDocument(elements.stage).querySelector('image#potato')

  elements.start!.style.height = elements.stage?.offsetHeight + 'px'

  vegetablePatch.addEventListener('click', (event: PointerEvent) => {
    Potato.dig(event.clientX, event.clientY)
  })

  console.log(selectedItems.base)

  character.setAttribute('xlink:href', selectedItems.base!.image)
})

elements.start!.querySelector<HTMLDivElement>('#playBtn')!.addEventListener('click', () => {
  elements.start!.classList.toggle('hidden')
  elements.welcome!.classList.toggle('hidden')
  elements.modals!.classList.toggle('-z-50')
})



elements.welcome!.querySelector<HTMLDivElement>('#continueBtn')!.addEventListener('click', () => {
  elements.welcome!.classList.toggle('hidden')
  elements.digIn!.classList.toggle('hidden')
})

elements.modals!.addEventListener('click', () => {
  const openModal = elements.modals!.querySelectorAll<HTMLDivElement>('.modal:not(.hidden)')
  
  if(openModal.length) {
    switch(openModal![0].getAttribute('id')) {
      case 'foundItem': 
        elements.foundItem!.classList.toggle('hidden')
        elements.modals!.classList.toggle('-z-50')
      case 'inventory': 
        elements.inventory!.classList.toggle('hidden')
        elements.modals!.classList.toggle('-z-50')
      case 'info': 
        elements.info!.classList.toggle('hidden')
        elements.modals!.classList.toggle('-z-50')
      case 'odds': 
        elements.odds!.classList.toggle('hidden')
        elements.modals!.classList.toggle('-z-50')
    }
  }
})

elements.digIn!.querySelector<HTMLDivElement>('#digInBtn')!.addEventListener('click', () => {
  elements.digIn!.classList.toggle('hidden')
  elements.menu!.classList.toggle('hidden')
  //elements.potato!.classList.toggle('hidden')
  elements.footer!.classList.toggle('hidden')
  elements.modals!.classList.toggle('-z-50')

  // const selectedPotato = Potato.availableItems.find((item) => item.type === 'potato' && item.selected),
  //       selectedHat = Potato.availableItems.find((item) => item.type === 'hat' && item.selected),
  //       selectedShoes = Potato.availableItems.find((item) => item.type === 'shoes' && item.selected),
  //       selectedAccessory = Potato.availableItems.find((item) => item.type === 'accessory' && item.selected),
  //       selectedToy = Potato.availableItems.find((item) => item.type === 'toy' && item.selected)

  // selectedPotato ? elements.potato!.querySelector<HTMLDivElement>('#digPotato')?.setAttribute('src', selectedPotato.image) : null
  // selectedHat ? elements.potato!.querySelector<HTMLDivElement>('#digHat')?.setAttribute('src', selectedHat.image) : null
  // selectedShoes ? elements.potato!.querySelector<HTMLDivElement>('#digShoes')?.setAttribute('src', selectedShoes.image) : null
  // selectedAccessory ? elements.potato!.querySelector<HTMLDivElement>('#digAccessory')?.setAttribute('src', selectedAccessory.image) : null
  // selectedToy ? elements.potato!.querySelector<HTMLDivElement>('#digToy')?.setAttribute('src', selectedToy.image) : null
})

elements.info!.querySelector<HTMLDivElement>('#closeInfoBtn')!.addEventListener('click', () => {
  elements.info!.classList.toggle('hidden')
  elements.modals!.classList.toggle('-z-50')
})

elements.odds!.querySelector<HTMLDivElement>('#closeOddsBtn')!.addEventListener('click', () => {
  elements.odds!.classList.toggle('hidden')
  elements.modals!.classList.toggle('-z-50')
})

elements.foundItem!.querySelector<HTMLDivElement>('#foundItemBtn')!.addEventListener('click', () => {
  elements.foundItem!.classList.toggle('hidden')
  elements.modals!.classList.toggle('-z-50')
})
