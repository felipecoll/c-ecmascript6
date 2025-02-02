function newUser (name, age, country) {
    var name = name || 'defaultName';
    var age = age || 0;
    var country = country || 'defaultCountry';
    console.log(name, age, country);
}

newUser();

function newAdmin(name='Maria', age=34, country='ESP') {
    console.log(name, age, country);
}

newAdmin()