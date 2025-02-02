function newUser(nombre, edad, nacionalidad, uId) {
    return {
        user: nombre, 
        age: edad,
        country: nacionalidad,
        id: uId, 
    }
}

console.log(newUser('Felipe', 23, 'Argentina', 1))