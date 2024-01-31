//AJAX ==> Asynchronous javascript ==>

//Synchronous js ==> line to line

function add1(){
    console.log("I am add one function")
}

function add2(){
    console.log("I am add Two function")
}

add1()
add2()

//I am add Two function
//I am add One function

//setTimeout()

//asynch

function add3(){
    setTimeout(function(){
        console.log("I am add 3")
    },2000)
}

function add4(){
    console.log("I am add4")
}

add3() //2 sec
add4()

//i am add 4
//2 sec
//i am add 3

//User create ==> get ID ==> user info

//asynch ==> synch

function getUser() {
    setTimeout(function(){
        console.log("User create")
    },4000)

    setTimeout(function(){
        console.log("Get ID from user create")
    },3000)

    setTimeout(function(){
        console.log("Get info from id")
    },2000)
}
getUser()
//2 sec
//Get info from id
//3 sec
//set Id from user create
//4 sec
//User create

//Asynch ==> synch

//1. call Back hell
//2. promises


function getUser() {
    setTimeout(function () {
        console.log("User Created")

        setTimeout(function () {
            console.log("Get ID")

            setTimeout(function () {
                console.log("Get Info")
            }, 1000)

        }, 2000)

    }, 3000)
}
getUser()

//reused
//tightly couple

//ES6
