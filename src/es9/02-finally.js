const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('siuuuuu!');
        } else {
            reject('Nooop!');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.error(err));
    .finally(() => console.log('Finalizó!')); // This is the new feature in ES9