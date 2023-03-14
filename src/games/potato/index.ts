import * as backgrounds from './../../images/inventory/'
import items from './../../images/items/'

function shuffle(array: Array<any>) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

const sequence = shuffle([...items.filter(item => item.rarity !== 'none'), ...Array(73).fill(null)])

const itemsRemaining = {
    common: sequence.filter(item => item && item.rarity === 'common').length,
    rare: sequence.filter(item => item && item.rarity === 'rare').length,
    veryRare: sequence.filter(item => item && item.rarity === 'veryRare').length,
    legendary: sequence.filter(item => item && item.rarity === 'legendary').length
}

export function dig(x: number, y: number) {
    const digAnimation = document.querySelector<HTMLDivElement>('#dig-animation')

    digAnimation!.style.left = `${x-224}px`
    digAnimation!.style.top = `${y-224}px`
    digAnimation!.classList.toggle('hidden')

    setTimeout(() => { 
        digAnimation!.classList.toggle('hidden')

        // Get the next rarity value
        const find = sequence.pop()

        if(find) {
            itemsRemaining[find.rarity] = itemsRemaining[find.rarity] - 1
            console.log(find)
        }       
        
        console.log(`Next Item: ${sequence[sequence.length-1].image} Chances left: ${sequence.length}`)
    
    }, 500)
}