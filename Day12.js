let x =10
console.log(typeof x) //number

let y = "20"
console.log(y) //"20"
console.log(typeof y) //string

//" ",'',`` ==>string

let name1 = `mayuri`
console.log(typeof name1) //string

let z =true
console.log(typeof z) //boolean

//20,30,40

//let y1=20,30,40

//datatype ==> array ==> collection multiple value/element

let a = [] //array

let b = ""

let s1 = [20,"true",false,"mayuri"] //javascript

let s2 = [20,40,50,60,70] //==> java

//javascript ==>object

//suv,nano,audi,mercedes ==> vehical ==> object
//property ==> type,color,model,reg number
//methods ==>start(),stop()

//mayuri,ram,sham ==>human
//property ==>color,height,weight,age,blood group,gender
//method => walk(),talk(),play(),sleep(),study()

//method ==> study()
//action() ==> learn,write,read
//return ==>job,marks

//Array ==> object

//property
//method

//array store value with the help of index
//index always start with 0

let marks = [23,67,89,44,56,34,56,78,90,22,345,789,66,87,654]
//index       0  1  2  3  4  5  6  7  8  9  10  11 12 13 14 
//length      1  2  3  4  5  6  7  8  9  10 11  12 13 14 15

console.log(marks[marks.length-1])

//console.log(typeof marks) //array==>object

//Property

//length
//number of element present in array
//number

console.log(marks.length) //15

console.log(marks[2]) //89
console.log(marks[4]) //56
console.log(marks[16]) //undefined
console.log(marks[9]) //22
console.log(marks[5]) //34

// //firstelement
console.log(marks[0]) //23

//lastElement
//length-1 ==>lastindex
console.log(marks[marks.length-1])
// marks[6-1]  =>marks[5] ==>34

let student = ["mayuri","vaibhav","ram","sham"]
//                0         1      2      3

for(let i=0 ; i<=3; i++){
    //console.log(i)
    console.log(student[i])
}

for(let i=0; i< student.length; i++){
    //console.log(i)
    console.log(student[i])
}

for(let i=student.length -1 ; i>=0 ; i--){
    console.log(student[i])
}

//1-5
//for(let i =1;i<=5;i++){
    //console.log(i)
//}

