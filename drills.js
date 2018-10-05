'use strict';

//Create a stack called starTrek and add Kirk, Spock, McCoy, Scotty to the stack.

const Stack = require ('./stackClass');
const stack = new Stack();

function main() {
  let StarTrek = new Stack();

  function peek(stack) {
    let currNode = stack.top;
    if(currNode === null) {
      return null;
    } 
    return currNode.data; 
  }

  function display(stack) {
    let currNode = stack.top;
    while(currNode !== null) {
      console.log(currNode.data);
      currNode = currNode.next; 
    }
  }

  //Write an algorithm that uses a stack to determine whether a given input is palindrome or not. 
  //Use the following template as a starting point.
  function is_palindrome(string) {
    string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    //make new stack to hold all letters in the string  
    const letterStack = new Stack();
    for(let i = 0; i < string.length; i++) {
      letterStack.push(string[i]);
    } 
    
    //make new string to hold all letters popped off letterStack 
    //now the reverse of string is stored in stringReverse
    let stringReverse = '';
    while(letterStack.top !== null) {
      stringReverse = stringReverse + letterStack.pop();
    }
    if(string === stringReverse) {
      return true;
    }
    return false;
  }

  // true, true, true
  console.log(is_palindrome('dad'));
  console.log(is_palindrome('A man, a plan, a canal: Panama'));
  console.log(is_palindrome('1001'));
  console.log(is_palindrome('Tauhida'));


  StarTrek.push('Kirk');
  StarTrek.push('Spock');
  StarTrek.push('McCoy');
  StarTrek.push('Scotty');

  peek(StarTrek);
  // display(StarTrek);
  is_palindrome('dad');
  // console.log(peek(StarTrek));
  // console.log(JSON.stringify(StarTrek));
  
}


main();