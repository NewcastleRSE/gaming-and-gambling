import * as Utils from './../../utils'
import { Rarities } from '../../images/items'
import { availableItems } from './../../games/potato'

export function inventory() {

    const rarityOrder = Object.values(Rarities);
    
    const sortedItems = availableItems.sort(
        (a, b) => rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity))

    console.log(sortedItems)

    let potatoHTML = '',
        accessoriesHTML = '',
        hatsHTML = '',
        toysHTML = ''

    availableItems.forEach(item => {
        switch(item.type) {
            case 'potato':
                potatoHTML += `<div class="item ${item.rarity}">${item.name}</div>`
                break;
            case 'accessory':
                accessoriesHTML += `<div class="item ${item.rarity}">${item.name}</div>`
                break;
            case 'hat':
                hatsHTML += `<div class="item ${item.rarity}">${item.name}</div>`
                break;
            case 'toy':
                toysHTML += `<div class="item ${item.rarity}">${item.name}</div>`
                break;
        }
                       
    })

    return Utils.htmlToElement(
    `<div id="inventory" class="hidden modal fixed top-16 left-1/4 h-3/5 w-1/2 border-8 rounded-3xl p-8 text-white">
        <div class="flex flex-row">
            <div class="basis-1/2">
                <div class="grid place-items-center gap-4 grid-cols-4 mb-8">
                    <button id="homeBtn" class="rounded-4 w-16 h-16 background-cover" style="background-image: url('/src/images/buttons/home.png')">
                    <button id="gameBtn" class="rounded-4 w-16 h-16 background-cover" style="background-image: url('/src/images/buttons/shovel.png')">
                    <button id="inventoryBtn" class="rounded-4 w-16 h-16 background-cover" style="background-image: url('/src/images/buttons/case.png')">
                    <button id="infoBtn" class="rounded-4 w-16 h-16 background-cover" style="background-image: url('/src/images/buttons/info.png')">
                </div>
                <div id="items-potatoes" class="grid gap-4 grid-cols-4">
                    ${potatoHTML}
                </div>
                <div id="items-accessories" class="hidden">
                    ${accessoriesHTML}
                </div>
                <div id="items-hats" class="hidden">
                    ${hatsHTML}
                </div>
                <div id="items-toys" class="hidden">
                    ${toysHTML}
                </div>

            </div>
            <div class="basis-1/2 relative">
                <img id="potatoBackground" class="absolute top-0 left-0" />
                <img src="/src/images/items/hat-woolly.png" class="absolute top-0 left-0" />
            </div>
        </div>
        <button id="inventoryCloseBtn" class="mx-auto btn-game">Close</button>
    </div>`)
}