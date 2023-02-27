import home from './images/buttons/home.png'
import game from './images/buttons/shovel.png'
import inventory from './images/buttons/case.png'
import settings from './images/buttons/settings.png'
import sound from './images/buttons/speaker.png'
import odds from './images/buttons/tree.png'

export function init() {
    document.querySelector<HTMLDivElement>('#menu')!.innerHTML = `
    <div class="grid place-items-center gap-4 grid-cols-6">
        <button class="rounded-4 w-16 h-16 background-cover" style="background-image: url('${home}')" />
        <button class="rounded-4 w-16 h-16 background-cover" style="background-image: url('${game}')" />
        <button class="rounded-4 w-16 h-16 background-cover" style="background-image: url('${inventory}')" />
        <button class="rounded-4 w-16 h-16 background-cover" style="background-image: url('${settings}')" />
        <button class="rounded-4 w-16 h-16 background-cover" style="background-image: url('${sound}')" />
        <button class="rounded-4 w-16 h-16 background-cover" style="background-image: url('${odds}')" />
    </div>
    `
}