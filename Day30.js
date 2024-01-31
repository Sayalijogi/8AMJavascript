//Map => datatype

//number
//string
//array
//boolean
//object

//Set => datatype
//unique value store

let mySet = new Set()
console.log(mySet)

//1.add()
mySet.add(123)
mySet.add("mayuri")
mySet.add(34)
console.log(mySet)

//2.size ==> property
console.log(mySet.size)

let s1 = new Set([12,22,33,44,55])
console.log(s1)

//3.has()
console.log(s1.has(33))

console.log(s1.has(11))

//4.delete()
console.log(s1.delete(44))
console.log(s1)

//5.clear()
s1.clear()
console.log(s1)

//duplicate

let s2 = new Set([66, 88, 99, 44, 66, 88])
//[66,88,99,44]
console.log(s2.size)

let mySetA = new Set()
console.log(mySetA)

mySetA.add(10)
mySetA.add(20)
mySetA.add(30)
mySetA.add(10)
console.log(mySetA)

let setC = new Set([11,22,33,44])
console.log(setC)

// //has()
console.log(setC.has(11))

// // //delete()
// setC.delete(22)
// console.log(setC)

// // //clear()
// setC.clear()
// console.log(setC)

//forEach()
setC.forEach(function(el){
    console.log(el)
})

let arr = [22,33,22,55,77,99,22]
//[22,33,55,77,99]

let setD = new Set(arr)
console.log(setD)

console.log(Array.from(setD))

