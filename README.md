# password-generator

##Objective
The main goal for this project was to create a random password generator. The user is prompted to specify the length of the password in a given range.
They are also asked what type of characters they want to include in their password (lowercase, uppercase, numeric and/ or special).
With the given parameters a random password is generated and displayed when the generate button.

##Description of Code
The input for password length is first stored in a variable. The possible characters in their password is first initialized as an empty string. The characters they wish to include in their password are added to that empty string. A random number generator is used to choose an index in the concatenated string that will be added to their randomly generated password. A for loop is used to generate the randomly generated characters for the duration of their desired password length.

Other notes:
- While loops are used to ensure the user enters valid inputs
- The string input is converted to a number for the password length
- The toLowerCase function is used in case the user decides to input uppercase characters in the prompts (only if the input is not null)

##Future Endevers

1. Recreate the user interface
2. Add additonal buttons to clear the generated password and generate another one
3. Add additonal prompts for the user to choose more parameters for their password
4. Refactor the code and ensure optimal runtime

