import balloon from './accessory-balloon.png'
import balloonThumbnail from './accessory-balloon-thumbnail.png'
import bowTie from './accessory-bowtie.png'
import bowTieThumbnail  from './accessory-bowtie-thumbnail.png'
import burger from './accessory-burger.png'
import burgerThumbnail  from './accessory-burger-thumbnail.png'
import coffeeCup from './accessory-coffee-cup.png'
import coffeeCupThumbnail  from './accessory-coffee-cup-thumbnail.png'
import handbag from './accessory-handbag.png'
import handbagThumbnail  from './accessory-handbag-thumbnail.png'
import newspaper from './accessory-newspaper.png'
import newspaperThumbnail  from './accessory-newspaper-thumbnail.png'
import smartphone from './accessory-smartphone.png'
import smartphoneThumbnail  from './accessory-smartphone-thumbnail.png'
import sunglasses from './accessory-sunglasses.png'
import sunglassesThumbnail  from './accessory-sunglasses-thumbnail.png'
import baseball from './hat-baseball.png'
import baseballThumbnail  from './hat-baseball-thumbnail.png'
import bunnyEars from './hat-bunny-ears.png'
import bunnyEarsThumbnail  from './hat-bunny-ears-thumbnail.png'
import headband from './hat-flower-headband.png'
import headbandThumbnail  from './hat-flower-headband-thumbnail.png'
import plainRed from './hat-plain-red.png'
import plainRedThumbnail  from './hat-plain-red-thumbnail.png'
import sunVisor from './hat-sun-visor.png'
import sunVisorThumbnail  from './hat-sun-visor-thumbnail.png'
import tinCan from './hat-tin-can.png'
import tinCanThumbnail  from './hat-tin-can-thumbnail.png'
import topHat from './hat-top-hat.png'
import topHatThumbnail  from './hat-top-hat-thumbnail.png'
import woolly from './hat-woolly.png'
import woollyThumbnail  from './hat-woolly-thumbnail.png'
import gold from './potato-gold.png'
import normal from './potato-normal.png'
import spotty from './potato-spotty.png'
import bejewelled from './shoes-bejewelled.png'
import bejewelledThumbnail  from './shoes-bejewelled-thumbnail.png'
import clown from './shoes-clown.png'
import clownThumbnail  from './shoes-clown-thumbnail.png'
import neonDance from './shoes-neon-dance.png'
import neonDanceThumbnail  from './shoes-neon-dance-thumbnail.png'
import plainBrown from './shoes-plain-brown.png'
import plainBrownThumbnail  from './shoes-plain-brown-thumbnail.png'
import rainbow from './shoes-rainbow.png'
import rainbowThumbnail  from './shoes-rainbow-thumbnail.png'
import shinyWork from './shoes-shiny-work.png'
import shinyWorkThumbnail  from './shoes-shiny-work-thumbnail.png'
import miniPotato from './toy-mini-potato.png'
import miniPotatoThumbnail  from './toy-mini-potato-thumbnail.png'
import nurseryBook from './toy-nursery-book.png'
import nurseryBookThumbnail  from './toy-nursery-book-thumbnail.png'
import teddyBear from './toy-teddy-bear.png'
import teddyBearThumbnail  from './toy-teddy-bear-thumbnail.png'

export enum Rarities {
    None='none',
    Common='common',
    Rare='rare',
    VeryRare='veryRare',
    Legendary='legendary'
}

export enum Types {
    Accessory='accessory',
    Hat='hat',
    Potato='potato',
    Shoes='shoes',
    Toy='toy'
}

export const items = [
    {
        name: 'balloon',
        type: Types.Accessory,
        rarity: Rarities.Rare,
        image: balloon,
        thumbnail: balloonThumbnail
    },
    {
        name: 'bowTie',
        type: Types.Accessory,
        rarity: Rarities.VeryRare,
        image: bowTie,
        thumbnail: bowTieThumbnail
    },
    {
        name: 'burger',
        type: Types.Accessory,
        rarity: Rarities.Legendary,
        image: burger,
        thumbnail: burgerThumbnail
    },
    {
        name: 'coffeeCup',
        type: Types.Accessory,
        rarity: Rarities.Rare,
        image: coffeeCup,
        thumbnail: coffeeCupThumbnail
    },
    {
        name: 'handbag',
        type: Types.Accessory,
        rarity: Rarities.Common,
        image: handbag,
        thumbnail: handbagThumbnail
    },
    {
        name: 'newspaper',
        type: Types.Accessory,
        rarity: Rarities.Common,
        image: newspaper,
        thumbnail: newspaperThumbnail
    },
    {
        name: 'smartphone',
        type: Types.Accessory,
        rarity: Rarities.Common,
        image: smartphone,
        thumbnail: smartphoneThumbnail
    },
    {
        name: 'sunglasses',
        type: Types.Accessory,
        rarity: Rarities.Common,
        image: sunglasses,
        thumbnail: sunglassesThumbnail
    },
    {
        name: 'baseball',
        type: Types.Hat,
        rarity: Rarities.Common,
        image: baseball,
        thumbnail: baseballThumbnail
    },
    {
        name: 'bunnyEars',
        type: Types.Hat,
        rarity: Rarities.VeryRare,
        image: bunnyEars,
        thumbnail: bunnyEarsThumbnail
    },
    {
        name: 'headband',
        type: Types.Hat,
        rarity: Rarities.VeryRare,
        image: headband,
        thumbnail: headbandThumbnail
    },
    {
        name: 'plainRed',
        type: Types.Hat,
        rarity: Rarities.Common,
        image: plainRed,
        thumbnail: plainRedThumbnail
    },
    {
        name: 'sunVisor',
        type: Types.Hat,
        rarity: Rarities.Rare,
        image: sunVisor,
        thumbnail: sunVisorThumbnail
    },
    {
        name: 'tinCan',
        type: Types.Hat,
        rarity: Rarities.Legendary,
        image: tinCan,
        thumbnail: tinCanThumbnail
    },
    {
        name: 'top',
        type: Types.Hat,
        rarity: Rarities.VeryRare,
        image: topHat,
        thumbnail: topHatThumbnail
    },
    {
        name: 'woolly',
        type: Types.Hat,
        rarity: Rarities.Common,
        image: woolly,
        thumbnail: woollyThumbnail
    },
    {
        name: 'gold',
        type: Types.Potato,
        rarity: Rarities.Legendary,
        image: gold,
        thumbnail: gold
    },
    {
        name: 'normal',
        type: Types.Potato,
        rarity: Rarities.None,
        image: normal,
        thumbnail: normal
    },
    {
        name: 'spotty',
        type: Types.Potato,
        rarity: Rarities.VeryRare,
        image: spotty,
        thumbnail: spotty
    },
    {
        name: 'bejewelled',
        type: Types.Shoes,
        rarity: Rarities.Rare,
        image: bejewelled,
        thumbnail: bejewelledThumbnail
    },
    {
        name: 'clown',
        type: Types.Shoes,
        rarity: Rarities.Rare,
        image: clown,
        thumbnail: clownThumbnail
    },
    {
        name: 'neonDance',
        type: Types.Shoes,
        rarity: Rarities.Legendary,
        image: neonDance,
        thumbnail: neonDanceThumbnail
    },
    {
        name: 'plainBrown',
        type: Types.Shoes,
        rarity: Rarities.Common,
        image: plainBrown,
        thumbnail: plainBrownThumbnail
    },
    {
        name: 'rainbow',
        type: Types.Shoes,
        rarity: Rarities.VeryRare,
        image: rainbow,
        thumbnail: rainbowThumbnail
    },
    {
        name: 'shinyWork',
        type: Types.Shoes,
        rarity: Rarities.Common,
        image: shinyWork,
        thumbnail: shinyWorkThumbnail
    },
    {
        name: 'miniPotato',
        type: Types.Toy,
        rarity: Rarities.Rare,
        image: miniPotato,
        thumbnail: miniPotatoThumbnail
    },
    {
        name: 'nurseryBook',
        type: Types.Toy,
        rarity: Rarities.Rare,
        image: nurseryBook,
        thumbnail: nurseryBookThumbnail
    },
    {
        name: 'teddyBear',
        type: Types.Toy,
        rarity: Rarities.Rare,
        image: teddyBear,
        thumbnail: teddyBearThumbnail
    }
]