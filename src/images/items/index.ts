import balloon from './accessory-balloon.png'
import bowTie from './accessory-bowtie.png'
import burger from './accessory-burger.png'
import coffeeCup from './accessory-coffee-cup.png'
import handbag from './accessory-handbag.png'
import newspaper from './accessory-newspaper.png'
import smartphone from './accessory-smartphone.png'
import sunglasses from './accessory-sunglasses.png'
import baseball from './hat-baseball.png'
import bunnyEars from './hat-bunny-ears.png'
import headband from './hat-flower-headband.png'
import plainRed from './hat-plain-red.png'
import sunVisor from './hat-sun-visor.png'
import tinCan from './hat-tin-can.png'
import topHat from './hat-top-hat.png'
import woolly from './hat-woolly.png'
import gold from './potato-gold.png'
import normal from './potato-normal.png'
import spotty from './potato-spotty.png'
import bejewelled from './shoes-bejewelled.png'
import clown from './shoes-clown.png'
import neonDance from './shoes-neon-dance.png'
import plainBrown from './shoes-plain-brown.png'
import rainbow from './shoes-rainbow.png'
import shinyWork from './shoes-shiny-work.png'
import miniPotato from './toy-mini-potato.png'
import nurseryBook from './toy-nursery-book.png'
import teddyBear from './toy-teddy-bear.png'

enum Rarity {
    None='none',
    Common='common',
    Rare='rare',
    VeryRare='veryRare',
    Legendary='legendary'
}

enum Type {
    Accessory='accessory',
    Hat='hat',
    Potato='potato',
    Shoes='shoes',
    Toy='toy'
}

export default [
    {
        name: 'balloon',
        type: Type.Accessory,
        rarity: Rarity.Rare,
        image: balloon
    },
    {
        name: 'bow tie',
        type: Type.Accessory,
        rarity: Rarity.VeryRare,
        image: bowTie
    },
    {
        name: 'burger',
        type: Type.Accessory,
        rarity: Rarity.Legendary,
        image: burger
    },
    {
        name: 'coffee cup',
        type: Type.Accessory,
        rarity: Rarity.Rare,
        image: coffeeCup
    },
    {
        name: 'handbag',
        type: Type.Accessory,
        rarity: Rarity.Common,
        image: handbag
    },
    {
        name: 'newspaper',
        type: Type.Accessory,
        rarity: Rarity.Common,
        image: newspaper
    },
    {
        name: 'smartphone',
        type: Type.Accessory,
        rarity: Rarity.Common,
        image: smartphone
    },
    {
        name: 'sunglesses',
        type: Type.Accessory,
        rarity: Rarity.Common,
        image: sunglasses
    },
    {
        name: 'baseball',
        type: Type.Hat,
        rarity: Rarity.Common,
        image: baseball
    },
    {
        name: 'bunny ears',
        type: Type.Hat,
        rarity: Rarity.VeryRare,
        image: bunnyEars
    },
    {
        name: 'headband',
        type: Type.Hat,
        rarity: Rarity.VeryRare,
        image: headband
    },
    {
        name: 'plain red',
        type: Type.Hat,
        rarity: Rarity.Common,
        image: plainRed
    },
    {
        name: 'sun visor',
        type: Type.Hat,
        rarity: Rarity.Rare,
        image: sunVisor
    },
    {
        name: 'tin can',
        type: Type.Hat,
        rarity: Rarity.Legendary,
        image: tinCan
    },
    {
        name: 'top',
        type: Type.Hat,
        rarity: Rarity.VeryRare,
        image: topHat
    },
    {
        name: 'woolly',
        type: Type.Hat,
        rarity: Rarity.Common,
        image: woolly
    },
    {
        name: 'gold',
        type: Type.Potato,
        rarity: Rarity.Legendary,
        image: gold
    },
    {
        name: 'normal',
        type: Type.Potato,
        rarity: Rarity.None,
        image: normal
    },
    {
        name: 'spotty',
        type: Type.Potato,
        rarity: Rarity.VeryRare,
        image: spotty
    },
    {
        name: 'bejewelled',
        type: Type.Shoes,
        rarity: Rarity.Rare,
        image: bejewelled
    },
    {
        name: 'clown',
        type: Type.Shoes,
        rarity: Rarity.Rare,
        image: clown
    },
    {
        name: 'neon dance',
        type: Type.Shoes,
        rarity: Rarity.Legendary,
        image: neonDance
    },
    {
        name: 'plain brown',
        type: Type.Shoes,
        rarity: Rarity.Common,
        image: plainBrown
    },
    {
        name: 'rainbow',
        type: Type.Shoes,
        rarity: Rarity.VeryRare,
        image: rainbow
    },
    {
        name: 'shiny work',
        type: Type.Shoes,
        rarity: Rarity.Common,
        image: shinyWork
    },
    {
        name: 'mini potato',
        type: Type.Toy,
        rarity: Rarity.Rare,
        image: miniPotato
    },
    {
        name: 'nursery book',
        type: Type.Toy,
        rarity: Rarity.Rare,
        image: nurseryBook
    },
    {
        name: 'teddy bear',
        type: Type.Toy,
        rarity: Rarity.Rare,
        image: teddyBear
    }
]