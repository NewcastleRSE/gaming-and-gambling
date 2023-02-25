import './style.css'
import background from './images/backgrounds/background.svg'

let stageWidth: number = 1920,
    stageHeight: number = 1080

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="background" class="drop-shadow-lg aspect-video">
    <embed id="stage" src="${background}"></embed>
  </div>
`

function init() {
  console.log(background)

  stageHeight = document.querySelector<HTMLDivElement>('#background')!.offsetHeight
  stageWidth = document.querySelector<HTMLDivElement>('#background')!.offsetWidth

  console.log(stageHeight, stageWidth)
}

document.querySelector<HTMLDivElement>('#stage')!.addEventListener('load', () => {
  const stage = document.querySelector<HTMLDivElement>('#stage')
  const vegetablePatch = getContentDocument(stage).querySelector('g#vegetablePatch')

  vegetablePatch.addEventListener('click', (event: PointerEvent) => {
    console.log(event)
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
