let h1Ele = document.querySelector('#stdName')
console.log(h1Ele)

let clickMeBtn = document.querySelector('button[btn="clickMeBtn"]')
console.log(clickMeBtn)

clickMeBtn.addEventListener('click',function () {
    h1Ele.textContent = h1Ele.textContent.toUpperCase();
    h1Ele.style.color = "red"
})
