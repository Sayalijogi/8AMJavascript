let num = []
console.log(typeof num) //object
console.log(num.length)

let student = ["mayuri","vaibhav","dinga","pinga","ranga"]
//index            0         1        2      3       4
//length           1         2        3      4       5      

//1.push(element)
//action ==> add element at last
//return ==> new length

let a1 = student.push("ram")
console.log(a1) //6
console.log(student)

let marks = [12,45,78,90,80,70,990]

//2.unshift(element)
//action ==> add element at first
//return ==> new length

let a2 = marks.unshift(99)
console.log(a2) //8
console.log(marks)

//3.pop()
// //action ==> remove element from last
// //return ==> removed element

let city = ["nashik","pune","nagar","jalgaon","jalna"]
let a3 = city.pop()
console.log(a3) //jalna
console.log(city)

//4.shift()
// //action ==> remove element from first
// //return ==> removed element

let a4 = city.shift()
console.log(a4)
console.log(city)

let score  =[45,89,67,45,90,33,56]
// //        0   1  2  3  4  5  6

// //5.IndexOf()
// action ==> give the index of given element if element found,if not found then return -1
// // return ==> number

let a5 = score.indexOf(99)
console.log(a5) //-1

console.log(score.indexOf(56)) //6

// //6.includes()
// //action ==> check whether given element is present in array or not.if present return true else false
// //return ==>boolean

let score2 = [45,89,67,45,90,,33,56]
// //         0   1  2  3  4  5   6
console.log(score2.includes(33)) //true
console.log(score2.includes(100)) //false

// //7.flat()
// //action ==> convert two dimensional array into single array
// //return ==> array
//          0   1  2    0  1  2  3    0   1
let arr = [[22,55,78],[780,56,90,43],[66,100]]
//              0             1          2

//let arr1 = [[1,23],3,4]
//             0   1 2

// //90 print
console.log(arr[1][2]) //90

// //66 print
console.log(arr[2][0])

// //78
console.log(arr[0][2])

console.log(arr[1][0])


//7.flat()
//action ==> convert two dimensional array into single array
//return ==> array

let arr2 = [[22,55,78],[780,56,90,43],[66,100]]
let y2 =arr2.flat()
console.log(y2)

//push(),unshift(),shift(),pop(),indexOf(),includes(),flat()

