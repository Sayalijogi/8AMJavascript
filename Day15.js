//array
//                 action            return
//1.push() ==> last element add ==>new length
//2.unshift()==>first ele add ==>new length
//3.shift()==>first ele remove ==>removed ele
//4.pop()==>last ele remove ==>removed ele
//5.includes()==>chech given ele present or not ==> boolean
//6.indexOf()==> given the index of given ele =>index/-1 ==>number
//7.flat()==> two dimensional array single array ==>array

let scores = [34,67,90,12]
// //+5 ==> [39,72,95,17]

//map()
//action => perform action with each and every element
//return => new array

let plus5 = scores.map(function(ele,index,array){
    return ele + 5
})
console.log(plus5)

let scores1 = [34,67,90,12,9,30,20,25]
// //>30

//filter()
//action ==>compare element based on given condition and filterout the ele
//return ==>new array
let greater30 =scores1.filter(function(ele,index,arr){
    return ele > 30
})
console.log(greater30)

let marks = [2,3,4,5]
// reduce()
let sum = marks.reduce(function(acc,ele,index,array){
    return acc + ele
},0)
console.log(sum)

//forEach()
//action() ==> perform action with each ele
//return() ==> nothing

let student = ["mayuri","vaibhav","ram","sham"]

//welcome mayuri
//welcome vaibhav
//welcome ram
//welcome sham

for (let i = 0 ; i < student.length; i++){
    console.log("welcome " + student[i])
}

student.forEach(function(el,index,arr){
    console.log("welcome "+el)
})

let arr = [2,5,10,6,8,20,35,101]

//some()
//>10 ==>true

let y1 = arr.some(function(el,index,arr){
    return el > 100
})
console.log(y1)

//every()
//>10 ==>false



//function add(){
    //console.log("hello")
// }
// add ()

