const text = document.getElementById('advice-msg');
const textId = document.getElementById('advice-id');
const btn = document.getElementById('btn-dice');

fetch('https://api.adviceslip.com/advice')
    .then((resp) => resp.json())
    .then((data) => {
        const {id, advice} = data.slip;
        textId.innerText = `ADVICE #${id}`;
        text.innerText = `"${advice}"`;
    })

function reload() {
    location.reload();
}

btn.addEventListener('click', reload);
