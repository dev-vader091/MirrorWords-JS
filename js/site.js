// entry point: controller function
function getValues() {
  // get user input
  let inputString = document.getElementById('userString').value;

  // initialize a new varible and assign it the value returned from the validation function
  // this checks if there are any special chars in the input and removes them
  let newString = removeChar(inputString);

  // after validation -- initialize a variable and assign 
  // it the value returned from the logic function using the returned value of the 
  // validation function as the parameter in logic function(newSting above)
  let checkString = checkForPalindrome(newString);

  // view function to display results using the two variables above as 
  // parameters 
  displayResults(checkString, newString)

 }

// logic function
function checkForPalindrome(userInput) {
// initialize a variable to represent the string reversed  
  let reversedString = "";  
  // create a variable to represent a true/false value
  let palindrome ;

  // loop through parameter value -- starting from last index
  for(i = userInput.length - 1; i >= 0; i--) {
    // create a variable to repesent the current character i
    let currentLetter = userInput[i];
    
    // add the current i value to our initialized variable 
    reversedString += currentLetter;
  }

  // compare to user input
  // if the user input value matches the string from our loop
  // the palindrome variable initialized previously is given a true value
  if(reversedString == userInput) {
    palindrome = true;
  }
  // if the user input does not match the string from the loop
  // the palindrome variable is given a value of false
  else {
    palindrome = false;
  }
  // return our reversed string variable from the loop
  return reversedString;
  
}

// view function
function displayResults(resultWord, inputString) {
  // display the result 
  // get html elements
  let alertHeading = document.getElementById('alertHeading');
  let alertBox = document.getElementById('alert');
  let resultMessageHtml = document.getElementById('results');

  // create a message displaying to user the new word/phrase 
  let resultMessage = `Your phrase reversed is: ${resultWord}`;
  // create success/fail messages 
  let success = `Well done, you entered a Palindrome!`;
  let fail = `Sorry, you didn't enter a Palindrome.`;


  // let inputString = document.getElementById('userString').value;
  // inputString = removeChar(inputString);

  // using if statement, determine if the parameter values match and
  // display corresponding messages
  if(resultWord == inputString) {
    alertHeading.textContent = success;
    resultMessageHtml.textContent = resultMessage;
    alertBox.classList.remove('invisible');
    alertBox.classList.remove('alert-danger');
    alertBox.classList.add('alert-success');
  }
  else {
    alertHeading.textContent = fail;
    resultMessageHtml.textContent = resultMessage;
    alertBox.classList.remove('invisible');
    alertBox.classList.remove('alert-success');
    alertBox.classList.add('alert-danger');
  }
}

  // validation function
  function removeChar(word) {
    // the user input value is used a the parameter (word)
    // and is changed to lower case
    word = word.toLowerCase();
    // a regular expression is used to create a new string from the parameter value
    //  this will remove any special characters and/or spaces from the parameter value
    let changedString = word.replace(/[^a-zA-Z0-9]/g, '');

    // return the value of the new string
    return changedString;
}


