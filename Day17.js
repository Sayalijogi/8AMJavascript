let a = []
console.log(typeof a) //object

let b = 20
console.log(typeof b) //number

let c = ""
console.log(typeof c) //string

let d = "m"
console.log(typeof d) //string

//array

//String ==>datatype
//Object
//property
//methods

let city = "Nashik"
//String store value with the help of index

//N a s h i k 
//0 1 2 3 4 5
//1 2 3 4 5 6

console.log(city[4]) //i
console.log(city[5]) //k
console.log(city[0]) //N

console.log(city.length)  //6
//Property ==>length
//array ==>count the total no of element =>number
//string ==>count the total number of char =>number

let city1 ="Nashikasafagagshshshhshsshhsshsop"
console.log(city1.length) //33
console.log(city1.length - 1) //32
console.log(city1[city1.length - 1]) //p
console.log(city1[1]) //a

//stringName[index] //char

console.log(city1[city1.length - 1]) //p

//methods
//action
//return

//1.toUpperCase()
//action() => convert all char of string into capital case
//return() => new string

let str = "Shree Ganesh"
// // S  h  r  e  e     G  a  n  e  s  h
// // 0  1  2  3  4  5  6  7 8  9  10 11

console.log(str.length) //12
let a1 = str.toUpperCase()
console.log(a1)

// //2.toLowerCase()
// //action() =>convert all char of string into small case
// //return() =>new string
let str1 = "MaNaLi"
let a2 = str1.toLowerCase()
console.log(a2)

//3.indexOf()
let str2 = "Shree Ganesh"
// //S h r e e     G  a  n  e  s  h 
// //0 1 2 3 4  5  6  7  8  9  10 11
let b1 = str2.indexOf('s')
console.log(b1) //10

let c1 = str2.indexOf('h')
console.log(c1) //1

let d1 = str2.indexOf('g')
console.log(d1) //-1

let e1 = str2.indexOf(" ")
console.log(e1) //5

console.log(str2.indexOf("e")) //3

//4.includes()
//action() => check whether char present in string or not
//return() => true/false ==>boolean

let str3 = "Shree Ganesh"
//S  h  r  e  e     G  a  n  e  s  h
//0  1  2  3  4  5  6  7  8  9  10 11
let y1 = str3.includes("e")
console.log(y1)

let y2 = str3.includes("g")
console.log(y2)

let y3 = str3.includes(" ")
console.log(y3)

let y4 = str3.includes("G")
console.log(y4)

//string ==> length
//method ==> toUpperCase() , toLowerCase() , indexOf() , includes()

