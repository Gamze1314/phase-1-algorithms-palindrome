function isPalindrome(word) {
  // Write your algorithm here
  // palindrome : bastan sondan ayni okumali sozcuk, in lowercase
  // function will take in a string (input)
  // then will check if it is palindrome 
  // will return true if palindrome, 
  // else returns false

// START
// SPLIT THE WORD INTO LETTERS
// REVERSE THE WORD
// JOIN THE LETTERS
// IF WORD ARRAY !=== REVERSED WORD ARRAY
// RETURN FALSE 
// ELSE RETURN TRUE
// STOP

let reversedArr = word.split('').reverse().join('')
if (word === reversedArr) {
return true
} else {
return false
}}
  
isPalindrome('abba') // true
isPalindrome('ab') // false
isPalindrome('racecar')
isPalindrome('robot')

/* 
  Add your pseudocode here

// split the word- split() returns an array
// assign splitted word array to new variable, 
// reverse letters , reverse()
//join letters join()
// if [reversedWord] ==== [word]
// return true

*/

/*
  Add written explanation of your solution here
  Function takes in a string as parameter , and split() method will be used to split the letters and return the splitted word array. the reversed word will be the word parameter's reversed and joined letters and should be equal to the 'word. if the condition of the equality of word array and reversed word array meets , the function will return true, otherwise false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true")
  console.log("=>", isPalindrome("abba"))
    
  console.log("Expecting: false")
  console.log("=>", isPalindrome("ab"))
    
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

