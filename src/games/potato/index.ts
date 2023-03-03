export function dig(x: number, y: number) {
    console.log(x, y)
    const digAnimation = document.querySelector<HTMLDivElement>('#dig-animation')

    digAnimation!.style.left = `${x-224}px`
    digAnimation!.style.top = `${y-224}px`
    digAnimation!.classList.toggle('hidden')

    setTimeout(() => { digAnimation!.classList.toggle('hidden') }, 2000)
}