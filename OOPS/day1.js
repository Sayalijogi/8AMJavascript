//OOPS

//1.inheritance
//2.encapsulation
//3.abstraction
//4.polymorphism

//codeing => security,reused,maintain

//inheritance

// class GrandFather {
//     surName = "Mule"
//     money = 2000
//     displayMoney() {
//         console.log(`I have ${this.money}`)
//     }
// }

// class Father extends GrandFather{
//     //2 property
//     //1 method
//     home = "shreeGanesh"
//     displayHome(){
//         console.log(`i Have my own home name as ${this.home}`)
//     }
// }

// let sandip = new GrandFather()
// console.log(sandip.surName)
// console.log(sandip.money)
// sandip.displayMoney()

// // sandip.displayHome()

// let kumar = new Father()
// console.log(kumar.money)
// console.log(kumar.surName)
// console.log(kumar.home)
// kumar.displayHome()
// kumar.displayMoney()

// // parent and child don't have constructor

// class GrandMother{
//     surname = "jogi"
//     salary = 4000
//     displaySalary(){
//         console.log(`I have ${this.salary}`)
//     }
// }

// class Mother extends GrandMother{
//     //2 property
//     //1 method
//     house = 'shriGanesh'
//     displayHome() {
//         console.log(`i Have my own home name as ${this.house}`)
//     }
// }

// class Son extends Mother {
//     //3 property
//     //2 method
//     car = "Thar"
//     displayCar() {
//         console.log(`I have ${this.car}`)
//     }
// }

// let Sita = new GrandMother()
// console.log(Sita.surname)
// console.log(Sita.salary)
// Sita.displaySalary()

// //Sita.displayHome()

// let Mamta = new Mother()
// console.log(Mamta.salary)
// console.log(Mamta.surname)
// console.log(Mamta.house)
// Mamta.displaySalary()
// Mamta.displayHome()

// let chinmay = new Son()
// chinmay.displayCar()
// chinmay.displayHome()
// chinmay.displaySalary()
// console.log(chinmay.surname)
// console.log(chinmay.salary)
// console.log(chinmay.car)

//==================================================

//parent having constructor and child don't have constructor

// class GrandFather {
//     constructor(surName, money) {
//         this.surName = surName
//         this.money = money
//     }
//     displayMoney(){
//         console.log(this.money)
//     }
// }

// class Son extends GrandFather{
//     home="shreNivas"
//     displayHome(){
//         console.log(this.home)
//     }
// }

// let waman=new GrandFather("katwe",5000)
// console.log(waman.surName)
// console.log(waman.money)
// waman.displayMoney()

// let mahendra=new Son()
// console.log(mahendra.home)
// console.log(mahendra.surName)
// console.log(mahendra.money)
// mahendra.displayMoney()
// mahendra.displayHome()

//================================================

//parent constructor child constructor

class GrandFather {
    constructor(surName, money) {
        this.surName = surName
        this.money = money
    }
    displayMoney(){
        console.log(this.money)
    }
}

class Father extends GrandFather{
    constructor(surName,money,home){
       super(surName,money) 
       this.home=home
    }
    displayHome(){
        console.log(this.home)
    }
}

class Son extends Father{
    constructor(surName,money,home,car){
        super(surName,money,home)
        this.car=car
    }
    displayCar(){
        console.log(this.car)
    }
}

let chinmay = new Son("deshpande",4000,"pune","XUV")
console.log(chinmay.surName)
console.log(chinmay.money)
console.log(chinmay.home)
console.log(chinmay.car)
chinmay.displayCar()
chinmay.displayHome()
chinmay.displayMoney()
