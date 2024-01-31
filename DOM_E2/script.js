{/* <h1>StudentList</h1>
<ul>
    <li>Mayuri</li>
    <li>Shilpa</li>
    <li>Shubham</li>
    <li>Sathish</li>
</ul>
<input type="text">
<button id="btn">Add Student</button> */}

//find element

let ul = document.querySelector('ul')
console.log(ul)

let inputBox = document.querySelector('input')
console.log(inputBox)

let btn = document.querySelector('#btn')
console.log(btn)

btn.addEventListener('click',function(){
    let inputValue = inputBox.value //vaishali
    let newLi = document.createElement('li') //<li></li>
    newLi.textContent = inputValue //<li>vaishali</li>
    ul.appendChild(newLi)
    inputBox.value=""
})
