// Assignment code here
function promptUser() {
  const promptLength = window.prompt('Choose length of password. (Between 8 and 128)')
  const promptLowerCase = window.confirm('Press OK if you would like lowercase letters in your password.')
  const promptUpperCase = window.confirm('Press OK if you would like uppercase letters in your password.')
  const promptSpecialCharacters = window.confirm('Press OK if you would like special characters in your password.(!@#$ etc.)')
  const promptNumbers = window.confirm('Press OK if you would like numbers in your password.')
  createPassword(promptLength, promptLowerCase, promptUpperCase, promptSpecialCharacters, promptNumbers)
}

function createPassword(promptLength, promptLowerCase, promptUpperCase, promptSpecialCharacters, promptNumbers) {
  const password = ""
  // length = parseInt(promptLength)
  const options = [];
  if (promptUpperCase) {
    var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   
    // for (let i = 0; i < upperCaseCharacters.length; i++) {
    //   console.log(upperCaseCharacters[i]);
    //   {
    //     options.push(String.upperCaseCharacters[i])
    //   }
    // }
  }
}
// console.log(createPassword)

function randomNumber() {

  const value = Math.floor((Math.random() * 128) + 1);
  return value
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", randomNumber);