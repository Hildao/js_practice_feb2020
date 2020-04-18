function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  return word.slice(0, 1).toUpperCase() + word.slice(1, word.length).toLowerCase();
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  
  return firstName.split('')[0].toUpperCase() + '.' + lastName.split('')[0].toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // divide VAT rate by 100 first, then add 1 and then multiply by original price
  var val = originalPrice * (1 + (vatRate / 100));
  //round the number returned to 2 decimal places
  return Math.round(val * 100) / 100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // divide VAT rate by 100 first, then subtract the percentage from 1 and then multiply by original price
  var val = originalPrice * (1 - (reduction / 100));
  //round the number returned to 2 decimal places
  var roundedVal = Math.round(val * 100) / 100;
  return roundedVal;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // find out if the remainder is 0 then its an even number else its an odd number.
  if (str.length % 2 == 0) {  //even number
    var position = str.length / 2;
    //if even number get the middle two characters
    return str.slice(position - 1, position + 1);
  } else {
    //odd number
    var position = Math.floor(str.length / 2);
    //if odd number just get the middle character
    return str.slice(position, position + 1);
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  var wordArray = word.split('');
  var reversedWord = '';
  //loop backwards
  for (let i = wordArray.length - 1; i >= 0; i--) {
    reversedWord += wordArray[i];
  }
  return reversedWord;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  //take a word at a time
  for (var i = 0; i < words.length; i++) {
    //reverse the word using the above function reverseWord
    let reversedWord = reverseWord(words[i]);
    //set the reversed word to the same position in the array
    words[i] = reversedWord;
  }
  return words;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  var count = 0;
  for (var i = 0; i < users.length; i++) {
    //get a user
    let user = users[i];
    //if user type is Linux increment counter
    if (user.type === 'Linux') {
      count++;
    }
  }
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  var total = 0;
  //add all the individual scores to total.
  for (var i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  //find the mean round it
  return Math.round(((total / scores.length) * 100)) / 100;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  //if divisible by both return fizzbuzz
  if (n % 3 == 0 && n % 5 == 0) {
    return 'fizzbuzz';
    //if divisible by 3 return fizz
  } else if (n % 3 == 0) {
    return 'fizz';
    //if divisible by 5 return buzz
  } else if (n % 5 == 0) {
    return 'buzz';
    //else return number
  } else {
    return n;
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};