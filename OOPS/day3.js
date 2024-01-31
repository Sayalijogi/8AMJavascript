//polymorphism 

//poly => many
//morphism => forms

//boy => friend,son,brother,husband,student

//1.Overriding => different class,same method name, same signature(parameter)

//Program 1

class WorldBank{
    loan(){
        console.log('I am loan method from worldBank')
    }
    save(){
        console.log('I am savinf from WorldBank')
    }
}

class SBI extends WorldBank{
    loan(){
        console.log('i am loan from SBI')
    }
    save(){
        console.log('i am save from SBI')
    }
}

//2.Overloading => support 

