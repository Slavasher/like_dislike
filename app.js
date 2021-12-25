let likebtn = document.querySelector('#likebtn')
let dislikebtn = document.querySelector('#dislikebtn')

let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')

likebtn.addEventListener('click', () => {
    input1.value = parseInt(input1.value) + 1
})

dislikebtn.addEventListener('click', () => {
    input2.value = parseInt(input2.value) + 1
})
console.log()
