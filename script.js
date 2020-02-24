// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// My code
let lowercase = 'abcdefghijklmnopqrstuvwxyz'
let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let numeric = '0123456789'
let special = '!"#$%&()*\'()*+,-./:;<=>?[\\]^_`{|}~'
let characters = ''
let passwordLength = prompt("Please choose a length for your password of at least 8 characters, but no more than 128 characters. Only enter a number")
console.log(typeof passwordLength)
passwordLength = parseInt(passwordLength)
console.log(typeof passwordLength)
console.log(passwordLength)
while (passwordLength > 128) {
    passwordLength = prompt("Ooops! Your password must be at least 8 characters and less than 128 characters. You must only enter a number")
}

alert("You will now be prompted if you wish to include lowercase, uppercase, numeric and/or special characters in your password. Please note that you must choose at least one of the categories.")



while (characters === '') {
    let includesLowercase = ''

    includesLowercase = prompt("Do you wish to include lowercase characters in your password? Type 'y' for yes. Enter anything else for no.")
    if (includesLowercase.toLowerCase() === 'y') {
        characters = characters + lowercase
    }

    let includesUppercase = prompt("Do you wish to include lowercase characters in your password? Type 'y' for yes. Enter anything else for no.")
    if (includesUppercase.toLowerCase() === 'y') {
        characters = characters + uppercase
    }

    let includesNumeric = prompt("Do you wish to include lowercase characters in your password? Type 'y' for yes. Enter anything else for no.")
    if (includesNumeric.toLowerCase() === 'y') {
        characters = characters + numeric
    }

    let includesSpecial = prompt("Do you wish to include lowercase characters in your password? Type 'y' for yes. Enter anything else for no.")
    if (includesSpecial.toLowerCase() === 'y') {
        characters = characters + special
    }

    if (characters === '') {
        alert("You must choose at least one type of character for your password.")
    }
}

let password = ''
for (let i = 0; i < passwordLength; i++) {
    password = password + characters[Math.floor(Math.random() * characters.length)]
    console.log(password)

    function generatePassword() {
        return password
    }
}