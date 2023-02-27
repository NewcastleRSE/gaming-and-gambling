import * as Utils from './utils'

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
    `<div id="digIn" class="hidden modal fixed top-16 left-1/4 h-3/5 w-1/2 border-8 rounded-3xl p-8 text-white">
        <p class="mb-2">Can you find the legendary <span class="text-amber-400">golden potato</span> skin?</p>
        <p class="mb-4">Dig in the potato patch to find items!</p>
        <button id="digInBtn" class="mx-auto btn-game">Dig In</button>
    </div>`)
}