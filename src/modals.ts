import * as Utils from './utils'
import loughborough from './images/logos/LU-logo.png'
import newcastle from './images/logos/NU-logo.png'
import ukri from './images/logos/UKRI-logo.png'

export function welcome() {
    return Utils.htmlToElement(
    `<div id="welcome" class="hidden modal fixed top-16 left-1/4 h-3/5 w-1/2 border-8 rounded-3xl p-8 text-white">
        <div>
            <p class="mb-2">This game is all about loot boxes. Loot boxes are games of chance. They contain a randomised selection of in-game items of unknown value that are only revealed when the loot box is opened.</p>
            <p class="mb-2">Loot boxes are known by many different names, depending on the games you play. They are sometimes known as crates, card packs, eggs, bags, chests, spins, and wishes. In this game, they are called digs.</p>
            <p class="mb-2">Try digging in the potato patch to win items for your potato character. Check out the inventory to see what you have won. Some items in this game are rarer and more valuable than others.</p>
            <p class="mb-4">Can you find the golden potato skin?</p>
            <button id="continueBtn" class="mx-auto btn-game">Continue</button>
        </div>
    </div>`)
}

export function digIn() {
    return Utils.htmlToElement(
    `<div id="digIn" class="hidden modal fixed top-16 left-1/4 w-1/2 border-8 rounded-3xl p-8 text-white">
        <p class="mb-2">Can you find the legendary <span class="text-amber-400">golden potato</span> skin?</p>
        <p class="mb-4">Dig in the potato patch to find items!</p>
        <button id="digInBtn" class="mx-auto btn-game">Dig In</button>
    </div>`)
}

export function info() {
    return Utils.htmlToElement(
    `<div id="info" class="hidden modal fixed top-16 left-1/4 h-3/5 w-1/2 border-8 rounded-3xl p-8 text-white">
        <p class="mb-4">This game is based on real-world experiences of children and young people from the North East of England who play digital games and spend money in them. The game is part of a research project at Newcastle University and Loughborough University. The research was funded by the Economic and Social Research Council.</p>
        <p class="mb-4">Play the game to find out more about the thoughts and feelings of children and young people as they play their favourite digital games.</p>
        <p class="mb-4">You can find out more about the research on our <a class="underline font-bold" href="http://www.gaminggamblingresearch.org.uk/">project website</a></p>
        <div class="my-4 grid gap-4 grid-cols-3 grid-rows-1">
            <img src="${loughborough}" alt="Loughborough University" />
            <img src="${newcastle}" alt="Newcastle University" />
            <img src="${ukri}" alt="UKRI" />
        </div>
        <button id="closeInfoBtn" class="mt-4 mx-auto btn-game">Close</button>
    </div>`)
}

export function odds() {
    return Utils.htmlToElement(
    `<div id="odds" class="hidden modal fixed top-16 left-1/4 h-3/5 w-1/2 border-8 rounded-3xl p-8 text-white">
        <h4 class="text-center mb-8">DIG TO WIN AN ITEM FOR YOUR POTATO!</h4>
        <p class="mb-4">Your chances of winning an item:</p>
        <ul class="list-none ml-8 mb-4">
            <li>Common - 50%</li>
            <li>Rare - 30%</li>
            <li>Very rare - 15%</li>
            <li>Legendary - 5%</li>
        </ul>
        <p class="mb-8">Can you find the legendary golden potato skin?</p>
        <button id="closeOddsBtn" class="mx-auto btn-game">Close</button>
    </div>`)
}

export function foundItem() {
    return Utils.htmlToElement(
    `<div id="foundItem" class="hidden modal fixed top-16 left-1/4 w-1/2 border-8 rounded-3xl p-8 text-white">
        <p class="mb-2 text-center lowercase">You found the <span id="foundItemName"></span></p>
        <img id="foundItemImage" class="mx-auto my-5 w-24" />
        <button id="foundItemBtn" class="mx-auto btn-game">Continue</button>
    </div>`)
}