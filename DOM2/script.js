//<h1 id="one" class="two" name="headOne">Student</h1>

//1.by tagName

let byTagName = document.querySelector('h1')
console.log(byTagName)

//2.by using id

let byId = document.querySelector('#one')
console.log(byId)

//3.by using class
let byClass = document.querySelector('.two')
console.log(byClass)

//4.by using common formula
//tagName[attribute="value"]
let CF = document.querySelector('h1[name="headOne"]')
console.log(CF)

let cf1 = document.querySelector('h1[id = "one"]')
console.log(cf1)

let cf2 = document.querySelector('h1[class="two"]')
console.log(cf2)

