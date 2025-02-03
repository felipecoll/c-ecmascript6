class user {
    //Metodos
    greeting() {
        return 'Holaa'
    }
}

// Instancia de clase
const felipe = new user();
console.log(felipe.greeting());

// Herencia

const developer = new user()
console.log(developer.greeting());

// Constructor

class user {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        return 'Hola' + this.name;
    }
}

// this

class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return 'Hola' + this.name;
    }
}

// Setters y Getters

class user {
    constructor (name, age) {
        this.name = name;
        this.age = age; 
    }
    speak() {
        return 'Hola'
    }
    greeting() {
        return 'Hola' + this.name;
    }
}