//condition statement

//need ==>single input ==>multiple outcome

//1 condition ==
//10>2 => true (1 outcome)  ==> false(1 outcome)

//if
//if else
//if else if else
//switch case

//syntax
//if(condition){
// // statments
//}

//condition ==>true
if (1=='1') {
    console.log("Hi")
}

if(10<2){
    console.log("10 is greater number")
}
else {
    console.log("false condition")
}

//tickets
//1-5 ==> 10 % discount
//6-10 ==> 20 % discount
//>10 ==> 30 % discount

//-1

//let ticketCount = 8
//if (ticketCount > 0 && ticketCount <=5){
//console.log("You got 10 % discount")
//}
//if (ticketCount > 5 && ticketCount <= 10) {
//    console.log("You got 20 % discount")
//}
//if (ticketCount > 10) {
//    console.log("You got 30 % discount")
//}

//10 sec ==> 30 sec

let ticketCount = -30
if (ticketCount > 0 && ticketCount <= 5) {
    console.log("You got 10 % discount")
}
else if (ticketCount > 5 && ticketCount <= 10) {
    console.log("You got 20 % discount")
}
else if (ticketCount > 10) {
    console.log("You got 30 % discount")
}
else {
    console.log("invalid input")
}

//20 sec
// if we take only if block to check multiple condition then it will check all if block so time of program execution get increased

//Program 2

//let score = 100
//if (score > 90) {
   // console.log("Best Player")
//}
//if (score > 70) {
   // console.log("Better player")
//}
//if (score > 50) {
    //console.log("Good player")
//}

//Program 3

let score = 40
if (score > 90) {
    console.log("Best Player")
}
else if (score > 70) {
    console.log("Better Player")
}
else if (score > 50) {
    console.log("Good Player")
}
else{
    console.log("please select correct score")
}

//Program 4

let a=10
let b=20
if(a>b){
    console.log("A is greater number")
}
else{
    console.log("B is greater number")
}

let r=10
let s=10
if (r > s) {
    console.log("r is greater number")
}
else if (s > r) {
    console.log("s is greater number")
}
else {
    console.log("both numbers are equal")
}

let A=1000
let B=20
let C=150

if(A>B && A>C) {
    console.log("a is greater")
}
else if(B>A && B>C) {
    console.log("b is greater number")
}
else{
    console.log("c is greater number")
}

let student = 30
if (student > 5) {
    console.log("Class started")
}
else {
    console.log("Please wait for 2 more min")
}

//single condition ==>ternary operator
//condition ? true:false
//student > 5 ? console.log("Class Started") : console.log("Please wait for 2 more min")

let printOutput = student > 5 ? "Class started" : "Please wait for 2 more min"
console.log(printOutput)