import * as Utils from './utils'

const footer = document.querySelector<HTMLDivElement>('#footer')

export function init() {
    return Utils.htmlToElement(
    `<div class="w-1/2 mx-auto p-4 modal border-8 rounded-3xl flex text-white">
        <div class="w-1/3 text-center"><span id="clickCount">0</span> Clicks</div>
        <div class="w-1/3 text-center">Timer</div>
        <div class="w-1/3 text-center">Rarity</div>
    </div>`)
}

export function updateClickCount() {
    document.querySelector<HTMLDivElement>('#clickCount')!.innerText = (Number(document.querySelector<HTMLDivElement>('#clickCount')!.innerText) + 1).toString()
}