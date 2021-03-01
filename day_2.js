
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
  
    /**
     * Adds a node to the front of the list with the given value.
     * 
     * @param {any} val the value to add
     * @returns {SLL} the list
     */
    // 3, 4, 2, 7
  
    insertAtFront(val) {
      // your code here
      const newNode = new SLLNode(val);
      if(this.head === null){ // Check if SLL is empty
              this.head = newNode;
      }else{
        newNode.next = this.head;
        this.head = newNode;
      }
      return this;
    }
    
    insertAtBack(val) { 
          // what if the list is empty? Put val in the front
          const newNode = new SLLNode(val); // creates the new node
  
          if(this.head === null){ // Check if SLL is empty
              this.head = newNode;
          } else {
              let runner = this.head;
              while(runner.next != null){
                  runner = runner.next; // move on down the line
              }
              runner.next = newNode;
          }
          return this; // this returns the list object
  
      }
    /**
     * Removes and returns the value of the head node (or null if empty).
     * 
     * @returns {any|null}
     */
    // 3, 2, 1
    removeHead() {
      // your code here
      let pointer;
      if(this.head === null){ // Check if SLL is empty
              return null;
      }else{
        pointer = this.head;
        this.head = pointer.next;
      }
      return pointer.val;
    }
  
    /**
     * BONUS: returns the average of all values in the list.
     * 
     * @returns {number} the average of all values
     */
    // 3,2,1
    getAverage() { 
      // your code here
    let sum = 0;
    let count = 0;
    if(this.head === null){ // Check if SLL is empty
            return 0;
        } else {
            let runner = this.head;
            while(runner != null){
                count++;
                sum += runner.val; // move on down the line
                runner = runner.next;
            }
        }
        return sum/count;
    }
  }
  
  const list = new SLL();
  
  
  list.insertAtFront(1);
  console.log(list.head.val); // should log 1
  
  list.insertAtFront(2);
  console.log(list.head.val); // should log 2
  
  list.insertAtFront(3);
  console.log(list.head.val); // should log 3
  
//   list.insertAtBack(4);
  
//   // list.removeHead();
//   list.removeHead();
//   console.log(list.head.val);
  
  console.log("Average is " + list.getAverage()); 
  
  // list.insertAtFront(3);
  // console.log(list.head.val); // should log 3
  
  // console.log(list.getAverage()); // should log 2
  
  
  // console.log(list.getAverage()); // should log 1
  
  
  