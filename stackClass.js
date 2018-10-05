'use strict';

const _Node = require('./node');
const node = new _Node();

class Stack  {
  constructor() {
    this.top = null; 
  }
  push(data) {
    if(this.top === null) {  //if top is empty
      this.top = new _Node(data, null); //data will be top
      return this.top;
    }
    //if top has data, create new node that has data and pointer pointing to top
    const node = new _Node(data, this.top);
    this.top = node; //the top is now the new node 
  }

  pop() {
    const node = this.top; //create node
    this.top = node.next; //point the pointer to the next item and that becomes the top
    return node.data;
  }

}

module.exports = Stack; 