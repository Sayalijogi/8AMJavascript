let ulList = document.querySelector('ul')
console.log(ulList)

let inputBox = document.querySelector('input')
console.log(inputBox)

let addMeBtn = document.querySelector('#btn')
console.log(addMeBtn)

//Step 1
addMeBtn.addEventListener('click',function(){
    if(inputBox.value){
        let inputText = inputBox.value //chiku
        let newLi = document.createElement('li') //<li></li>
        newLi.textContent = inputText //<li>chiku</li>
        //Step 3(function calling)
        createButton(newLi)
        ulList.appendChild(newLi)
        inputBox.value = ""
    }
})
  
//Step 2

function createButton(liElement) {
    // <button class="remove">Remove</button>
    // <button class="up">Up</button>
    // <button class="down">Down</button>
    let remove = document.createElement('button') //<button></button>
    remove.textContent = "Remove" //<button>Remove</button>
    remove.className = "remove" //<button class="remove">Remove</button>
    liElement.appendChild(remove)

    let up = document.createElement('button')
    up.textContent = "Up"
    up.className = "up"
    liElement.appendChild(up)

    let down = document.createElement('button')
    down.textContent = "Down"
    down.className = "down"
    liElement.appendChild(down)
}

//step 4

ulList.addEventListener('click',function(event){
    //console.log(event.target.tagName)
    if(event.target.tagName =="BUTTON") {
        if (event.target.className == "remove") {
            let liEle = event.target.parentElement
            let ulEle = liEle.parentElement
            ulEle.removeChild(liEle)
        }
        else if (event.target.className == "up") {
            let liEle = event.target.parentElement
            let prevLi = liEle.previousElementSibling
            let ulList = liEle.parentElement
            if(prevLi){
                ulList.insertBefore(liEle,prevLi)
            }
        }
        else if(event.target.className="down"){
            let liEle = event.target.parentElement
            let nextLi = liEle.nextElementSibling
            let ulList = liEle.parentElement
            if(nextLi){
                ulList.insertBefore(nextLi,liEle)
            }
        }
    }
})
