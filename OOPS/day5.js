// let human={
//     firstName:"Mayuri",
//     lastName:"katwe",
//     age:25,
//     display:function(){
//         console.log(age)
//     }
// }

// human.display()

let human={
    firstName:"Mayuri",
    lastName:"katwe",
    age:25,
    display:function(){
        console.log(this.age)
    }
}

human.display()

// // ====================================================
// //lexical scope

// //parent function variable child function access
// //child function variable can access in parent function

function add(){
    let a = 10
    let b = 20 
    console.log(a+b) //30
    function add2(){
        let c = 100
        let d = 20
        console.log(c+d)//120
        console.log(a+b+c+d)//150
        //console.log(e+f)//error

        function add3(){
            let e = 50
            let f = 80
            console.log(a+b+e+f+c)
        }
        add3()
    }
    add2()
}
add()

function init(){
    let p = 2
    let q = 3
    console.log(p+q)//5
    //console.log(r+s)//r is not defined

    function initOne(){
        let r = 10
        let s = 12
        console.log(p+q)
    }
    initOne()
}
init()

//===============================================
////global scope
// let e = 10
// let f = 20
// function display(){
//     let a = 5
//     let b = 2
//     console.log(a+b)//7
//     console.log(e+f)//30

//     function displayOne(){
//         let c = 30
//         let d = 20
//         let e = 100
//         let f = 50
//         console.log(e+f+a+b) //157
//         console.log(c+d)//50
        
//         function displayTwo(){
//             let e = 400
//             let f = 500
//             console.log(e+f) //900
//         }
//         displayTwo()
//     }
//     displayOne()
// }
// display()

// //================================================

let e = 10
let f = 20
function display(){
    let a = 5
    let b = 2
    let e = 70
    let f = 50
    console.log(a+b) //7
    console.log(e+f) //30

    function displayOne(){
        let c = 30
        let d = 20
        let e = 100
        let f = 50
        console.log(e+f+a+b) //157
        console.log(c+d) //50

        function displayTwo(){
            console.log(e+f) //150
        }
        displayTwo()
    }
    displayOne()
}
display()

//===================================================

//var let const
//{}

//closure

// function add(){
//     let s = 3
//     let v = 2
//     return s + v//close
//     console.log(s+v+10)
//     console.log("hello")
// }
// let y1 = add()
// console.log(y1)

function add(){
    let a = 10
    let b = 20
    return function(){
        console.log(a+b)
        console.log(a+b+10)
        console.log("hello")
    }
}
let s1 = add()
console.log(s1)
s1()
