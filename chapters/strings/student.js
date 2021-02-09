function firstChar(string) {
    return string[0];
   }
   
   function lastChar(string) {
       return string[string.length - 1];
   }
   
   function isEmptyString(string) {
       return string.length === 0;
   }
   
   function formatTime(h, m, s, ms) {
       return `${h}:${m}:${s}.${ms}`;
   }
   
   function repeat(n, string) {
       return string.repeat(n);
   }
   
   function join(strings, separator) {
       return strings.join(separator);
   }
   
   function prefix(str, n) {
       return str.substring(0,n);
   }
   
   function suffix(str, n) {
       return str.substring(str.length - n);
   }
   
   function startsWith(beginning, string) {
       return prefix(string, beginning.length) === beginning;
   }
   
   function endsWith(ending, string) {
       return suffix(string, ending.length) === ending;
   }
   
   function isSubstringOf(substring, string) {
       return string.includes(substring);
   }
   
   function split(string, separator) {
       let result = [];
       let currentWord = "";
       for (let char of string) {
           if (isSeparator(char)) {
               finishWord();
           } else {
               addToCurrentWord(char);
           }
       }
       finishWord();
       return result;
   
       function isSeparator(char) {
           return char === separator;
       }
   
       function finishWord() {
           result.push(currentWord);
           currentWord = '';
       }
   
       function addToCurrentWord(char) {
           currentWord += char;
       }
   }
   
   function split2(string, separator) {
       let result = [];
       let currentWord = "";
       for (let char of string) {
           if (isSeparator(char)) {
               finishWord();
           } else {
               addToCurrentWord(char);
           }
       }
       finishWord();
       return result;
   
       function isSeparator(char) {
           return char === separator;
       }
   
       function finishWord() {
           if (currentWord.length > 0) {
               result.push(currentWord);
               currentWord = '';
           }
       }
   
       function addToCurrentWord(char) {
           currentWord += char;
       }
   }
   
   function split3(string, separators) {
       let result = [];
       let currentWord = '';
       for (let char of string) {
           if (isSeparator(char)) {
               finishWord();
           } else {
               addToCurrentWord(char);
           }
       }
       finishWord();
       return result;
   
       function isSeparator(char) {
           for (let separator of separators) {
               if (char === separator) {
                   return true;
               }
           }
           return false;
       }
   
       function finishWord() {
           if (currentWord.length > 0) {
               result.push(currentWord);
               currentWord = '';
           }
       }
   
       function addToCurrentWord(char) {
           currentWord += char;
       }
   }
   
   function balanced(string) {
       let count = 0;
       for (let char of string) {
           if (char === '(') {
               ++count;
           } else if (char ===')') {
               if (count === 0) {
                   return false;
               } else {
                   count--;
               }
           }
       }
       return count === 0;
   }
   
   function equalIgnoringSpaces(s1, s2) {
       return removeSpaces(s1) === removeSpaces(s2);
   }
   
   function removeSpaces(str) {
       let withoutSpaces = '';
       for (const char of str) {
           if (char !== ' ') {
               withoutSpaces += char;
           }
       }
       return withoutSpaces;
   }