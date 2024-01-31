// //string

let city = "pune"

// //p u n e
// //0 1 2 3

// //javascript
// //string ==> object
// //property and methods

// //length
console.log(city.length) //4

console.log(city.length - 1)  //3

console.log(city[city.length - 1]) //e

for (let i = 0; i < city.length; i++){
    //console.log(i)
    console.log(city[i])
}

// //console.log("===================================")

for(let i=city.length-1; i >= 0; i--){
    console.log(city[i])
}

// // //methods

let city1 = "pune"

// //p u n e
// //0 1 2 3

let y1=city1.toUpperCase()
console.log(y1)
//===============================================
let city2 = "PuNe"

let y2=city2.toLowerCase()
console.log(y2)
//================================================
let city3 = "puneun"
let y3 = city3.indexOf("p")
console.log(y3)

let y4 = city3.indexOf("u")
console.log(y4)

let y5 = city3.indexOf("z")
console.log(y5)
//================================================
let city4 = "pune"

let y6 = city.includes("P")
console.log(y6)

let y7 = city.includes("u")
console.log(y7)
//=================================================

//5.trim()
//action ==>remove space from start and end
//return ==>new string

let fruit = " Apple "
console.log(fruit.length) //7

let p1 = fruit.trim()
console.log(p1) //"Apple"
console.log(p1.length) //5

//==================================================

//6.trimstart()
//action => remove space from start
//return =>new string

let fruit1=" Apple "
console.log(fruit1.length) //7
let p2 = fruit.trimStart()
console.log(p2) //"Apple "
console.log(p2.length) //6

//=================================================

//7.trimEnd()
//action =>remove space from end
//return => new string

let fruit2=" Apple "
console.log(fruit2.length) //7
let p6=fruit2.trimEnd()
console.log(p6) //" Apple"
console.log(p6.length) //6

//=================================================

let flower="jasmin"
//8.startswith()
//action => check whether string start with given char , substring
//return => true/false
//char,subString ==>min,asm

let x1=flower.startsWith('J')
console.log(x1) //false

let x2=flower.startsWith('min')
console.log(x2) //false

let x3=flower.startsWith('jasm')
console.log(x3) //true

let x4=flower.startsWith('j')
console.log(x4) //true

//==================================================

let flower1 = "jasmin"

a=flower1.startsWith('jasm') //true
console.log(a)
b=flower1.startsWith('asmin')//false
console.log(b)
c=flower1.startsWith('min')//false
console.log(c)
d=flower1.startsWith('jmin')//false
console.log(d)
e=flower1.startsWith('J')//false
console.log(e)
f=flower1.startsWith('j')//true
console.log(f)
g=flower1.startsWith('ja')//true
console.log(g)

//===============================================
//9.Endswith()
//action => check whether string end with given char ,substring
//return => true/false

let flower2 = "jasmin"
let w1=flower2.endsWith('min')
console.log(w1) //true

let w2=flower2.endsWith('Smin')
console.log(w2) //false

let w3=flower2.endsWith('n')
console.log(w3) //true





