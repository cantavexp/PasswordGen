// Assignment code here
  var characterLenght = 8;
  var choiceArr = [];
  var specialCharArr = ['!','@','#','$','%','&','(',')'];
  var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j'];
  var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J'];
  var numberArr = ['1','2','3','4','5','6','7','8','9','10'];


// Get references to the #generate element  //line 11= line 29 from html
var generateBtn = document.querySelector("#generate");   

// Add event listener to generate button  //line 14= line 18 from js
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {     //true or false function 
  var correctPrompts = getPrompts();  //line 19= line 44 from js
  var passwordText = document.querySelector("#password");
  
  if (correctPrompts) { // if return is true= line 33 js
  var newPassword = generatePassword();
  passwordText.value = newPassword;
}
  else 
   passwordText.value = ""; 
  
}



function generatePassword() {
  // return password from line 14 
  var password = "";
  for(var i = 0; i < characterLenght; i++ ) {
      var randomLetter = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomLetter];
  }
  return password; getPrompts()

}

function getPrompts() {

  choiceArr = [];
   
  characterLenght = parseInt(prompt("characters for password (5 - 10 characters"));
   
   if(isNaN(characterLenght) || characterLenght < 5 || characterLenght > 10) {
   alert("character lenght must be 5 -10....Try again");
    return false;
   }

   if (confirm("Use lowercase letters")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
   }

   if (confirm("Use uppercasecase letters")) {
    choiceArr = choiceArr.concat(upperCaseArr);
   }

   if (confirm("special characters")) {
    choiceArr = choiceArr.concat(specialCharArr);
   }

    if (confirm("characters for password")) {
      choiceArr = choiceArr.concat(numberArr);

    }
     return true;
   
   }


