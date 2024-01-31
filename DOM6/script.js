{/* <body>
    <h1 id="one" class="two">Minskole</h1>
    <input class="inputTxt" type="text">
    <button id="btn">Click</button>
    <script src="script.js"></script>
</body> */}

let body = document.querySelector('body')
console.log(body)

body.addEventListener('click',function(event){
    //console.log(event.target) //html element
    //console.log(event.target.tagName) //capital case
    //console.log(event.target.className)
    //console.log(event.target.textContent) 
    console.log(event.target.id)

})