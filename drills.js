'use strict';

//Create a stack called starTrek and add Kirk, Spock, McCoy, Scotty to the stack.

const Stack = require ('./stackClass');
const stack = new Stack();

function main() {
  let StarTrek = new Stack();

  StarTrek.push('Kirk');
  StarTrek.push('Spock');
  StarTrek.push('McCoy');
  StarTrek.push('Scotty');

  console.log(JSON.stringify(StarTrek));
}

main();