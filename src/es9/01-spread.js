const user = {username: 'Felipe, age: 30, email: lala@gmail.com'};

const {username, ...rest} = user;
console.log(username); // Felipe
console.log(rest); // {age: 30, email: