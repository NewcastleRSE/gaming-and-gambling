import './style.css'
import imgUrl from './images/backgrounds/background.png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="h-screen bg-contain bg-no-repeat bg-center" style="background-image: url('${imgUrl}')">

  </div>
`
