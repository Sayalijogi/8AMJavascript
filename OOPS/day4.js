//Polymorphism

//overriding => diff class, same method name, same signature(parameter)

// class WorldBank{
//     loan(){
//         console.log('I am loan from world Bank')
//     }

//     save(){
//         console.log('I am save from world bank')
//     }
// }

// class SBI extends WorldBank{
//     loan(){
//         console.log('I am loan from SBI')
//     }
//     save(){
//         console.log('I am save from SBI')
//     }
// }

// class HDFC extends WorldBank{
//     loan(){
//         console.log('i am loan from HDFC')
//     }

//     save(){
//         console.log('I am save from HDFC')
//     }
// }

// let hdfc=new HDFC()
// hdfc.loan()
// hdfc.save()

// let sbi=new SBI()
// sbi.loan()
// sbi.save()

//======================================================================================
class WorldBank {
    loan() {
        console.log('I am loan from world Bank')
    }

    save() {
        console.log('I am save from world bank')
    }
}

class SBI extends WorldBank {
    loan() {
        console.log('I am loan from SBI')
    }
    save() {
        console.log('I am save from SBI')
    }
}

class HDFC extends WorldBank {
    loan() {
        super.loan()
        console.log('i am loan from HDFC')
    }

    save() {
        super.save()
        console.log('I am save from HDFC')

    }
}

let hdfc = new HDFC()
hdfc.loan()

//=====================================================


//overloading => same class, same method name, different signature(parameter)


// class Calculator {
//     adddition(a, b) {
//         console.log(a + b)
//     }

//     adddition(a, b, c) {
//         console.log(a + b + c)
//     }

//     adddition(a, b, c, d) {
//         console.log(a + b + c + d)
//     }
// }

// let s1 = new Calculator()
// s1.adddition(1, 2, 3, 4) //10

// s1.adddition(1,2,3) //6  ==> NaN

// s1.adddition(1,2) //3 => NaN

// console.log(6+undefined)//NaN

class Calculator{
    addition(a,b,c,d){
        if(a!=undefined && b!=undefined && c!=undefined && d!=undefined){
            console.log(a+b+c+d)
        }
        else if(a!=undefined && b!=undefined && c!=undefined){
            console.log(a+b+c)
        }
        else if(a!=undefined && b!=undefined){
            console.log(a+b)
        }
    }
}

let d1=new Calculator()
d1.addition(10,20) //30
d1.addition(10,20,30) //60
d1.addition(10,20,30,40)//100