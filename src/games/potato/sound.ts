import backgroundMusic from '../../sounds/background.wav'
import digSound from '../../sounds/dig.mp3'
import fireworkSound from '../../sounds/fireworks.wav'
import soundOn from './../../images/buttons/speaker-on.png'
import soundOff from './../../images/buttons/speaker-off.png'

const background = new Audio(backgroundMusic)
background.loop = true

export function playDig() {
    const dig = new Audio(digSound)
    dig.play()
}

export function playFirework() {
    const firework = new Audio(fireworkSound)
    firework.play()
}

export function toggleMusic() {
    background.paused ? background.play() : background.pause()
    document.querySelector<HTMLDivElement>('#soundBtn')!.setAttribute('style', `background-image: url('${background.paused ? soundOn : soundOff}')`)
}