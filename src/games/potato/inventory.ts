import * as Utils from './../../utils'
// import { Rarities } from '../../images/items'
import { availableItems, selectItem } from './../../games/potato'

let firstTime = true

export function inventory() {

    let commonItems = '<h2 id="commonLabel">Common</h2><div class="flex flex-wrap gap-4 mb-4">',
        rareItems = '<h2 id="rareLabel">Rare</h2><div class="flex flex-wrap gap-4 mb-4">',
        veryRareItems = '<h2 id="veryRareLabel">Very Rare</h2><div class="flex flex-wrap gap-4 mb-4">',
        legendaryItems = '<h2 id="legendaryLabel">Legendary</h2><div class="flex flex-wrap gap-4 mb-4">'

    interface SelectedItems {
        potato: any;
        hat: any;
        accessory: any;
        toy: any;
        shoes: any;
    }

    let selectedItems: SelectedItems = {
        potato: null,
        hat: null,
        accessory: null,
        toy: null,
        shoes: null
    }

    availableItems.forEach(item => {

        let itemHTML = `<div class="w-14 h-14 text-center align-middle item ${item.rarity} ${item.type}">`

        if(item.found) {
            itemHTML += `<img class="thumbnail cursor-pointer m-1 w-12" src="${item.thumbnail}" alt="${item.name}" />`
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

    let prompt = ''

    if(firstTime) {
        prompt = '<p>Many children in our research did not understand how probability works. They hoped that the more they spent on loot boxes, the more likely they were to find a rare item. But this is not how it works. Previous spending on loot boxes does not improve your chances of finding a rare item next time.</p>'
    }

    firstTime = false
    
    inventoryWrapper!.innerHTML =  
        `${prompt}
        <div class="flex flex-row">
            <div class="w-1/2">
                <div class="flex gap-4 mb-4">
                    <button id="allItems" class="rounded-4 w-16 h-16">All</button>
                    <button id="hatItems" class="rounded-4 w-16 h-16">Hats</button>
                    <button id="shoeItems" class="rounded-4 w-16 h-16">Shoes</button>
                    <button id="toyItems" class="rounded-4 w-16 h-16">Toys</button>
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
                <img id="selectedToy" class="absolute top-0 left-0" />
            </div>
        </div>
        <button id="inventoryCloseBtn" class="mx-auto btn-game">Close</button>`

    let thumbnails = inventoryWrapper!.getElementsByClassName('thumbnail')

    const showCase = document.querySelector<HTMLDivElement>('#potato-showcase')

    selectedItems.potato ? showCase!.querySelector<HTMLDivElement>('#selectedPotato')?.setAttribute('src', selectedItems.potato?.image) : null
    selectedItems.hat ? showCase!.querySelector<HTMLDivElement>('#selectedHat')?.setAttribute('src', selectedItems.hat?.image) : null
    selectedItems.accessory ? showCase!.querySelector<HTMLDivElement>('#selectedAccessory')?.setAttribute('src', selectedItems.toy?.image) : null
    selectedItems.shoes ? showCase!.querySelector<HTMLDivElement>('#selectedShoes')?.setAttribute('src', selectedItems.shoes?.image) : null
    selectedItems.toy ? showCase!.querySelector<HTMLDivElement>('#selectedShoes')?.setAttribute('src', selectedItems.toy?.image) : null

    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', (event) => {
            const item = selectItem((<HTMLImageElement>event.target)!.alt)

            const stage = Utils.getContentDocument(document.querySelector<HTMLDivElement>('#stage'))

            switch(item.type) {
                case 'potato':
                    showCase!.querySelector<HTMLDivElement>('#selectedPotato')?.setAttribute('src', item.image)
                    stage.querySelector('image#selectedPotato').setAttribute('xlink:href', item.image)
                    break
                case 'hat':
                    showCase!.querySelector<HTMLDivElement>('#selectedHat')?.setAttribute('src', item.image)
                    stage.querySelector('image#selectedHat').setAttribute('xlink:href', item.image)
                    break
                case 'toy':
                    showCase!.querySelector<HTMLDivElement>('#selectedToy')?.setAttribute('src', item.image)
                    stage.querySelector('image#selectedToy').setAttribute('xlink:href', item.image)
                    break
                case 'shoes':
                    showCase!.querySelector<HTMLDivElement>('#selectedShoes')?.setAttribute('src', item.image)
                    stage.querySelector('image#selectedShoes').setAttribute('xlink:href', item.image)
                    break
                case 'accessory':
                    showCase!.querySelector<HTMLDivElement>('#selectedAccessory')?.setAttribute('src', item.image)
                    stage.querySelector('image#selectedAccessory').setAttribute('xlink:href', item.image)
                    break
            }
        })
    }

    inventoryWrapper!.querySelector<HTMLDivElement>('#allItems')!.addEventListener('click', () => {
        let items = inventoryWrapper!.getElementsByClassName('item')
        toggleItemType(items, 'item')
    })

    inventoryWrapper!.querySelector<HTMLDivElement>('#hatItems')!.addEventListener('click', () => {
        let items = inventoryWrapper!.getElementsByClassName('item')
        toggleItemType(items, 'hat')
    })

    inventoryWrapper!.querySelector<HTMLDivElement>('#shoeItems')!.addEventListener('click', () => {
        let items = inventoryWrapper!.getElementsByClassName('item')
        toggleItemType(items, 'shoes')
    })

    inventoryWrapper!.querySelector<HTMLDivElement>('#accessoriesItems')!.addEventListener('click', () => {
        let items = inventoryWrapper!.getElementsByClassName('item')
        toggleItemType(items, 'accessory')
    })

    inventoryWrapper!.querySelector<HTMLDivElement>('#toyItems')!.addEventListener('click', () => {
        let items = inventoryWrapper!.getElementsByClassName('item')
        toggleItemType(items, 'toy')
    })

    inventoryWrapper!.querySelector<HTMLDivElement>('#inventoryCloseBtn')!.addEventListener('click', () => {
        inventoryWrapper!.classList.toggle('hidden')
        document.querySelector<HTMLDivElement>('#modals')!.classList.toggle('-z-50')
    })
}

function toggleItemType(items: HTMLCollectionOf<Element>, type: string) {

    for (let i = 0; i < items.length; i++) {
        if(items[i].classList.contains(type)){
            items[i].classList.remove('hidden')
        }
        else {
            items[i].classList.add('hidden')
        }
    }

    const commonCount = document.querySelectorAll('.common:not(.hidden)')!.length,
          rareCount = document.querySelectorAll('.rare:not(.hidden)')!.length,
          veryRareCount = document.querySelectorAll('.veryRare:not(.hidden)')!.length,
          legendaryCount = document.querySelectorAll('.legendary:not(.hidden)')!.length

    commonCount === 0 ? document.querySelector('#commonLabel')!.classList.add('hidden') : document.querySelector('#commonLabel')!.classList.remove('hidden')
    rareCount === 0 ? document.querySelector('#rareLabel')!.classList.add('hidden') : document.querySelector('#rareLabel')!.classList.remove('hidden')
    veryRareCount === 0 ? document.querySelector('#veryRareLabel')!.classList.add('hidden') : document.querySelector('#veryRareLabel')!.classList.remove('hidden')
    legendaryCount === 0 ? document.querySelector('#legendaryLabel')!.classList.add('hidden') : document.querySelector('#legendaryLabel')!.classList.remove('hidden')
}