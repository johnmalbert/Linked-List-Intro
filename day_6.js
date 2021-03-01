/**
 * Stacks are LIFO (Last In First Out)
 */

class SLLNode{
    //next
    //value
    constructor(val) {
      this.value = val;
      this.next = null;
    }
  }
  class Stack {
    constructor() {
      // this.values = [];
      this.head = null;
    }
  
    /**
     * Adds a new value to the top.
     * 
     * @param {any} val the value to add
     * @returns {number} the new size of the stack
     */
  
    push(val) {
      // your code here
      // this.values.push(val);
      // return this.values.length;
      const newNode = new SLLNode(val);
      if(!this.head){
        this.head = newNode;
      } else {
        let temp = this.head;
        this.head = newNode;
        this.head.next = temp;
      }
      return this.count();
    }
    count(){
      let runner = this.head;
      var counter = 0;
      while(runner){
        runner = runner.next;
        counter++;
      }
      return counter;
    }
    /**
     * Removes and returns the top value.
     * 
     * @returns {any} the removed top value
     */
  
    pop() {
      // your code here
      if(!this.isEmpty()){
        let temp = this.head;
        this.head = this.head.next;
        return temp.value;
      }
      return "Nothing in the list";
    }
  
    /**
     * Returns whether the stack is empty.
     * 
     * @returns {boolean}
     */
  
    isEmpty() {
      // your code here
      if(!this.head){
        return true;
      }
      return false;
    }
  
    /**
     * @returns {number} the number of items in the stack
     */
  
    size() {
      // your code here
      return this.count();
    }
  
    /**
     * Returns, but doesn't remove, the top value.
     * 
     * @returns {any} the top value
     */
  
    peek() {
      // your code here
      if(!this.isEmpty()){
        return this.head.value;
      }
      return null;
    }
  }
  
  const stack = new Stack();
  
  console.log(stack.push('this')); // should log 1
  // 'this'
  
  stack.push('that');
  // 'that'
  // 'this'
  
  console.log(stack.size()); // should log 2
  
  console.log(stack.pop()); // should log 'that'
  console.log(stack.pop()); // should log 'that'
  console.log(stack.pop()); // should log 'that'
  // // 'this'
  
  console.log(stack.peek()); // should log 'this'
  
  console.log(stack.isEmpty()); // should log false