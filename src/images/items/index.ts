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
        image: balloon,
        thumbnail: balloonThumbnail
    },
    {
        name: 'bow tie',
        type: Type.Accessory,
        rarity: Rarity.VeryRare,
        image: bowTie,
        thumbnail: bowTieThumbnail
    },
    {
        name: 'burger',
        type: Type.Accessory,
        rarity: Rarity.Legendary,
        image: burger,
        thumbnail: burgerThumbnail
    },
    {
        name: 'coffee cup',
        type: Type.Accessory,
        rarity: Rarity.Rare,
        image: coffeeCup,
        thumbnail: coffeeCupThumbnail
    },
    {
        name: 'handbag',
        type: Type.Accessory,
        rarity: Rarity.Common,
        image: handbag,
        thumbnail: handbagThumbnail
    },
    {
        name: 'newspaper',
        type: Type.Accessory,
        rarity: Rarity.Common,
        image: newspaper,
        thumbnail: newspaperThumbnail
    },
    {
        name: 'smartphone',
        type: Type.Accessory,
        rarity: Rarity.Common,
        image: smartphone,
        thumbnail: smartphoneThumbnail
    },
    {
        name: 'sunglasses',
        type: Type.Accessory,
        rarity: Rarity.Common,
        image: sunglasses,
        thumbnail: sunglassesThumbnail
    },
    {
        name: 'baseball',
        type: Type.Hat,
        rarity: Rarity.Common,
        image: baseball,
        thumbnail: baseballThumbnail
    },
    {
        name: 'bunny ears',
        type: Type.Hat,
        rarity: Rarity.VeryRare,
        image: bunnyEars,
        thumbnail: bunnyEarsThumbnail
    },
    {
        name: 'headband',
        type: Type.Hat,
        rarity: Rarity.VeryRare,
        image: headband,
        thumbnail: headbandThumbnail
    },
    {
        name: 'plain red',
        type: Type.Hat,
        rarity: Rarity.Common,
        image: plainRed,
        thumbnail: plainRedThumbnail
    },
    {
        name: 'sun visor',
        type: Type.Hat,
        rarity: Rarity.Rare,
        image: sunVisor,
        thumbnail: sunVisorThumbnail
    },
    {
        name: 'tin can',
        type: Type.Hat,
        rarity: Rarity.Legendary,
        image: tinCan,
        thumbnail: tinCanThumbnail
    },
    {
        name: 'top',
        type: Type.Hat,
        rarity: Rarity.VeryRare,
        image: topHat,
        thumbnail: topHatThumbnail
    },
    {
        name: 'woolly',
        type: Type.Hat,
        rarity: Rarity.Common,
        image: woolly,
        thumbnail: woollyThumbnail
    },
    {
        name: 'gold',
        type: Type.Potato,
        rarity: Rarity.Legendary,
        image: gold,
        thumbnail: null
    },
    {
        name: 'normal',
        type: Type.Potato,
        rarity: Rarity.None,
        image: normal,
        thumbnail: null
    },
    {
        name: 'spotty',
        type: Type.Potato,
        rarity: Rarity.VeryRare,
        image: spotty,
        thumbnail: null
    },
    {
        name: 'bejewelled',
        type: Type.Shoes,
        rarity: Rarity.Rare,
        image: bejewelled,
        thumbnail: bejewelledThumbnail
    },
    {
        name: 'clown',
        type: Type.Shoes,
        rarity: Rarity.Rare,
        image: clown,
        thumbnail: clownThumbnail
    },
    {
        name: 'neon dance',
        type: Type.Shoes,
        rarity: Rarity.Legendary,
        image: neonDance,
        thumbnail: neonDanceThumbnail
    },
    {
        name: 'plain brown',
        type: Type.Shoes,
        rarity: Rarity.Common,
        image: plainBrown,
        thumbnail: plainBrownThumbnail
    },
    {
        name: 'rainbow',
        type: Type.Shoes,
        rarity: Rarity.VeryRare,
        image: rainbow,
        thumbnail: rainbowThumbnail
    },
    {
        name: 'shiny work',
        type: Type.Shoes,
        rarity: Rarity.Common,
        image: shinyWork,
        thumbnail: shinyWorkThumbnail
    },
    {
        name: 'mini potato',
        type: Type.Toy,
        rarity: Rarity.Rare,
        image: miniPotato,
        thumbnail: miniPotatoThumbnail
    },
    {
        name: 'nursery book',
        type: Type.Toy,
        rarity: Rarity.Rare,
        image: nurseryBook,
        thumbnail: nurseryBookThumbnail
    },
    {
        name: 'teddy bear',
        type: Type.Toy,
        rarity: Rarity.Rare,
        image: teddyBear,
        thumbnail: teddyBearThumbnail
    }
]