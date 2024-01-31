let employee = {
    fullName : "Mayuri",
    empID:5298,
    salary:25000,
    bloodGroup:"A+",
    isMaarries:"false",
    skills:["java","python","js"]
}

for(let key in employee) {
    console.log(employee[key])
}

for(let key in employee) {
    console.log(typeof (key))
}

//employee.fullName
//employee['fullName']
//keys in objects are string datatype
//Map => datatype

let a = []
let b = {}

let myMap = new Map()
console.log(myMap)

//property add ==> key value
//1.set()
myMap.set('firstName',"mayuri")
myMap.set(123,32452662)
myMap.set(true,'isMarried')
console.log(myMap)

// // //retrive values
// // //2.get()
console.log(myMap.get(123)) //32452662
console.log(myMap.get(true)) //isMarried

// //3.has()
console.log(myMap.has('firstName')) //true
console.log(myMap.has('DOB')) //false

// // //4.delete() ==> boolean
// console.log(myMap.delete(123)) //true
// console.log(myMap)

// // //5.clear()
// myMap.clear()
// console.log(myMap)

// //6.forEach()
myMap.forEach(function(value,key){
    console.log(value,key)
})

let m2 = new Map([["firstName","mayuri"],[1234,"Rno"],[5,"skills"]])
console.log(m2)

//key()

