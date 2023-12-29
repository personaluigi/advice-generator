const text = document.getElementById('advice-msg')
const textId = document.getElementById('advice-id')
const btn = document.getElementById('btn-dice')

fetch('https://api.adviceslip.com/advice')
    .then((resp) => resp.json())
    .then((data) => {
        const { id, advice } = data.slip
        textId.innerText = `ADVICE #${id}`
        text.innerText = `"${advice}"`
    })

const reload = () => {
    fetch('https://api.adviceslip.com/advice')
        .then((resp) => resp.json())
        .then((data) => {
            const { id, advice } = data.slip
            textId.innerText = `ADVICE #${id}`
            text.innerText = `"${advice}"`
        })

}

const diceAnimation = () => {
    setTimeout(() => {
        document.querySelector('.btn-dice').classList.toggle('btn-dice-active')
    }, 600)
}

const animation = () => {
    diceAnimation()
    reload()
}

btn.addEventListener('click', animation)
