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
     * Inserts the value in the appropriate place in the tree.
     * Stretch for recursion if you can.
     * 
     * @returns {BST} a reference to this tree
     */
  //      20
  //     /  \
  //   10   30
  //  /    /  \
  // 5    25  40 //20,10,30,40,25,5,7
    insert(val) {
      // your code here
      //create a new node with value val
      const newNode = new BSTNode(val);
      //check if the root is empty
      if(this.root == null){
      //if root is empty, set the root equal to new node
        this.root = newNode;
        return this;
      }
      //if root is greater than new node value, go left. Else, go right.
      let runner = this.root;
      while(runner.left != null || runner.right != null){
        if(newNode.val < runner.val){
          if(runner.left != null){
            runner = runner.left;
          }else{
            runner.left = newNode;
            return this;
          }
          console.log("Runner is now " + runner.val);
        }else{
          if(runner.right != null){
            runner = runner.right;
          }else{
            runner.right = newNode;
            return this;
          }
          console.log("Runner is now " + runner.val);
        }
      }
      if(newNode.val < runner.val){
        runner.left = newNode;
      }else{
        runner.right = newNode;
      }
      return this;
    }
  }
  
  const bst = new BST();
  
  // note the chaining
  bst
    .insert(20)
    .insert(10)
    .insert(30)
    .insert(40)
    .insert(25)
    .insert(5)
    .insert(7)
    .insert(50)
    .insert(3)
    .insert(2)
    .insert(43);
  
  const { root } = bst;
  
  console.log(root.val);
  console.log(root.right.val);
  console.log(root.left.val);
  
  console.log(root.right.left.val); // should log 25
  
  console.log(root.right.right.val); // should log 40
  
  console.log(root.left.val); // should log 10
  
  console.log("##########################")
  bst.print();
  
  