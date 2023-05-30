//1. Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).
function generation(x, y) {
    let generations = {
      '-3': { 'm': 'great grandfather', 'f': 'great grandmother' },
      '-2': { 'm': 'grandfather', 'f': 'grandmother' },
      '-1': { 'm': 'father', 'f': 'mother' },
      '0': { 'm': 'me!', 'f': 'me!' },
      '1': { 'm': 'son', 'f': 'daughter' },
      '2': { 'm': 'grandson', 'f': 'granddaughter' },
      '3': { 'm': 'great grandson', 'f': 'great granddaughter' }
    };
    return generations[x][y];
  }

//2. Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.
function removeLeadingTrailing(n) {
    let result = parseFloat(n).toString();
    if (result.includes('.')) {
      result = result.replace(/\.?0*$/, '');
    }
    result = result.replace(/^0+/, '');
    if (result === '' || result === '.') {
      result = '0';
    }
    return result;
  }

//3. Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.
function areaOfCountry(name, area) {
    let totalWorldLandmass = 148940000;
    let proportion = (area / totalWorldLandmass) * 100;
    let formattedProportion = proportion.toFixed(2);
    return `${name} is ${formattedProportion}% of the total world's landmass`;
  }

//4. Given an input string, reverse the string word by word, the first word will be the last, and so on.
function reverseWords(str) {
    let words = str.trim().split(/\s+/);
    return words.reverse().join(' ');
  }

//5. Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
function testJackpot(arr) {
    return arr.every(item => item === arr[0]);
  }

//6. You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".
function findNemo(sentence) {
    let words = sentence.split(' ');
    let nemoIndex = words.findIndex(word => word.toLowerCase() === 'nemo');
    if (nemoIndex !== -1) {
      return `I found Nemo at ${nemoIndex + 1}!`;
    } else {
      return "I can't find Nemo :(";
    }
  }

//7. Create a function that moves all capital letters to the front of a word.
function capToFront(word) {
    let capitalLetters = [];
    let lowerCaseLetters = [];
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (char === char.toUpperCase()) {
        capitalLetters.push(char);
      } else {
        lowerCaseLetters.push(char);
      }
    }
    return capitalLetters.join('') + lowerCaseLetters.join('');
  }

//8. Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.
function matchLastItem(arr) {
    let lastItem = arr[arr.length - 1];
    let concatenatedItems = arr.slice(0, arr.length - 1).join('');
    return lastItem === concatenatedItems;
  }

//9. Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
function removeDups(arr) {
    return [...new Set(arr)];
  }

//10. Write a DECIMATOR function which takes a string and decimates it (i.e. it removes the last 1/10 of the characters).
function decimator(str) {
    let length = Math.ceil(str.length * 0.9);
    return str.slice(0, length);
  }

//11. Given a string of numbers separated by a comma and space, return the product of the numbers.
function multiplyNums(nums) {
    let numbers = nums.split(', ');
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
      result *= Number(numbers[i]);
    }
    return result;
  }

//12. Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.
function reverseAndNot(i) {
    let reverse = Number(String(i).split('').reverse().join(''));
    return Number(`${reverse}${i}`);
  }

//13. Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.
function counterpartCharCode(char) {
    let charCode = char.charCodeAt(0);
    let upperCharCode = char.toUpperCase().charCodeAt(0);
    let lowerCharCode = char.toLowerCase().charCodeAt(0);
    
    if (charCode === upperCharCode) {
      return lowerCharCode;
    } else if (charCode === lowerCharCode) {
      return upperCharCode;
    } else {
      return charCode;
    }
  }
  

//14. Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.
function makeTitle(str) {
    let words = str.split(" ");
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(" ");
  }


//15. Write a function that reverses all the words in a sentence that start with a particular letter.
function specialReverse(sentence, letter) {
    let words = sentence.split(" ");
    let reversedWords = words.map(word => {
      if (word.charAt(0) === letter) {
        return word.split("").reverse().join("");
      }
      return word;
    });
    return reversedWords.join(" ");
  }
  
//16. An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".
function isIsogram(str) {
    let lowerCaseStr = str.toLowerCase();
    let charCount = {};
    for (let i = 0; i < lowerCaseStr.length; i++) {
      let char = lowerCaseStr[i];
      if (charCount[char]) {
        return false;
      }
      charCount[char] = 1;
    }
    return true;
  }
  
  
//17. Create a function that returns a capitalized version of the string passed. The first letter of each word in the string should be capitalized while the rest of each word should be lowercase.
function emphasise(str) {
    let words = str.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(" ");
  }
  
//18. Create a function that takes a word and returns true if the word has two consecutive identical letters.
function doubleLetters(word) {
    for (let i = 0; i < word.length - 1; i++) {
      if (word[i] === word[i + 1]) {
        return true;
      }
    }
    return false;
  }

//19. Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
function removeABC(str) {
    if (!/[abc]/i.test(str)) {
      return null;
    }
    return str.replace(/[abc]/gi, "");
  }

//20. Create a function that takes a string road and returns the car that's in first place. The road will be made of "=", and cars will be represented by letters in the alphabet.
function firstPlace(road) {
    if (!road) {
      return "No road available";
    }
    let cars = road.match(/[A-Za-z]/g);
    if (!cars) {
      return "No car available";
    }
    return cars[cars.length - 1];
  }
  
  

  