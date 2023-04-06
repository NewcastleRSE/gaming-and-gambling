import backgroundMusic from '../../sounds/background.wav'
import digSound from '../../sounds/dig.wav'
import fireworkSound from '../../sounds/fireworks.wav'

const background = new Audio(backgroundMusic)
background.loop = true

document.addEventListener('click', function startMusic() {
    background.play()
    document.removeEventListener('click', startMusic)
})

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
}