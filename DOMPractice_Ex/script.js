let headone = document.querySelector('h1')
let input1 = document.querySelector('input')

let buttonQ = document.querySelector('button')

console.log(input1,buttonQ,headone)

buttonQ.addEventListener('click',function(){

    let inputbox = input1.value // .value - it reads the value
    // headone.textContent = inputbox  
    headone.style.color = inputbox
    inputbox.value = ""
})