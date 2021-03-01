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
   * Returns the second to last value.
   * 
   * @returns {any|null} the second-to-last value (or null if empty)
   */
  // 5,4,3
  secondToLast() {
    if(this.head.next == null || this.head == null){
      return null;
    }
    let runner = this.head;
    while(runner.next.next){
      runner = runner.next;
    }
    return runner.val;
  }

  /**
   * Removes the value and returns a confirmation.
   * 
   * @param {any} val
   * @returns {boolean} confirmation of success
   */
  //1,2,3,4 //3
  removeVal(val) {
    // your code here
    // iterate through the list looking for val, then remove it and return true
    if(this.head.val == val){
      this.head = this.head.next;
      return true;
    }
    let runner = this.head;
    let prev = this.head;
    while (runner) {
      if (runner.val == val){
        prev.next = runner.next;
        return true;
      }
      prev = runner;
      runner = runner.next;        
    }
    return false;
  }

  /**
   * BONUS
   * Adds the given value before a specified value and returns confirmation
   * 
   * @param {any} insertVal the value to insert
   * @param {any} beforeVal the value to prepend to
   * @returns {boolean} confirmation of success
   */
// 4,3,2,1(5,3)
  prepend(insertVal, beforeVal) {
    // your code here
    if(!this.head){
      return false;
    }
    if(this.head.val == beforeVal){
      var newHead = new SLLNode(insertVal);
      newHead.next = this.head;
      this.head = new_node;
      return true;
    }
    let runner = this.head; // node with value 4
    while(runner.next){ // while the runner value is not null
      if(runner.next.val == beforeVal){
        //create a new node with value insertVal
        const node = new SLLNode(insertVal); // value: 5, .next = null;
        new_node.next = runner.next; // (4).next = (5)
        runner.next = new_node;
        return true;
      }
      runner = runner.next;
    }
    return false;
  }
  printList(){
    let runner = this.head;
    console.log("Printing the list:")
    console.log("###################")
    while(runner){
      console.log(runner.val + ", ")
      runner = runner.next;
    }
    console.log("###################")
  }
}

const list = new SLL();
list.insertAtBack(1);
// 1

console.log(list.secondToLast()); // should log null

list
  .insertAtBack(2)
  .insertAtBack(3)
  .insertAtBack(4);
// 1 -> 2 -> 3 -> 4

console.log(list.secondToLast()); // should log 3
console.log(list.removeVal(10)); // should log false

console.log(list.prepend(5, 3)); // should log true
// console.log(list.prepend(6, 1)); // should log true
// // 1 -> 2 -> 5 -> 3 -> 4
console.log(list.head.next.next.val); // should log 5
list.printList();