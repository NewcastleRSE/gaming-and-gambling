import { items } from './../../images/items/'
import { updateClickCount } from '../../footer'
import { playDig, playFirework } from './../../games/potato/sound'
import Timer from 'easytimer.js'

let itemsFoundCount = 0,
    gameStarted = false
const timer = new Timer()

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

const defaultPotatoIndex = availableItems.findIndex((item) => item.name === 'normal')
availableItems[defaultPotatoIndex].selected = true

interface ItemsRemaining {
    common: any;
    rare: any;
    veryRare: any;
    legendary: any;
}

const itemsRemaining: ItemsRemaining = {
    common: availableItems.filter(item => item && item.rarity === 'common'),
    rare: availableItems.filter(item => item && item.rarity === 'rare'),
    veryRare: availableItems.filter(item => item && item.rarity === 'veryRare'),
    legendary: availableItems.filter(item => item && item.rarity === 'legendary')
}

type ObjectKey = keyof typeof itemsRemaining

export { availableItems }

export function dig(x: number, y: number) {

    // If game hasn't started, start the clock
    if(!gameStarted) {
        timer.start()
        gameStarted = true
    }
    
    playDig()
    const digAnimation = document.querySelector<HTMLDivElement>('#dig-animation')

    digAnimation!.style.left = `${x-224}px`
    digAnimation!.style.top = `${y-224}px`
    digAnimation!.classList.toggle('hidden')

    setTimeout(() => { 
        digAnimation!.classList.toggle('hidden')

        const foundItemRarity: ObjectKey = itemProbability()

        if(itemsRemaining[foundItemRarity].length) {
            const find = itemsRemaining[foundItemRarity].pop()

            itemsFoundCount++
            
            availableItems[availableItems.indexOf(find)].found = true

            const foundName = find.name.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1")
            const rarity = find.rarity.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1")

            interface RarityColors {
                common: any;
                rare: any;
                veryRare: any;
                legendary: any;
            }

            const rarityColors: RarityColors = {
                common: '#65EDF3',
                rare: '#BBDC3E',
                veryRare: '#F099FF',
                legendary: '#F6B777'
            }

            type ObjectKey = keyof typeof rarityColors

            const rarityName: ObjectKey = find.rarity

            document.querySelector<HTMLDivElement>('#foundItem')!.setAttribute('style', `border-color: ${rarityColors[rarityName]}`)

            let message = `You found the <span class="${find.rarity}">${rarity}</span> ${foundName} ${find.type}`

            let timeSpent = `You've been playing for ${timer.getTimeValues().minutes} minutes ${timer.getTimeValues().seconds} seconds now and you've unlocked ${itemsFoundCount} item${itemsFoundCount > 1 ? 's' : ''}. With the in-game odds, you'll need to click at least X number of times to get the golden potato!`

            let prompt = ''

            switch (itemsFoundCount) {
                case 2: 
                    prompt = 'Did you know that you have a very small chance of finding the rarest items in a loot box? It can sometimes be as low as less than 1% chance of finding the rarest item each time you open a loot box.'
                    break;
                case 5:
                    prompt = 'Did you know that loot boxes are designed to make you want to open another one? They often use flashing lights and exciting sounds to build suspense and surprise.'
                    break;
                case 10:
                    prompt = 'Some young people find it very difficult to stop buying loot boxes, especially if they are trying to win a particular item. One young person told us: “in my head I was like \'stop\'. My guts were saying \'stop\'. Everything was saying \'stop\', but my brain wasn\'t. My brain was like \'keep opening\'. It was hard. It was like when you\'re addicted to something. […]. It was hard to stop.'
                    break;
                case 12:
                    prompt = 'Children and young people told us that they often regretted the money they spent on loot boxes.'
                    break;
                default:
                    break; 
            }

            if(find.name === 'gold') {
                message = `You did it! It only took you ${0} number of clicks and ${0} amount of time to win the golden potato. How does that feel?`
            }

            document.querySelector<HTMLDivElement>('#foundItem #foundItemMessage')!.innerHTML = message

            if(itemsFoundCount > 1) {
                document.querySelector<HTMLDivElement>('#foundItem #gameTime')!.innerHTML = timeSpent
            }

            document.querySelector<HTMLDivElement>('#foundItem #foundItemPrompt')!.innerHTML = prompt
            document.querySelector<HTMLDivElement>('#foundItem #foundItemImage')!.setAttribute('alt', find.name)
            document.querySelector<HTMLDivElement>('#foundItem #foundItemImage')!.setAttribute('src', find.thumbnail)
            playFirework()
            document.querySelector<HTMLDivElement>('#foundItem')!.classList.toggle('hidden')

            updateClickCount(itemsFoundCount)
        }    
        else {
            console.log({
                common: itemsRemaining.common.length,
                rare: itemsRemaining.rare.length,
                veryRare: itemsRemaining.veryRare.length,
                legendary: itemsRemaining.legendary.length,
            })
        }
    }, 5000)
}

export function selectItem(name: string) {
    const selectedIndex = availableItems.findIndex((item) => item.name === name)

    for(let i = 0; i < availableItems.length; i++) {
        if(availableItems[i].type === availableItems[selectedIndex]?.type)
        availableItems[i].selected = false
    }

    availableItems[selectedIndex].selected = true
    return availableItems[selectedIndex]
}