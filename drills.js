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

  StarTrek.push('Kirk');
  StarTrek.push('Spock');
  StarTrek.push('McCoy');
  StarTrek.push('Scotty');

  peek(StarTrek);

  console.log(peek(StarTrek));
  console.log(JSON.stringify(StarTrek));
  
}


main();