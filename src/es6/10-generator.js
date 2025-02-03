function* iterate (array) {
    for (let value of array) {
        yield value
    }
}

const it = iterate(['Felipe', 'Pedro', 'Ana', 'Carla'])

console.log(it.next().value)

