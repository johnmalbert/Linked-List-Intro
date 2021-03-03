class DLLNode {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DLL {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    /**
     * Determines whether the list is empty.
     * 
     * @returns {boolean}
     */
  
    isEmpty() {
      // your code here
      return (this.head==null);
    }
  
    /**
     * Gathers the values into a new array.
     * 
     * @returns {any[]} the array of values
     */
  
    toArray() {
      // your code here
      var arr = [];
      let runner = this.head;
      while(runner){
        arr.push(runner.val);
        runner = runner.next;
      }
      console.log(arr);
      return arr;
    }
  
    /**
     * Adds values from an array to the list.
     * 
     * @param {any[]} arr an array of values
     * @returns {DLL} the list
     */
  
    seedFromArray(arr) {
      // your code here
      for(var i = 0; i < arr.length; i++){
        const newNode = new DLLNode(arr[i]);
        if(i == 0){
          this.head = newNode;
          this.tail = newNode;
        }else{
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
        }
      } 
      return this;
    }
  
    /**
     * Inserts a value at the front of the list.
     * 
     * @returns {DLL} the list
     */
  
    insertAtFront(val) {
      // your code here
      const newNode = new DLLNode(val)
      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
        return this
      }
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      return this
    }
  
    /**
     * Inserts a value at the and of the list.
     * 
     * @returns {DLL} the list
     */
  
    insertAtBack(val) {
      // your code here
      const newNode = new DLLNode(val)
      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
        return this
      }
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      return this;
    }
  
    /**
     * Removes and returns the middle value from the list.
     * 
     * @returns {any|null} the removed value or null if there is no middle value
     */
  //1,2,3,4,5
    removeMiddleNode() {
      // your code here
      let runner = this.head;
      let endRunner = this.tail;
      while(runner != endRunner && runner.prev != endRunner){
        runner = runner.next;
        endRunner = endRunner.prev;
      }
      if(runner == endRunner){//remove the node.next = runner.next;
        runner.prev.next = runner.next;
        runner.next.prev = runner.prev;
        return runner.val;
      }
      return null;
    }
  }
  
  const dll = new DLL();
  
  dll.seedFromArray([1, 2, 3, 4]);
  // 1 <-> 2 <-> 3 <-> 4
  
  console.log(dll.isEmpty()); // should log false
  
  dll.insertAtFront(10);
  // 10 <-> 1 <-> 2 <-> 3 <-> 4
  
  console.log(dll.removeMiddleNode()); // should log 2
  // 10 <-> 1 <-> 3 <-> 4
  console.log(dll.head.next.next.val); // should log 3
  