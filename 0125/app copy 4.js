const btnRed = document.getElementById('btn-red')
const btnBlue = document.querySelector('#btn-blue')
const btnGreen = document.querySelector('#btn-green')
btnRed.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red'
    document.body.style.backgroundColor = 'red'
})
btnBlue.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'blue'
    document.body.style.backgroundColor = 'blue'
})
btnGreen.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'green'
    document.body.style.backgroundColor = 'green'
})