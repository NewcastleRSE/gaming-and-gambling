// import * as Utils from './../../utils'
// import { Rarities } from '../../images/items'
import { availableItems, selectItem } from './../../games/potato'

export function inventory() {

    let commonItems = '<h2>Common</h2><div class="flex flex-wrap gap-4 mb-4">',
        rareItems = '<h2>Rare</h2><div class="flex flex-wrap gap-4 mb-4">',
        veryRareItems = '<h2>Very Rare</h2><div class="flex flex-wrap gap-4 mb-4">',
        legendaryItems = '<h2>Legendary</h2><div class="flex flex-wrap gap-4 mb-4">'

    let selectedItems = {
        potato: null,
        hat: null,
        toy: null,
        shoes: null
    }

    availableItems.forEach(item => {

        let itemHTML = `<div class="w-14 h-14 text-center align-middle item ${item.rarity} ${item.type}">`

        if(item.found) {
            itemHTML += `<img class="thumbnail pointer" src="${item.thumbnail}" alt="${item.name}" />`
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
        
        if(item.selected) {
            selectedItems[item.type] = item
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
            <div class="w-1/2 relative" id="potato-showcase">
                <img id="selectedPotato" class="absolute top-0 left-0" />
                <img id="selectedHat" class="absolute top-0 left-0" />
                <img id="selectedAccessory" class="absolute top-0 left-0" />
                <img id="selectedShoes" class="absolute top-0 left-0" />
            </div>
        </div>
        <button id="inventoryCloseBtn" class="mx-auto btn-game">Close</button>`

    let thumbnails = inventoryWrapper!.getElementsByClassName('thumbnail')

    const showCase = document.querySelector<HTMLDivElement>('#potato-showcase')

    selectedItems.potato ? showCase!.querySelector<HTMLDivElement>('#selectedPotato')?.setAttribute('src', selectedItems.potato?.image) : null
    selectedItems.hat ? showCase!.querySelector<HTMLDivElement>('#selectedHat')?.setAttribute('src', selectedItems.hat?.image) : null
    selectedItems.toy ? showCase!.querySelector<HTMLDivElement>('#selectedAccessory')?.setAttribute('src', selectedItems.toy?.image) : null
    selectedItems.shoes ? showCase!.querySelector<HTMLDivElement>('#selectedShoes')?.setAttribute('src', selectedItems.shoes?.image) : null

    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', (event) => {
            const item = selectItem(event.target!.alt)

            switch(item.type) {
                case 'potato':
                    showCase!.querySelector<HTMLDivElement>('#selectedPotato')?.setAttribute('src', item.image)
                    break
                case 'hat':
                    showCase!.querySelector<HTMLDivElement>('#selectedHat')?.setAttribute('src', item.image)
                    break
                case 'toy':
                    showCase!.querySelector<HTMLDivElement>('#selectedAccessory')?.setAttribute('src', item.image)
                    break
                case 'shoes':
                    showCase!.querySelector<HTMLDivElement>('#selectedShoes')?.setAttribute('src', item.image)
                    break
            }
        })
    }

    inventoryWrapper!.querySelector<HTMLDivElement>('#allItems')!.addEventListener('click', () => {
        let items = inventoryWrapper!.getElementsByClassName('item')

        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('hidden')
        }
    })

    inventoryWrapper!.querySelector<HTMLDivElement>('#hatItems')!.addEventListener('click', () => {
        let items = inventoryWrapper!.getElementsByClassName('item')

        for (let i = 0; i < items.length; i++) {
            if(items[i].classList.contains('hat')){
                items[i].classList.remove('hidden')
            }
            else {
                items[i].classList.add('hidden')
            }
        }
    })

    inventoryWrapper!.querySelector<HTMLDivElement>('#shoeItems')!.addEventListener('click', () => {
        let items = inventoryWrapper!.getElementsByClassName('item')

        for (let i = 0; i < items.length; i++) {
            if(items[i].classList.contains('shoes')){
                items[i].classList.remove('hidden')
            }
            else {
                items[i].classList.add('hidden')
            }
        }
    })

    inventoryWrapper!.querySelector<HTMLDivElement>('#accessoriesItems')!.addEventListener('click', () => {
        let items = inventoryWrapper!.getElementsByClassName('item')

        for (let i = 0; i < items.length; i++) {
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