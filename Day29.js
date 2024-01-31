//datatype
//map ===>>

//object ==> key value
//           string  any datatype

//key ==> diff datatype ==> Map

let myMap = new Map()
console.log(myMap)

//set()
myMap.set(true,2000)
myMap.set('firstName','mayuri')
myMap.set(2000,'salary')
console.log(myMap)

// //get()
console.log(myMap.get(true))

// //has()
console.log(myMap.has('firstName')) //true

console.log(myMap.has('lastName')) //false

// // //delete()
// myMap.delete('firstName')
// console.log(myMap)

// // //clear()
// myMap.clear()
// console.log(myMap)

//size()
console.log(myMap.size)

//forEach()
myMap.forEach(function(value,keys){
    console.log(keys,value)
})

//loops
//keys
for(let key of myMap.keys()){
    console.log(key)
}

//values
for(let v of myMap.values()){
    console.log(v)
}

//for loop ==> key and values
for(let [k,v] of myMap.entries()){
    console.log(k,v)
}

