import * as Utils from './utils'

let digCount = 0

export function init() {
    return Utils.htmlToElement(
    `<div class="w-full p-4 modal border-8 rounded-3xl flex text-white">
        <div w-1/2>
            <ul class="list-none mx-4">
                <li>Common - 1 in 2</li>
                <li>Rare - 1 in 3</li>
                <li>Very rare - 3 in 20</li>
                <li>Legendary - 1 in 20</li>
            </ul>
        </div>
        <div class="w-1/4 flex flex-col text-center place-content-center">
            <span class="text-4xl" id="digCount">0</span>
            <span id="digLabel">Digs</span>
        </div>
        <div class="w-1/4 flex flex-col text-center place-content-center">
            <span class="text-4xl" id="findCount">0</span>
            <span id="findLabel">Items</span>
        </div>
    </div>`)
}

export function updateClickCount(itemCount: number) {
    digCount++

    document.querySelector<HTMLDivElement>('#digCount')!.innerText = `${digCount}`
    document.querySelector<HTMLDivElement>('#digLabel')!.innerText = `Dig${digCount === 1 ? '':'s'}`

    document.querySelector<HTMLDivElement>('#findCount')!.innerText = `${itemCount}`
    document.querySelector<HTMLDivElement>('#findLabel')!.innerText = `Item${itemCount === 1 ? '':'s'}`
}