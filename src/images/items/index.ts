import balloon from './accessory-balloon.png'
import bowTie from './accessory-bowtie.png'
import burger from './accessory-burger.png'
import coffee from './accessory-coffee-cup.png'
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
        type: Type.Accessory,
        rarity: Rarity.Rare,
        image: balloon
    },
    {
        type: Type.Accessory,
        rarity: Rarity.VeryRare,
        image: bowTie
    },
    {
        type: Type.Accessory,
        rarity: Rarity.Legendary,
        image: burger
    },
    {
        type: Type.Accessory,
        rarity: Rarity.Rare,
        image: coffee
    },
    {
        type: Type.Accessory,
        rarity: Rarity.Common,
        image: handbag
    },
    {
        type: Type.Accessory,
        rarity: Rarity.Common,
        image: newspaper
    },
    {
        type: Type.Accessory,
        rarity: Rarity.Common,
        image: smartphone
    },
    {
        type: Type.Accessory,
        rarity: Rarity.Common,
        image: sunglasses
    },
    {
        type: Type.Hat,
        rarity: Rarity.Common,
        image: baseball
    },
    {
        type: Type.Hat,
        rarity: Rarity.VeryRare,
        image: bunnyEars
    },
    {
        type: Type.Hat,
        rarity: Rarity.VeryRare,
        image: headband
    },
    {
        type: Type.Hat,
        rarity: Rarity.Common,
        image: plainRed
    },
    {
        type: Type.Hat,
        rarity: Rarity.Rare,
        image: sunVisor
    },
    {
        type: Type.Hat,
        rarity: Rarity.Legendary,
        image: tinCan
    },
    {
        type: Type.Hat,
        rarity: Rarity.VeryRare,
        image: topHat
    },
    {
        type: Type.Hat,
        rarity: Rarity.Common,
        image: woolly
    },
    {
        type: Type.Potato,
        rarity: Rarity.Legendary,
        image: gold
    },
    {
        type: Type.Potato,
        rarity: Rarity.None,
        image: normal
    },
    {
        type: Type.Potato,
        rarity: Rarity.VeryRare,
        image: spotty
    },
    {
        type: Type.Shoes,
        rarity: Rarity.Rare,
        image: bejewelled
    },
    {
        type: Type.Shoes,
        rarity: Rarity.Rare,
        image: clown
    },
    {
        type: Type.Shoes,
        rarity: Rarity.Legendary,
        image: neonDance
    },
    {
        type: Type.Shoes,
        rarity: Rarity.Common,
        image: plainBrown
    },
    {
        type: Type.Shoes,
        rarity: Rarity.VeryRare,
        image: rainbow
    },
    {
        type: Type.Shoes,
        rarity: Rarity.Common,
        image: shinyWork
    },
    {
        type: Type.Toy,
        rarity: Rarity.Rare,
        image: miniPotato
    },
    {
        type: Type.Toy,
        rarity: Rarity.Rare,
        image: nurseryBook
    },
    {
        type: Type.Toy,
        rarity: Rarity.Rare,
        image: teddyBear
    }
]