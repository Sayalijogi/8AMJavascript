//single level
//multilevel

//multiple
//two super class 
//one sub class

//hierarchical

//one superclass 
//multiple subclass

class Vehical{
    constructor(model,year){
        this.model = model
        this.year = year
    }
    honk(){
        console.log('i m honk method')
    }
}

class Car extends Vehical{
    drive(){
        console.log('this is car drive method')
    }
    // 2 property 2 method
}

class Motorcycle extends Vehical{
    wheelie(){
        console.log('this is motorcycle wheelie methods')
    }
    //2 property 2 method
}

class Cycle extends Vehical{
    cycling(){
        console.log('this is cycling method')
    }
    //2 property and 2 method
}

let audi = new Car('SUV','1998')
console.log(audi)
audi.honk()
audi.drive()

//=================================================
//whatsapp

//texting
//multimedia => multimedia + texting
//calling => texting + multimedia

class whatsapp{
    texting(){
        console.log('texting feature')
    }
}

class whatsapp2 extends whatsapp{
    multiMedia(){
        console.log('multimedia feature')
    }
}

class whatsapp3 extends whatsapp2{
    calling(){
        console.log('calling feature')
    }
}

let WApp3 = new whatsapp3()
WApp3.texting()
WApp3.multiMedia()
WApp3.calling()

