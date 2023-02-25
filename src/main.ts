import './style.css'
import background from './images/backgrounds/background.svg'
import name from './images/name.png'
import play from './images/btn-lg.png'

let stageWidth: number = 1920,
    stageHeight: number = 1080

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="wrapper" class="drop-shadow-lg aspect-video relative">
    <embed id="stage" class="absolute" src="${background}"></embed>
    <div id="intro-container" class="flex justify-center">
      <div class="animate-bounce">
        <img class="mt-24" src="${name}">
      </div>
      <div class="btn btn-lg btn-bottom-pos centre-btn"></div>
    </div>
  </div>
`

function init() {
  stageHeight = document.querySelector<HTMLDivElement>('#wrapper')!.offsetHeight
  stageWidth = document.querySelector<HTMLDivElement>('#wrapper')!.offsetWidth
}

document.querySelector<HTMLDivElement>('#stage')!.addEventListener('load', () => {
  const stage = document.querySelector<HTMLDivElement>('#stage')
  const vegetablePatch = getContentDocument(stage).querySelector('g#vegetablePatch')

  vegetablePatch.addEventListener('click', (event: PointerEvent) => {
    console.log('Dig Potato: ', event)
  })

})

function getContentDocument(embeddingElement: any) {
  if (embeddingElement.contentDocument) {
    return embeddingElement.contentDocument;
  }
  try {
    return embeddingElement.getSVGDocument();
  } catch (e) {}
  return null;
}

init()
