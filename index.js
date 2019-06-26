function userName(name1, name2) {
    alert(`Welcome, ${name1} ${name2}!`)
}

const checkAge = function(age) {
    if (age >= 18) {
        alert('You are old enough')
    } else if (age < 18 && age >= 0) {
        alert('You are still young')
    } else {
        alert('You are not born yet')
    }
}


let firstName = prompt(`Input your first name`)
let lastName = prompt(`Input your last name`)
let userAge = parseInt(prompt('Input your age'))

userName(firstName, lastName)
checkAge(userAge)