import * as backgrounds from './../../images/inventory/'
import * as items from './../../images/items/'

export function dig(x: number, y: number) {
    const digAnimation = document.querySelector<HTMLDivElement>('#dig-animation')

    digAnimation!.style.left = `${x-224}px`
    digAnimation!.style.top = `${y-224}px`
    digAnimation!.classList.toggle('hidden')

    setTimeout(() => { digAnimation!.classList.toggle('hidden') }, 2000)

    console.log(backgrounds.veryRare)
    console.log(items.balloon)
}