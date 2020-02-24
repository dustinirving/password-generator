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


// Declare variables

// Possible lowercase characters
let lowercase = 'abcdefghijklmnopqrstuvwxyz'

// Possible uppercase characters
let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// Possible numeric characters
let numeric = '0123456789'

// Possible special characters
let special = '!"#$%&()*\'()*+,-./:;<=>?[\\]^_`{|}~'

// Intial an empty string for the possible characters contained in their password
let characters = ''

// Prompt the user for a password length and store it in a variable
let passwordLength = parseInt(prompt("Please choose a length for your password of at least 8 characters, but no more than 128 characters. Note that you may only enter numbers."))

// Ensures that the user has entered an appropriate value
while (isNaN(passwordLength) === true || passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Oops!! Your password length must be a number between 8 and 128!")
    passwordLength = parseInt(passwordLength)
}

// Tells the user what they must do next
alert("You will now be prompted if you wish to include lowercase, uppercase, numeric and/or special characters in your password. Please note that you must choose at least one of the categories.")


// While loop ensures that the user has chosen at least one category of characters for their password
while (characters === '') {
    // Asks the user if they want lowercase characters
    let includesLowercase = prompt("Do you wish to include lowercase characters in your password? Type 'y' for yes. Enter anything else for no.")
        // Checks to see if they've entered anything and if they have coverts in to lowercase in case they used uppercase
    if (includesLowercase != null) {
        includesLowercase = includesLowercase.toLowerCase()
    }
    // If the user wishes to include lowercase characters then adds all lowercase characters to the string of possible characters to be included in their password
    if (includesLowercase === 'y') {
        characters = characters + lowercase
    }
    // Lines 49 to 58 are repeated for uppercase, numeric and special characters

    // Uppercase
    let includesUppercase = prompt("Do you wish to include uppercase characters in your password? Type 'y' for yes. Enter anything else for no.")
    if (includesUppercase != null) {
        includesUppercase = includesUppercase.toLowerCase()
    }
    if (includesUppercase === 'y') {
        characters = characters + uppercase
    }

    // Numeric
    let includesNumeric = prompt("Do you wish to include numeric characters in your password? Type 'y' for yes. Enter anything else for no.")
    if (includesNumeric != null) {
        includesNumeric = includesNumeric.toLowerCase()
    }
    if (includesNumeric === 'y') {
        characters = characters + numeric
    }

    // Special
    let includesSpecial = prompt("Do you wish to include special characters in your password? Type 'y' for yes. Enter anything else for no.")
    if (includesSpecial != null) {
        includesSpecial = includesSpecial.toLowerCase()
    }
    if (includesSpecial === 'y') {
        characters = characters + special
    }

    // Alerts the user that they must choose at least one type of character for their password
    if (characters === '') {
        alert("You must choose at least one type of character for your password.")
    }
}
// Declares a variable as an empty string to be added to
let password = ''

// This function generates a random password based on what the user's preferences were
function generatePassword() {
    // A for loop continues until for the duration of the length of the password
    for (let i = 0; i < passwordLength; i++) {
        // A random index is chosen from the string of characters and added to the empty password string
        // This continues until the entire password is created
        password = password + characters[Math.floor(Math.random() * characters.length)]
        console.log(password)
    }
    return password
}

password = ''