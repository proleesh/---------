const $body = document.querySelector('body')
const $main = document.querySelector('main')
const $div = document.querySelector('div')
const $p = document.querySelector('p')
const $span = document.querySelector('span')
console.log($body)
console.log($main)
console.log($div)
console.log($p)
console.log($span)
$span.addEventListener('click', () => {
    // event.stopPropagation();
    // console.log('span가 capturing 되었습니다.')
    console.log('span가 bubbling 되었습니다.')
}, 1)
$body.addEventListener('click', () => {
    // console.log('body가 capturing 되었습니다.')
    console.log('body가 bubbling 되었습니다.')
}, 1)
$main.addEventListener('click', () => {
    event.stopPropagation();
    // console.log('main가 capturing 되었습니다.')
    console.log('main가 bubbling 되었습니다.')
}, 1)
$div.addEventListener('click', () => {
    // console.log('div가 capturing 되었습니다.')
    console.log('div가 bubbling 되었습니다.')
}, 1)
$p.addEventListener('click', () => {
    // console.log('p가 capturing 되었습니다.')
    console.log('p가 bubbling 되었습니다.')
}, 1)