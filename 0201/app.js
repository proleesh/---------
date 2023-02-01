let add = document.getElementById('button')
let inputBox = document.querySelector('input')
let removeBtn = document.querySelector('.remove-btn')
// 뒤에 추가
add.addEventListener('click', () => {
    let createList = document.createElement('li')
    let foundUnorderList = document.querySelector('ul')
    createList.textContent = inputBox.value

    let button = document.createElement('button')
    button.textContent = '❌'
    button.classList.add('remove-btn')
    createList.appendChild(button)
    foundUnorderList.appendChild(createList)
    button.addEventListener('click', (e) => {
        e.target.parentNode.remove()
    })
    inputBox.value = ' '
    inputBox.focus()
})
let beforeAdd = document.getElementById('before')
// 앞에 추가
beforeAdd.addEventListener('click', () => {
    let createList = document.createElement('li')
    let foundUnorderList = document.querySelector('ul')

    createList.textContent = inputBox.value
    let targetList = document.querySelector("li#target")

    createList.textContent = inputBox.value
    foundUnorderList.insertBefore(createList, targetList)
})
// 삭제하기
let removeTargetBtn = document.querySelector('#target-remove')
removeTargetBtn.addEventListener('click', () => {
    let removeList = document.querySelector("li#target")
    removeList.remove()
})
// Upgrade(Emoji)
// 1. Parent Element를 가져온다
removeBtn.addEventListener('click', (e) => {
    // 2. Parent Element를 제거
    e.target.parentNode.remove()
})