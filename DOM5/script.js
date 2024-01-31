{/* <h1 id="std" class="12">StudentList</h1>
    <ol>
        <li>Mayuri</li>
        <li>Vaibhav</li>
        <li>Jaya</li>
    </ol>
    <input type="text">
    <button name="btn">Click Me</button> */}

let olList = document.querySelector('ol')
console.log(olList)

let inputBox = document.querySelector('input[type="text"]')
console.log(inputBox)

let button = document.querySelector('button')
console.log(button)

button.addEventListener('click',function(){
    let inputBoxText = inputBox.value //ram
    let newLiEle = document.createElement('li') //<li></li>
    //<li>ram</li>
    newLiEle.textContent = inputBoxText // //<li>ram</li>
    olList.appendChild(newLiEle)
    inputBox.value=""
})