//Introduction to binary search trees!

class BSTNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    print(node = this.root) {
      if(!node) return;
  
      if(node.left) {
        this.print(node.left);
      }
  
      console.log(node.val);
  
      if(node.right) {
        this.print(node.right);
      }
    }
  
    /**
     * Determines if the BST is empty
     * 
     * @returns {boolean}
     */
  
    isEmpty() {
      // your code here
      return (this.root === null);
    }
  
    /**
     * Returns the minimum value in the BST: stretch for recursion
     * 
     * @param {BSTNode} node the starting node
     * @returns {number|null} the minimum value or null if empty
     */
  //      20
  //     /  \
  //   10   30
  //  /    /  \
  // 5    25  40
  
    min(node = this.root) {
      // your code here
      if(this.root === null){
        return null;
      }
      if(node.left) {
        return this.min(node.left);
      }
      return node.val;
    }
  
    /**
     * Returns the maximum value in the BST: stretch for recursion
     * 
     * @param {BSTNode} node the starting node
     * @returns {number|null} the maximum value or null if empty
     */
  
    max(node = this.root) {
      if(this.root === null){
        return null;
      }
      if(node.right) {
        return this.max(node.right);
      }
      return node.val;
    }
    
  }
  
  const bst = new BST();
  
  const root = bst.root = new BSTNode(20);
  
  console.log(bst.isEmpty()); // should log false
  
  root.left = new BSTNode(10);
  
  root.right = new BSTNode(30);
  
  root.left.left = new BSTNode(5);
  
  root.right.left = new BSTNode(25);
  root.right.right = new BSTNode(40);
  
  console.log(bst.min()); // should log 5
  
  console.log(bst.max()); // should log 40
  console.log("###########################")
  bst.print();
  
  
  //      20
  //     /  \
  //   10   30
  //  /    /  \
  // 5    25  40
  