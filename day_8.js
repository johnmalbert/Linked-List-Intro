class Queue {
    constructor() {
      this.values = [];
    }
  
    /**
     * Adds a value and returns the new size.
     * 
     * @param {any} val
     * @returns {number} the new size
     */
  
    enqueue(val) {
      this.values.push(val);
      return this.values.length;
    }
  
    /**
     * @returns {any} the removed (front) value
     */
  
    dequeue() {
      return this.values.shift();
    }
  
    /**
     * @returns {boolean}
     */
  
    isEmpty() {
      return this.values.length === 0;
    }
  
    /**
     * @returns {number}
     */
  
    size() {
      return this.values.length;
    }
  
    /**
     * Determines whether the first half's sum equals the second half's sum
     * DO NOT manually index the queue items, 
     * only use the provided queue methods, 
     * use no additional arrays or objects for storage
     * Restore the queue to its original state.
     * 
     * @returns {boolean}
     */
  
    sumOfHalvesEqual() {
      // your code here
      var lengthOfStack = this.size();
      
      //if length of stack is odd, return false right away.
      if(lengthOfStack % 2 == 1 ){
        return false 
      }
      // 1,2,3,3,2,1 => 2,3,3,2,1,1 => 3,3,2,1,1,2 => 3,2,1,1,2,3
      var sum = 0;
      for(var i = 0; i < lengthOfStack/2; i++){
        var dequeuedVal = this.dequeue();
        sum += dequeuedVal;
        this.enqueue(dequeuedVal);
      }
      // sum = 6, 3, 1, 0  
      // 3,2,1,1,2,3 => 2,1,1,2,3,3 => 1,1,2,3,3,2 => 1,2,3,3,2,1
      for(var i = 0; i < lengthOfStack/2; i++){
        var dequeuedVal = this.dequeue();
        sum -= dequeuedVal;
        this.enqueue(dequeuedVal);
      }
      return (sum === 0);
    }
  }
  
  const queue = new Queue();
  queue.enqueue(1);
  // 1
  
  queue.enqueue(2);
  // 1 - 2
  
  queue.enqueue(3);
  // 1 - 2 - 3
  
  queue.enqueue(3);
  // 1 - 2 - 3 - 3
  
  queue.enqueue(2);
  // 1 - 2 - 3 - 3 - 2
  
  queue.enqueue(4);
  // 1 - 2 - 3 - 3 - 2 - 1
  
  console.log(queue.sumOfHalvesEqual());
  // should log true (6 and 6)