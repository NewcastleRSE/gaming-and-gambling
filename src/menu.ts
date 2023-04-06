import home from './images/buttons/home.png'
import game from './images/buttons/shovel.png'
import inventoryBtn from './images/buttons/case.png'
import info from './images/buttons/info.png'
import sound from './images/buttons/speaker.png'
import odds from './images/buttons/tree.png'

import { inventory } from './games/potato/inventory'
import { toggleMusic } from './games/potato/sound'

import * as Potato from './games/potato'

export function init() {
    document.querySelector<HTMLDivElement>('#menu')!.innerHTML = `
    <div class="grid place-items-center gap-4 grid-cols-6">
        <button id="homeBtn" class="rounded-4 w-16 h-16 background-cover" style="background-image: url('${home}')" />
        <button id="gameBtn" class="rounded-4 w-16 h-16 background-cover" style="background-image: url('${game}')" />
        <button id="inventoryBtn" class="rounded-4 w-16 h-16 background-cover" style="background-image: url('${inventoryBtn}')" />
        <button id="infoBtn" class="rounded-4 w-16 h-16 background-cover" style="background-image: url('${info}')" />
        <button id="soundBtn" class="rounded-4 w-16 h-16 background-cover" style="background-image: url('${sound}')" />
        <button id="oddsBtn" class="rounded-4 w-16 h-16 background-cover" style="background-image: url('${odds}')" />
    </div>`

    const menu = document.querySelector<HTMLDivElement>('#menu')

    menu!.querySelector<HTMLDivElement>('#homeBtn')!.addEventListener('click', () => {
        console.log('home')
    })

    menu!.querySelector<HTMLDivElement>('#gameBtn')!.addEventListener('click', () => {
        console.log('game')
    })

    menu!.querySelector<HTMLDivElement>('#inventoryBtn')!.addEventListener('click', () => {
        inventory()

        let potato = Potato.availableItems.find(item => item.type === 'potato' && item.selected)

        if(!potato) {
            potato = Potato.availableItems.find(item => item.rarity === 'none')
        }

        if(potato) {
            document.querySelector<HTMLDivElement>('#potatoBackground')?.setAttribute('src', potato.image)
        }
        
        document.querySelector<HTMLDivElement>('#inventory')!.classList.toggle('hidden')
    })

    menu!.querySelector<HTMLDivElement>('#infoBtn')!.addEventListener('click', () => {
        document.querySelector<HTMLDivElement>('#info')!.classList.toggle('hidden')
    })

    menu!.querySelector<HTMLDivElement>('#soundBtn')!.addEventListener('click', () => {
        toggleMusic()
    })

    menu!.querySelector<HTMLDivElement>('#oddsBtn')!.addEventListener('click', () => {
        document.querySelector<HTMLDivElement>('#odds')!.classList.toggle('hidden')
    })
}