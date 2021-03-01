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
     * Combines the list with a given list, lengthening it.
     * 
     * @param {SLL} otherList the list to concatenate it to
     * @returns {SLL} the original (lengthened) list
     */
  //list one : 1,2 
  //list two: 3,4    
  //result: 1, 2, 3, 4
    concat(otherList) {
      // runner = head, move through the first list until we reach the end.
      // when we reach the end of the first list, we set runner.next to the head of the second list.
      if(this.head == null){
        this.head = otherList.head;
        return this;
      }
      let runner = this.head;
      while(runner.next != null){ //(runner)
        runner = runner.next;
      }
      runner.next = otherList.head;
      return this;
    }
  
    /**
     * Moves the minimum value to the front of the list.
     * 
     * @returns {SLL} the original (modified) list
     */
  // 3, 4, 0 --> should return 0, 3, 4, 
  // 3, 4, 0, 5 should return 0, 3, 4, 5
  // 0, 3, 4 should return 0, 3, 4 
  
  
    moveMinToFront() {
      // your code here
      if (this.head == null){
        return this;
      }
      let prev = null;
      let runner = this.head;
      var minNode = runner;
      while(runner != null){
        if(runner.val < minNode.val){
          minNode = runner;
          prev.next = runner.next;
        }
        prev = runner;
        runner = runner.next;
      }
      // put the minNode at the front of the list.
      let originalHead = this.head;
      this.head = minNode;
      minNode.next = originalHead;
      return this; 
    }
  //(1)-(2)-(3)-(4)
    /**
     * Splits the list into two lists, the second starting at the given value.
     * 
     * @param {any} val the value to split on
     * @returns {SLL} the second list
     */
  // 2, 3, 4, 5 on val 4 --> should return 4, 5 (original changed to 2, 3)
  // 2, 3, 4, 5 on val 5 --> should return 5, (original changed to 2, 3, 4)
  // 2, 3, 4, 5 on val 2 -- should return 2, 3, 4, 5, (original changed to null)
    splitOnVal(val) {
      // your code here
      const list2 = new SLL();
      if(this.head == null){
        return false; 
      }
      let runner = this.head;
      
      while(runner.next != null){
        if (runner.val == val){
          list2.head = runner; //start of list 2
          // remove the last half of list1
          prev.next = null;
          return list2;
        }
        var prev = runner;
        runner = runner.next;
      }
      return list2;    
    }
    
    
    
    printList(){
      let runner = this.head;
      console.log("Printing List.")
      while(runner){
        console.log(runner.val + ", ");
        runner = runner.next;
      }
      console.log(" end of list. ");
    }
  }
  
  const list1 = new SLL();
  list1.insertAtBack(1).insertAtBack(2);
  // 1 -> 2
  list1.printList();
  const list2 = new SLL();
  list2.insertAtBack(3).insertAtBack(4);
  // 3 -> 4
  list2.printList();
  list1.concat(list2);
  // 1 -> 2 -> 3 -> 4
  list1.printList();
  console.log(list1.head.next.next.next.val); // should log 4
  console.log(list1.head.val); // should log 1
  
  list1.insertAtBack(0);
  list1.insertAtBack(5);
  // // 1 -> 2 -> 3 -> 4 -> 0
  
  list1.moveMinToFront();
  // // 0 -> 1 -> 2 -> 3 -> 4
  list1.printList();
  console.log(list1.head.val); // should log 0
  
  const secondList = list1.splitOnVal(2);
  // 0 -> 1
  // 2 -> 3 -> 4
  list1.printList();
  secondList.printList();
  console.log(list1.head.next.next); // should log null
  console.log(secondList.head.val); // should log 2