// Problem 1: Reverse a String
const reverseString = (stringToReverse) => {
    const arr = stringToReverse.split('')
    const newArr = []
    for(let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }

    return newArr.join('')
}

// const reversed = reverseString("Reversed");
// console.log(reversed);



// Problem 2: Count Vowels in a String
const vowelCounter = (wordToAnalyze) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']; 
    const lowerCasedWord = wordToAnalyze.toLowerCase(); // AEIOU
    let count = 0;
    for(let i = 0; i < lowerCasedWord.length; i++) {
        vowels.forEach(vowel => {
            if(lowerCasedWord[i] == vowel) {
                count++;
            }
        })
    }

    return count;
}

// const vowels = vowelCounter('AeEG') // 3
// console.log(vowels);



// Problem 3: Check for Palindrome
const checkForPalindrome = (word) => {
    const arr = word.split('') // Hello ['H', 'e', 'l', 'l', 'o'] []
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }

    return JSON.stringify(arr) == JSON.stringify(newArr)
}
// const palindromeResult = checkForPalindrome("madam") // true
// const palindromeResult = checkForPalindrome("river") // false
// console.log(palindromeResult)


// Problem 4: Find the Maximum Number
const checkMaximum = (numArr) => {
    let largest = numArr[0];
    for(let i = 0; i < numArr.length; i++) {
        if(numArr[i] > largest) {
            largest = numArr[i];
        }
    }

    return largest;
}
// const largestNumber = checkMaximum([5, 1, 9, 3]);
// console.log(largestNumber)



// Problem 5: Remove Duplicates from an Array
const removeDuplicates = (arrToChange) => {
    const newArr = [...new Set(arrToChange)]
    return newArr;
}

// const filteredArr = removeDuplicates([1, 1, 2, 6, 9, 8, 5, 6, 2, 97]);
// console.log(filteredArr);


// Problem 6: Sum of All Numbers in an Array
const sumAll = (arr) => {
    let sum = 0 ;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// const summedUpValue = sumAll([1, 2, 3]);
// console.log(summedUpValue);


// Problem 7: Find Even Numbers in an Array
const filterEvenNumbers = (numbers) => {
    return numbers.filter(num => num % 2 == 0);
}

// const filteredArr = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(filteredArr);



// Problem 8: Capitalize First Letter of Each Word
const capitalizeWords = (str) => {
    const wordsArr = str.split(' ');
    let newArr = []
    for(let i = 0; i < wordsArr.length; i++) {
        newArr[i] = wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1);
    }
    return newArr.join(' ');
}
// const capitalized = capitalizeWords("is THis WoRking?")
// console.log(capitalized);


// Problem 9: Find the Factorial of a Number
const determineFactorial = (number) => { 
    let count = 1;
    for(let i = 1; i <= number; i++) {
        count = count * i;
    }


    return count;
}

// 5 (1, 2, 3, 4, 5)

// const factorialOf = determineFactorial(100);
// console.log(factorialOf);



// Problem 10: PingPong Challenge
const pingPong = () => {
    let newArr = [];
    for(let i = 1; i <= 2; i++) {
        if(i % 3 === 0 && i % 5 === 0 ) {
            newArr.push("PingPong")
        }
        else if(i % 3 === 0) {
            newArr.push("Ping");
        }
        else if(i % 5 === 0) {
            newArr.push("Pong");
        }
        else {
            newArr.push(i);
        }
    }

    return newArr.join(', ')
}

const ponged = pingPong();
console.log(ponged);