import * as Utils from './../../utils'
import { Rarities } from '../../images/items'
import { availableItems } from './../../games/potato'

export function inventory() {
    console.log(availableItems.filter((item) => item.found))

    const rarityOrder = Object.values(Rarities);
    
    availableItems.sort((a, b) => rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity))

    let commonItems = '<h2>Common</h2><div class="flex flex-wrap gap-4 mb-4">',
        rareItems = '<h2>Rare</h2><div class="flex flex-wrap gap-4 mb-4">',
        veryRareItems = '<h2>Very Rare</h2><div class="flex flex-wrap gap-4 mb-4">',
        legendaryItems = '<h2>Legendary</h2><div class="flex flex-wrap gap-4 mb-4">'

    availableItems.forEach(item => {

        let itemHTML = `<div class="w-14 h-14 text-center align-middle item ${item.rarity} ${item.type}">`

        if(item.found) {
            console.log(item.name)
            itemHTML += `<img src="${item.image}" alt="${item.name}" />`
        }
        else {
            itemHTML += `<span>?</span>`
        }
                        
        itemHTML += `</div>`

        switch(item.rarity) {
            case 'common':
                commonItems += itemHTML
                break;
            case 'rare':
                rareItems += itemHTML                
                break;
            case 'veryRare':
                veryRareItems += itemHTML
                break;
            case 'legendary':
                legendaryItems += itemHTML
                break;
        }                
    })

    commonItems += '</div>'
    rareItems += '</div>'
    veryRareItems += '</div>'
    legendaryItems += '</div>'

    const inventoryWrapper = document.querySelector<HTMLDivElement>('#inventory')
    
    inventoryWrapper!.innerHTML =  
        `<div class="flex flex-row">
            <div class="w-1/2">
                <div class="flex gap-4 mb-4">
                    <button id="allItems" class="rounded-4 w-16 h-16">All</button>
                    <button id="hatItems" class="rounded-4 w-16 h-16">Hats</button>
                    <button id="shoeItems" class="rounded-4 w-16 h-16">Shoes</button>
                    <button id="accessoriesItems" class="rounded-4 w-16 h-16">Accessories</button>
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
        <button id="inventoryCloseBtn" class="mx-auto btn-game">Close</button>`

    inventoryWrapper!.querySelector<HTMLDivElement>('#allItems')!.addEventListener('click', () => {
        var items = inventoryWrapper!.getElementsByClassName('item')

        for (var i = 0; i < items.length; i++) {
            items[i].classList.remove('hidden')
        }
    })

    inventoryWrapper!.querySelector<HTMLDivElement>('#hatItems')!.addEventListener('click', () => {
        var items = inventoryWrapper!.getElementsByClassName('item')

        for (var i = 0; i < items.length; i++) {
            if(items[i].classList.contains('hat')){
                items[i].classList.remove('hidden')
            }
            else {
                items[i].classList.add('hidden')
            }
        }
    })

    inventoryWrapper!.querySelector<HTMLDivElement>('#shoeItems')!.addEventListener('click', () => {
        var items = inventoryWrapper!.getElementsByClassName('item')

        for (var i = 0; i < items.length; i++) {
            if(items[i].classList.contains('shoes')){
                items[i].classList.remove('hidden')
            }
            else {
                items[i].classList.add('hidden')
            }
        }
    })

    inventoryWrapper!.querySelector<HTMLDivElement>('#accessoriesItems')!.addEventListener('click', () => {
        var items = inventoryWrapper!.getElementsByClassName('item')

        for (var i = 0; i < items.length; i++) {
            if(items[i].classList.contains('accessory')){
                items[i].classList.remove('hidden')
            }
            else {
                items[i].classList.add('hidden')
            }
        }
    })

    inventoryWrapper!.querySelector<HTMLDivElement>('#inventoryCloseBtn')!.addEventListener('click', () => {
        inventoryWrapper!.classList.toggle('hidden')
    })
}