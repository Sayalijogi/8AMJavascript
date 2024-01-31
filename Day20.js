//String

let firstName = "Mayuri Mahendra Katwe"
//["Mayuri","Mahendra","Katwe"]

let y1 = firstName.split(" ")
console.log(y1)

//MayuriMahendraKatwe

//join() ==> array
console.log(y1.join(""))


//12.charAt()
//if index not found ==> return blank string
//negative index not support 

let city = "Nashik"

// // N  a  s  h  i  k
// // 0  1  2  3  4  5

let s1 = city.charAt(3)
console.log(s1)

console.log(city.charAt(5))

console.log(city.charAt(10))

console.log(city.charAt(-1))

//13.charCodeAt()

//ASCII value of that char 

let city1 = "Nashik"

// //N  a  s  h  i  k
// //0  1  2  3  4  5

let d1 = city1.charCodeAt(0)
console.log(d1)  //N

console.log(city1.charCodeAt(2))

let y3=city1.charCodeAt(20)
console.log(y3)

//String
//length => number

//methods
//1.toUpperCase() ==>string
//2.toLowerCase() ==>string
//3.indexOf() ==> -1/number
//4.includes() ==> true/false ==>boolean
//5.trim() ==>space start end ==> new string
//6.trimStart() ==> space start => new string
//7.trimEnd() ==>space end => new string
//8.startsWith() => char/substring =>true/false
//9.endsWith() =>boolean
//10.slice()==> string
//11.split() ==> array
//12.charAt(index) ==>char /string
//13.charCodeAt(index) ==>ascii value of char

//Mayuri$200

//Mayuri

//uri ==> end(true)

let name1 = "Mayuri$200"
name1.endsWith('uri') //false

let u1 = name1.slice(0,6).endsWith('uri') //method chaining
console.log(u1)

let w1 = name1.split('$')
console.log(w1[0].endsWith('uri'))

