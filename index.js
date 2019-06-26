function userName(name1, name2) {
    alert(`Welcome, ${name1} ${name2}!`)
    let userAge = parseInt(prompt('Input your age'))
    checkAge(userAge)
}

const checkAge = function(age) {
    if (age >= 19) {
        alert(`${firstName} ${lastName}, You are old enough`)
    } else if (age < 19 && age >= 0) {
        alert(`${firstName} ${lastName}, You are still young`)
    } else {
        alert(`${firstName} ${lastName}, You are not born yet`)
    }
}


let firstName = prompt(`Input your first name`);
let lastName = prompt(`Input your last name`);

userName(firstName, lastName);