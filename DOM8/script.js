//to find single element
let singleLi = document.querySelector('li')
console.log(singleLi)

//to find multiple element
let multipleEle = document.querySelectorAll("li")
console.log(multipleEle)

//element odd => yellow
//element even => red

for(let i = 0; i < multipleEle.length; i++){
    //console.log(multipleEle[i].textContent)
    if (i % 2 == 0){
        multipleEle[i].style.color = "Red"
    }
    else {
        multipleEle[i].style.color = "Yellow"
    }
}

//id
//class
//tagName
//cf - common formula
//document.queryselector()

let byId=document.getElementById('one')
console.log(byId) //html element

let byClass=document.getElementsByClassName('two')
console.log(byClass) //html collection

let byName=document.getElementsByName('nm')
console.log(byName) //nodeList

let byTagName=document.getElementsByTagName('h1')
console.log(byTagName)//html collection

//=====================================================

{/* <h1 id="one" class="two three four" name="nm">Fruit List</h1> */}

let element1=document.querySelector("h1")
console.log(element1)
console.log(element1.className)

console.log(element1.classList)

// //add()
// element1.classList.add('ten')
// console.log(element1.classList)

// //remove()
// element1.classList.remove('two')
// console.log(element1.classList)

//toggle()
//four
element1.classList.toggle('four')
console.log(element1.classList)

element1.classList.toggle('four')
console.log(element1.classList)

//getAttribute()
console.log(element1.getAttribute('name'))

element1.setAttribute('text','txt')
console.log(element1)
