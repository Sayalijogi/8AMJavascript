{/* <h1 id="one">Color</h1>
    <input type="text">
    <button class="btn">Click Button</button> */}

//by tagname ==> 4
//by id ==> 1
//by class ==> 2
//by CF tagname[attribute=value] => 3

let h1Ele = document.querySelector('#one')
console.log(h1Ele)

let inputBox = document.querySelector('input[type="text"]')
console.log(inputBox)

let button = document.querySelector('.btn')
console.log(button)

button.addEventListener('click',function(){
    let inputBoxValue = inputBox.value
    h1Ele.textContent = inputBoxValue
    h1Ele.style.color = inputBoxValue
    inputBox.value = ""
})

