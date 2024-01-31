let a = "10"  //string

let b =`` //string

let c = [] //array

let d = {}

//object literal
let studentOne = {
    firstName: "Mayuri",
    lastName: "Katwe",
    age:25,
    rollNo:50,
    nationality:"indian"
}

let studentTwo = {
    firstName: "Vaibhav",
    lastName: "sharma",
    age:28,
    rollNo:13,
    nationality:"indian"
}

//let a = 20

//student ==> school => 80 student
//80 object => repetation avoid

//class => Es6 javascript => esma script
//class => blue print => format create => multiple object

//1.setting object property outside of the class
class Student {
    firstName
    lastName
    age
    rollNo
    nationality
}

let mayuri = new Student()
console.log(mayuri)
//curd operation
mayuri.firstName = "mayuri"
mayuri.lastName = "rao"
mayuri.age = 25
mayuri.rollNo = 50
mayuri.nationality = "indian"
console.log(mayuri)

let vaibhav = new Student()
console.log(vaibhav)
vaibhav.firstName = "vaibhav"
vaibhav.lastName = "sahu"
vaibhav.age = 35
vaibhav.rollNo = 45
vaibhav.nationality = "indian"
console.log(vaibhav)

//2.class => by using constructor
class Student1 {
    constructor(fn,ln,ag,rNo,nationality){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rNo
        this.nationality = nationality
    }
}
let ram = new Student1("ram","kumar",45,10,"indian")
console.log(ram)

let sham = new Student1("sham","rami",67,23,"indian")
console.log(sham)

//3. by using function
class Person {
    setFirstName(fn){
        this.firstName = fn
    }
    setlastName(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.Age = ag
    }
    setRollNo(rNo){
        this.rollNo = rNo
    }
    setNationality(na){
        this.nationality = na
    }
}
let sathish = new Person()
console.log(sathish)
sathish.setFirstName("sathishB")
sathish.setlastName("kumar")
sathish.setAge(23)
sathish.setRollNo(50)
sathish.setNationality("indian")
console.log(sathish)

//set get keyword


