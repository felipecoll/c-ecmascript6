async function* anotherGenerator (){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(({ response }) => console.log(response));
other.next().then(({ response }) => console.log(response));
other.next().then(({ response }) => console.log(response)); // 1