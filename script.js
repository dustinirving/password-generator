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




// This function generates a random password based on what the user's preferences were
function generatePassword() {
    // Declare variables

    // Possible lowercase characters
    let lowercase = 'abcdefghijklmnopqrstuvwxyz'

    // Possible uppercase characters
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    // Possible numeric characters
    let numeric = '0123456789'

    // Possible special characters
    let special = '!"#$%&\'()*+,-./:;<=>?[\\]^_`{|}~'

    console.log(special)

    // Intial an empty string for the possible characters contained in their password
    let characters = ''

    // Prompt the user for a password length and store it in a variable
    let passwordLength = (prompt("Please choose a length for your password of at least 8 characters, but no more than 128 characters. You may only enter numbers."))

    // Ensures that the user has entered an appropriate value
    while (passwordLength !== null && (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)) {
        passwordLength = prompt("Oops!! Your password length must be a number between 8 and 128!")
        passwordLength = passwordLength
    }

    // Allows the user to exit the screen
    if (passwordLength === null) {
        alert("You have not specified a length for your password.")
        return ''
    }

    // Tells the user what they must do next
    alert("You will now be prompted if you wish to include lowercase, uppercase, numeric and/or special characters in your password. Please note that you must choose at least one of the categories.")


    // While loop ensures that the user has chosen at least one category of characters for their password
    while (characters === '') {
        // Asks the user if they want lowercase characters and updates 
        let includesLowercase = confirm("Do you wish to include lowercase characters in your password?")
        if (includesLowercase === true) {
            characters = characters = lowercase
        }
        // Uppercase
        let includesUppercase = confirm("Do you wish to include uppercase characters in your password?")
        if (includesUppercase === true) {
            characters = characters + uppercase
        }
        // Numeric
        let includesNumeric = confirm("Do you wish to include numeric characters in your password?")
        if (includesNumeric === true) {
            characters = characters + numeric
        }

        // Special
        let includesSpecial = confirm("Do you wish to include special characters in your password?")
        if (includesSpecial === true) {
            characters = characters + special
        }

        // Alerts the user that they must choose at least one type of character for their password
        if (characters === '') {
            alert("You must choose at least one type of character for your password.")
            let Continue = confirm("Do you wish to continue?")
            if (Continue === false) {
                return ''
            }
        }
    }
    // Declares a variable as an empty string to be added to
    let password = ''
        // A for loop continues until for the duration of the length of the password
    for (let i = 0; i < passwordLength; i++) {
        // A random index is chosen from the string of characters and added to the empty password string
        // This continues until the entire password is created
        password = password + characters[Math.floor(Math.random() * characters.length)]
    }
    return password
}