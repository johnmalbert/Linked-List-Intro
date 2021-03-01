/**
 * Singly-Linked List Node class
 */

class SLLNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  /**
   * Singly-Linked List class
   */
  
  class SLL {
    constructor() {
      this.head = null; // the list is initially empty
    }
  
    insertAtBack(val) {
      const node = new SLLNode(val);
  
      if(!this.head) {
        this.head = node;
      } else {
        let runner = this.head;
  
        while(runner.next) {
          runner = runner.next;
        }
  
        runner.next = node;
      }
      return this;
    }
  
    /**
     * Determines whether the given value is in the list.
     * 
     * @param {any} val the value to find
     * @returns {boolean}
     */
  
  // 5, 7, 6  10
    contains(val) {
      // your code here
      //so val is == to some characteristic of value
      //We need something to iterate over the SLL
      //We need something to check SLL Node value == value
      let runner = this.head;

      while(runner) { // check if that's our value
        //code here before "while loop"
        //if val == val return "true"
        if(runner.val == val){ //checks next val 
          return true;
        }
        runner = runner.next; //if vals are not equals move to next
      }

    
      return false;
    }
      
    
  
    /**
     * Removes the last node and returns its value (or null if list is empty).
     * 
     * @returns {any|null}
     */
  // 5, 7, 6
    removeBack() {
      if(!this.head) 
      {            //if list is empty it'll return false.
        return null;
      } else if(this.head.next == null){
         //remove the first node
         var valHead = this.head.val;
         this.head = null;
         return valHead;
      }
        else {
        let runner = this.head //runner = 5 

        while(runner.next.next) {  //runner.next.next grabs 6
          // iterate to the end of the list
          runner = runner.next;    // while runner.next =7 
        }
        var lastVal = runner.next.val;   
        runner.next = null;              
        return lastVal;
        // runner.next = null;
      }
    }
  
    /**
     * BONUS: Finds and returns the maximum value (or null if list empty) recursively.
     * 
     * @param {SLLNode} node
     * @param {SLLNode} maxNode
     * @returns {any|null}
     */
    
    max() {
      // your code here
      if(!this.head){
        return null;
      }else{
        let max = 0;
        let runner = this.head;
        while(runner){
          if(runner.val > max){
            max = runner.val;
          }
          runner = runner.next;
        }
        return max;
      }
    }

    recursiveMax(node = this.head, maxNode = this.head){
        if(this.head === null){
            return null
        } 
            
        if(node.val > maxNode.val) {
            maxNode = node;
        }
        if(node.next === null){
            return maxNode.val
        } 
        return this.recursiveMax(node.next, maxNode)
    }
  }

  // base return max;
  //forward if runner
  //recursive
  const list = new SLL();
  
  list.insertAtBack(5);
  list.insertAtBack(7);
  list.insertAtBack(6);
  
  console.log(list.contains(6)); // should log true
  console.log(list.contains(10)); // should log false
  
 console.log("Removing this number from the list: ", list.removeBack()); // should log 6
 console.log("Removing this number from the list: ", list.removeBack()); // should log 6
 console.log("Removing this number from the list: ", list.removeBack()); // should log 6

  list.insertAtBack(20);
  
  console.log(list.max()); // should log 20
  console.log(list.recursiveMax()); // should log 20