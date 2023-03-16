import { items } from './../../images/items/'

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

const availableItems = items.map(item => ({ ...item, selected: false, found: false }))

const itemsRemaining = {
    common: availableItems.filter(item => item && item.rarity === 'common'),
    rare: availableItems.filter(item => item && item.rarity === 'rare'),
    veryRare: availableItems.filter(item => item && item.rarity === 'veryRare'),
    legendary: availableItems.filter(item => item && item.rarity === 'legendary')
}

export { availableItems }

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
            
            availableItems[availableItems.indexOf(find)].found = true

            document.querySelector<HTMLDivElement>('#foundItem #foundItemName')!.innerText = `${find.name} ${find.type}`
            document.querySelector<HTMLDivElement>('#foundItem #foundItemImage')!.setAttribute('alt', find.name)
            document.querySelector<HTMLDivElement>('#foundItem #foundItemImage')!.setAttribute('src', find.thumbnail)
            
            document.querySelector<HTMLDivElement>('#foundItem')!.classList.toggle('hidden')
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