import * as Utils from './utils'
import Timer from 'easytimer.js'

const timer = new Timer()

export function init() {
    return Utils.htmlToElement(
    `<div class="w-1/2 mx-auto p-4 modal border-8 rounded-3xl flex text-white">
        <div class="w-1/3 text-center"><span id="clickCount">0</span> Clicks</div>
        <div class="w-1/3 text-center"><span id="timer">00:00:00</span></div>
        <div class="w-1/3 text-center">Rarity</div>
    </div>`)
}

timer.addEventListener('secondsUpdated', () => {
    document.querySelector<HTMLDivElement>('#timer')!.innerHTML = timer.getTimeValues().toString()
})

export function updateClickCount() {
    const counter = (Number(document.querySelector<HTMLDivElement>('#clickCount')!.innerText) + 1)

    if(counter === 1) {
        timer.start()
    }

    document.querySelector<HTMLDivElement>('#clickCount')!.innerText = counter.toString()
}