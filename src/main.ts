import './style.css'
import * as Potato from './games/potato'
import * as Utils from './utils'
import background from './images/backgrounds/background.svg'
import name from './images/name.png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="wrapper" class="drop-shadow-lg aspect-video relative h-full">
    <embed id="stage" class="absolute -z-50" src="${background}"></embed>
    <div id="welcome" class="flex flex-col grid place-items-center">
      <div id="title">
        <div class="animate-bounce">
          <img class="mx-auto" src="${name}">
        </div>
      </div>
      <button id="playBtn" class="mx-auto btn-game -mt-36">Play</button>
      <div id="welcomeMessage" class="hidden h-4/5 w-1/2 border-8 rounded-3xl p-8 text-white">
        <div id="explanationMessage">
          <p class="mb-2">This game is all about loot boxes. Loot boxes are games of chance. They contain a randomised selection of in-game items of unknown value that are only revealed when the loot box is opened.</p>
          <p class="mb-2">Loot boxes are known by many different names, depending on the games you play. They are sometimes known as crates, card packs, eggs, bags, chests, spins, and wishes. In this game, they are called digs.</p>
          <p class="mb-2">Try digging in the potato patch to win items for your potato character. Check out the inventory to see what you have won. Some items in this game are rarer and more valuable than others.</p>
          <p class="mb-4">Can you find the golden potato skin?</p>
          <button id="continueBtn" class="mx-auto btn-game">Continue</button>
        </div>
        <div id="digInMessage" class="hidden">
          <p class="mb-2">Can you find the legendary <span class="text-amber-400">golden potato</span> skin?</p>
          <p class="mb-4">Dig in the potato patch to find items!</p>
          <button id="digInBtn" class="mx-auto btn-game">Dig In</button>
        </div>
      </div>
    </div> 
  </div>
`

const elements = {
  welcome: document.querySelector<HTMLDivElement>('#welcome'),
  stage: document.querySelector<HTMLDivElement>('#stage'),
  title: document.querySelector<HTMLDivElement>('#title'),
  playBtn: document.querySelector<HTMLDivElement>('#playBtn'),
  welcomeMessage: document.querySelector<HTMLDivElement>('#welcomeMessage'),
  continueBtn: document.querySelector<HTMLDivElement>('#continueBtn'),
  explanationMessage: document.querySelector<HTMLDivElement>('#explanationMessage'),
  digInBtn: document.querySelector<HTMLDivElement>('#digInBtn'),
  digInMessage: document.querySelector<HTMLDivElement>('#digInMessage'),
}

elements.stage!.addEventListener('load', () => {
  const vegetablePatch = Utils.getContentDocument(elements.stage).querySelector('g#vegetablePatch')

  elements.welcome!.style.height = elements.stage?.offsetHeight + 'px'

  vegetablePatch.addEventListener('click', () => {
    console.log(Potato.dig())
  })
})

elements.playBtn!.addEventListener('click', () => {
  elements.title!.classList.toggle('hidden')
  elements.playBtn!.classList.toggle('hidden')
  elements.welcomeMessage!.classList.toggle('hidden')
})

elements.continueBtn!.addEventListener('click', () => {
  elements.explanationMessage!.classList.toggle('hidden')
  elements.digInMessage!.classList.toggle('hidden')
})

elements.digInBtn!.addEventListener('click', () => {
  elements.explanationMessage!.classList.toggle('hidden')
  elements.welcomeMessage!.classList.toggle('hidden')
})

