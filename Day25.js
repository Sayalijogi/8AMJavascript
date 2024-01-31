// //String

// //String Concatination(+)

let fn = "mayuri"
console.log(typeof fn) //string

let ln = "katwe"
console.log(fn + ln) //mayurikatwe

// //string + string ===> string
// //string + number ==> string
// //number + string ==> string
// //number + number ==> number

let a = 10
let b = "sham"
let c = 30

console.log(a + b) //"10sham"
console.log(a + c + b) //10+30=>40 + sham ==>40sham
console.log(a + c)
console.log(b + c + a)//sham + 30 ==> sham30 + 10 ==>sham3010

let firstName = "vaibhav"
let lastName = "joshi"

// //My firstname is vaibhav and my lastname is joshi

console.log("My firstname is" + " " + firstName + " " + "and my lastname is" + " " + lastName)
// //My firstname isvaibhavand my lastname isjoshi

// //string interpolation
// //let city = "pune"
// //let city = 'pune'
// //let city = `pune`

console.log(`My firstname is ${firstName} and my lastname is ${lastName}`)

console.log(typeof (`${5 + 5}`))

// //===============================================

let city1 = "Nashik"
for (let i = 0; i < city1.length; i++) {
    console.log(city1[i])
}

for(let i = city1.length - 1; i >= 0; i--){
    console.log(city1[i])
}

//kihsaN
//let city1 ="Nashik"
let str = "" //N //aN //saN //hsaN //ihsaN //kihsaN
for (let i = 0 ; i <city1.length; i ++) {
    str = city1[i] + str
}
console.log(str)
// N + "" => N
//a + N => aN
//s + aN =>saN
//h + saN =>hsaN
//i + hsaN => ihsaN
//k + ihsaN => kihsaN

let str1 = ""
for (let i = city1.length - 1; i >= 0 ; i--){
    //str1 = str1 + city1[i]
    str1 = city1[i] + str1
}
console.log(str1)

//method chaining
let city2 = "Nashik"
console.log(city2.split("").reverse().join("").toUpperCase())

console.log(city2.split("").join("").toUpperCase())

//string ==>object ==>methods/property
let firstName1 = "shravani"
// //length ==> number
console.log(firstName1.length)

//1.toUppercase()
console.log(firstName1.toUpperCase())

//2.toLowerCase()
let city = "PUNE"
console.log(city.toLowerCase())

//3.includes()
console.log(city.includes("P"))

//4.indexOf()
console.log(city.indexOf("n"))

//5.startsWith()
console.log(city.startsWith("P"))
console.log(city.startsWith("PUN"))

//6.endswith()
console.log(city.endsWith("E"))
console.log(city.endsWith("PNE"))

//7.trim()
let institude = " Minskole "
console.log(institude.trim())

//8.trimStart()
console.log(institude.trimStart().length)

//9.trimEnd()
console.log(institude.trimEnd())

//10.slice()
let firstName2 = "Mayuri"
// // -6  -5  -4  -3  -2  -1
// //  M   a   y   u   r   i
// //  0   1   2   3   4   5

// //stringName.slice(startPosition,endPosition)
// //endposition optional
// //endposition - 1
// //left to right
// //right to left ==>blank string
console.log(firstName2.slice(3)) //uri
console.log(firstName2.slice(-2,1)) //""
console.log(firstName2.slice(2,5))
console.log(firstName2.slice(-6,-3))

//11.charAt()
let firstName3 = "Mayuri"
// // M  a  y  u  r  i
// // 0  1  2  3  4  5
console.log(firstName3.charAt(3))
console.log(firstName3.charAt(9)) //blank string

//12.charCodeAt()   // ASCII Code 
console.log(firstName3.charCodeAt(0))

console.log(firstName3.charCodeAt(10)) //NaN

//13.split()

let firstName4 = "Mayuri-Katwe"
console.log(firstName4.split(""))
console.log(firstName4.split("-"))
console.log(firstName4.split("y"))


