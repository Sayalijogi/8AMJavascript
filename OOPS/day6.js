//let var const

let x = 10
console.log(x) //10

x = 100
console.log(x) //100

const s = 40
//s = 70
console.log(s) //error

//scope ==> let and const block scope
//{}

//program 1
{
    let z = 20
    console.log(z) //20
}
//console.log(z) //z is not define

//program 2
let y = 200 //global
{
    let y = 500
    console.log(y) //500
}
console.log(y) //200

//program 3
let x1 = 900 //global //200
{
    console.log(x1) //900
    x1 = 200
    console.log(x1) //200
}
console.log(x1)

//program 4
// {
//     const x2 = 60
// }
// console.log(x2) //x2 is not define

//program 5
const p1 = 100
{
    const p1 = 200
    console.log(p1) //200
}
console.log(p1) //100

//program 6
const k = 600
{
    console.log(k) //600
    // k = 900
    // console.log(k) //error
}
console.log(k) //600

//let and const block scope
//var dont have block scope
//var having function scope

//program 7
// {
//     var a = 222
// }
// console.log(a)//222

// //program 8
// var num = 100
// function add() {
//     var num = 200
//     console.log(num)//200
// }
// console.log(num)//100
// add()
// console.log(num)//100

// //100
// //200
// //100

//program 9
// function init(){
//     var a1=800
//     console.log(a1)//800
// }
// init()
// console.log(a1)//error

//update
//var
// var w1=300
// console.log(w1)//300
// w1=600//update
// console.log(w1) //600

// //let
// let y1=90
// console.log(y1)//90
// y1=100//update
// console.log(y1)//100

// //const
// const s1=40
// console.log(s1)//40
// s1=20//update
// console.log(s1)//assignment to the const varibale error


//let ==> redeclarion is not possible

// let y1=20
// let y1=100
// console.log(y1)

//const =>  redeclarion is not possible
// const u1=70
// const u1=50
// console.log(u1)

// //var   redeclarion is possible
// var r1=80
// var r1=200
// console.log(r1)


//function type

//function declarion

// function add() {
//     console.log(20 + 20)
// }
// add()

//function expression

// let add1 = function () {
//     console.log(29 + 20)
// }
// add1()

//arrow function

// let add1 = () => {
//     console.log(29 + 20)
// }
// add1()

//arrow function => function woth para and return type
let sub = (a, b) => a + b

let y1 = sub(10,20)
console.log(y1)
