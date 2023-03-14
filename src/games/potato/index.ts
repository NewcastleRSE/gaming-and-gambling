import * as backgrounds from './../../images/inventory/'
import * as Modals from './../../modals'
import items from './../../images/items/'

function itemProbability() {
    var chances = [
        ...Array(50).fill('common'),
        ...Array(30).fill('rare'),
        ...Array(15).fill('veryRare'),
        ...Array(5).fill('legendary')
    ]
    var idx = Math.floor(Math.random() * chances.length)
    return chances[idx]
  }

const availableItems = items.filter(item => item.rarity !== 'none')

const itemsRemaining = {
    common: availableItems.filter(item => item && item.rarity === 'common'),
    rare: availableItems.filter(item => item && item.rarity === 'rare'),
    veryRare: availableItems.filter(item => item && item.rarity === 'veryRare'),
    legendary: availableItems.filter(item => item && item.rarity === 'legendary')
}

export function dig(x: number, y: number) {
    const digAnimation = document.querySelector<HTMLDivElement>('#dig-animation')

    digAnimation!.style.left = `${x-224}px`
    digAnimation!.style.top = `${y-224}px`
    digAnimation!.classList.toggle('hidden')

    setTimeout(() => { 
        digAnimation!.classList.toggle('hidden')

        const foundItemRarity = itemProbability()

        if(itemsRemaining[foundItemRarity].length) {
            const find = itemsRemaining[foundItemRarity].pop()
            console.log(find)
        }    
        else {
            console.log({
                common: itemsRemaining.common.length,
                rare: itemsRemaining.rare.length,
                veryRare: itemsRemaining.veryRare.length,
                legendary: itemsRemaining.legendary.length,
            })
        }
    }, 500)
}