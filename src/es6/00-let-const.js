var lastName = 'Pepito'
lastName = 'Felipe'

console.log(lastName)

let fruit = 'Manaza'
fruit = 'Banana'

console.log(fruit)

// const animal = 'Vampiro'
// animal = 'Gatito'

// console.log(animal)

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple' //function scope
        let fruit2 = 'Melon' // block scope
        const fruit3 = 'Pera' // block scope
    }
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}

fruits()
