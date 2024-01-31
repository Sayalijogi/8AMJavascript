//function type

//1. function declaration
//2. function expression
//3. arrow function

let greeting=()=>{
    console.log("welcome all")
}

let init=function(){
    console.log("hello")
}

function display(){
    console.log("hey")
}



function add(){
    console.log(10+10)
}
add()//20

let add1=function(){
    console.log(10+10)
}
add1()//20

let add2= ()=>{
    console.log(10+10)
}
add2()//20

//Javascript => Object

//parent object => window

// let a=10//block
// console.log(a)
// console.log(window.a)//undefined

// var b=20
// console.log(b)//20
// console.log(window.b)//20


//Program1
let person={
    firstName:"Mayuri",
    lastName:"Katwe",
    age:25,
    info:function(){
        console.log(this==person)//true
        console.log(this.firstName,this.lastName)//Mayuri Katwe
        //person.firstName,person.lastName

        let greeting=function(){
            console.log(this==window)//true
            console.log(this.firstName,this.lastName)//undefined
            console.log(this.firstName+this.lastName)//undefined+undefined=>NaN
            //window.firstName,window.lastName
        }

        greeting()
    }
}

// //console.log(person.info)
// person.info()


//Program2
// var firstName="vaibhav"
// var lastName="raut"
// let person={
//     firstName:"Mayuri",
//     lastName:"Katwe",
//     age:25,
//     info:function(){
//         console.log(this==person)//true
//         console.log(this.firstName,this.lastName)//Mayuri Katwe

//         let greeting=function(){
//             console.log(this==window)//true
//             console.log(this.firstName,this.lastName)//vaibhav raut
//         }

//         greeting()
//     }
// }

// //console.log(person.info)
// person.info()


// let person={
//     firstName:"Mayuri",
//     lastName:"Katwe",
//     age:25,
//     info:function(){
//         console.log(this==person)//true
//         console.log(this.firstName,this.lastName)//Mayuri Katwe

//         function greeting(){
//             console.log(this==window)
//             console.log(this.firstName,this.lastName)//undefined udefined
//         }

//         greeting()
//     }
// }

// //console.log(person.info)
// person.info()


// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     info: () => {
//         console.log(this == window)//true
//         console.log(this.firstName, this.lastName)//undefined

//         greeting = () => {
//             console.log(this == window)//true
//             console.log(this.firstName, this.lastName)//undefined
//         }

//         greeting()
//     }
// }

// //console.log(person.info)
// person.info()


// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     info: function()  {
//         console.log(this == window)//false
//         //this==person
//         console.log(this.firstName, this.lastName)//mayuri katwe

//         greeting = () => {
//             //this==person
//             console.log(this == person)
//             console.log(this.firstName, this.lastName)//mayuri katwe
//         }

//         greeting()
//     }
// }

// //console.log(person.info)
// person.info()
