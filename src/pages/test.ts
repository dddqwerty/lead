type CreateDog = {
    name?: string,
    breed?: string
    age?: number
    color?: string
}

export class Dog {
    a = 2;
    private b =3

    constructor() {

    }

    
    createPayment() {
        console.log(this.a)
        console.log(this.b)
    }
    

}

// class AmericanDog extends Dog {
//     constructor({name}: {name: string}){
//         super({name})
//         console.log(name)
//       }

//     getDogdadad() {
//         console.log('i am extended from createDog')
//     }
// }


let bankhar = new Dog()
bankhar.a



// let pitbull = new AmericanDog({})

let a = new AmericanDog({name: 'dwqwq'})

a.getDogdadad()