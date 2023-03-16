import * as Utils from './../../utils'
import { Rarities } from '../../images/items'
import { availableItems } from './../../games/potato'

export function inventory() {

    const rarityOrder = Object.values(Rarities);
    
    availableItems.sort((a, b) => rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity))

    let commonItems = '<h2>Common</h2><div class="flex flex-wrap gap-4 mb-4">',
        rareItems = '<h2>Rare</h2><div class="flex flex-wrap gap-4 mb-4">',
        veryRareItems = '<h2>Very Rare</h2><div class="flex flex-wrap gap-4 mb-4">',
        legendaryItems = '<h2>Legendary</h2><div class="flex flex-wrap gap-4 mb-4">'

    availableItems.forEach(item => {
        switch(item.rarity) {
            case 'common':
                commonItems += `<div class="w-14 h-14 item ${item.rarity}">?</div>`
                break;
            case 'rare':
                rareItems += `<div class="w-14 h-14 item ${item.rarity}">?</div>`
                break;
            case 'veryRare':
                veryRareItems += `<div class="w-14 h-14 item ${item.rarity}">?</div>`
                break;
            case 'legendary':
                legendaryItems += `<div class="w-14 h-14 item ${item.rarity}">?</div>`
                break;
        }                
    })

    commonItems += '</div>'
    rareItems += '</div>'
    veryRareItems += '</div>'
    legendaryItems += '</div>'

    

    return Utils.htmlToElement(
    `<div id="inventory" class="hidden modal fixed top-16 left-1/4 w-1/2 border-8 rounded-3xl p-8 text-white">
        <div class="flex flex-row">
            <div class="w-1/2">
                <div class="flex gap-4 mb-4">
                    <button id="homeBtn" class="rounded-4 w-16 h-16 background-cover" style="background-image: url('/src/images/buttons/home.png')">
                    <button id="gameBtn" class="rounded-4 w-16 h-16 background-cover" style="background-image: url('/src/images/buttons/shovel.png')">
                    <button id="inventoryBtn" class="rounded-4 w-16 h-16 background-cover" style="background-image: url('/src/images/buttons/case.png')">
                    <button id="infoBtn" class="rounded-4 w-16 h-16 background-cover" style="background-image: url('/src/images/buttons/info.png')">
                </div>
                <div id="items">
                    ${commonItems}
                    ${rareItems}
                    ${veryRareItems}
                    ${legendaryItems}
                </div>
            </div>
            <div class="w-1/2 relative">
                <img id="potatoBackground" class="absolute top-0 left-0" />
                <img src="/src/images/items/hat-woolly.png" class="absolute top-0 left-0" />
            </div>
        </div>
        <button id="inventoryCloseBtn" class="mx-auto btn-game">Close</button>
    </div>`)
}