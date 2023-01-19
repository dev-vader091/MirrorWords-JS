// entry point: controller function
function getValues() {
  // get user input
  let inputString = document.getElementById('userString').value;

  // if special chars/spaces -- validate/remove special characters -- if() statement
  let validatedString = removeChar(inputString);

  let checkString = checkForPalindrome(validatedString);

  displayResults(checkString, validatedString)
  
  // if no special chars/spaces -- run checkForPalindrome()
  // checkForPalindrome(inputString);

 }



// logic function
function checkForPalindrome(userInput) {
  // reverse the string
  let reversedString = "";

  
  let notPalindrome;
  let palindrome ;

  for(i = userInput.length - 1; i >= 0; i--) {
    let currentLetter = userInput[i];

    reversedString += currentLetter;

  }

  // compare to user input
  if(reversedString == userInput) {
    palindrome = reversedString;
    
  }else {
    notPalindrome = reversedString;
  }
  // return 
  return reversedString;
  
}

// view function
function displayResults(resultWord, inputString) {
  // display the result 
  let alertHeading = document.getElementById('alertHeading');
  let alertBox = document.getElementById('alert');
  let resultMessageHtml = document.getElementById('results');

  let resultMessage = `Your phrase reversed is: ${resultWord}`;

  let success = `Well done, you entered a Palindrome!`;

  let fail = `Sorry, you didn't enter a Palindrome.`;

  // let inputString = document.getElementById('userString').value;
  // inputString = removeChar(inputString);

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
  alertBox.classList.remove('alert-seuccess');
  alertBox.classList.add('alert-danger');
}

}

// validation function
function removeChar(word) {
   // word with regex goes here
  let changedString = word.replace(/[^a-zA-Z0-9]/g, '');

  return changedString;
}


