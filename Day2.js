let fullName="Sayali"
console.log(fullName)
fullName="Ashu"//update
console.log(fullName)

const y1=23
console.log(y1) //23
//const y2=200
console.log(y1)//23
//y2=50
console.log(y1)//23
//console.log(y2)//error

//Operator
//1.Arithmetic operator
//+ addition
//- subtraction
//* multiplication
// / divison
// % modulus ==> reminder

let x=10
let y=20
console.log(x+y)//30
console.log(x-y)//-10
console.log(x*y)//200
console.log(x/y)//0.5
console.log(x%y)//10

console.log(19%6)//1

let p=100
let q=50
console.log(p+q)//150
console.log(p-q)//50
console.log(p*q)//5000
console.log(p/q)//2
console.log(p%q)//0

//10 pair ==> 50line ==>effort,memory,time
//DRY ==> donot repeat yourself

//function
//()=> paranthesis
//{}=>block

//syntax
//function functionName(para1,para2){
// //     //statement
// //  }
// // function call==>functionName

//new joiner==>3 floor /3 number tea shop tea


//let x1=20
//let x2=2

function calculator(a,b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b)
}
calculator(20,2)
calculator(30,5)

// //1.function without parameter withouut return type

function add(){
    console.log(20+5)
}
add()
add()
add()

//o/p=> not change
// //can't use the output

// //2. function with parameter without return type
function add1(s1,s2){
    console.log(s1+s2)
}
add1(5,2) //7
add1(10,10)//20
add1(90,10)//100

//o/p=>change
//can't use the output

//100 => show =>can't use
//100 => give =>we can use it or distribute it

//3. function with parameter with retrun type
function add2(f1,f2){
    return f1+f2
}
let sum = add2(7,10)
//let sum=17
console.log(sum)//17

let s1=add2(90,55)
console.log(s1)//145
console.log(s1+5)//150
console.log(s1-10)//135