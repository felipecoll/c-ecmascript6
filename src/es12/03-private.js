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