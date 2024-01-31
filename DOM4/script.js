{/* <p id="clr">Color</p>
    <input type="text">
    <button name="button">ChangeMe</button> */}

//by id => 1
//by tagname => 4
//by class => 2
//by CF => 3

let pEle = document.querySelector('#clr')
console.log(pEle)

let inputBox = document.querySelector('input[type="text"]')
console.log(inputBox)

let butEle = document.querySelector('button[name="button"]')
console.log(butEle)

butEle.addEventListener('click',function(){
    let inputBoxText = inputBox.value //red
    pEle.textContent = inputBoxText  //red
    pEle.style.color = inputBoxText  //red
    inputBox.value="" 
})

