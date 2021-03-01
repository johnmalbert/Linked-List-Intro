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
   * Determines if the value is in the tree.
   * Stretch for recursion if you can.
   * 
   * @returns {boolean}
   */
//      20
//     /  \
//   10   30
//  /    /  \
// 5    25  40 //val = 5
  contains(val) {
    if (this.root === null)
      return false;
    let runner = this.root;
    //while loop here:
    while(runner.left != null || runner.right != null){
      if (val == runner.val){
        return true;
      } else if (val > runner.val){
        runner = runner.right
      } else {
        runner = runner.left
      }
    }
    // console.log("Runner val is " + runner.val);
    if (val == runner.val){
        return true;
    }
    return false;      
  }

  /**
   * Determines the difference between the max and the min values.
   * 
   * @returns {number|null} an integer or null if empty
   */

    range() {
        if(!this.root) {return null}
        if(!this.root.left && !this.root.right) {return 0}

        var min = this.root;
        
        while(min.left){
            min = min.left
        }

        var max = this.root;
        while(max.right){
            max = max.right
        }

        return max.val - min.val
    }
//      20
//     /  \
//   10   30
//  /    /  \
// 5    25  40 val = 30
    containsRecursive(val, node=this.root) {
      //base case: value found or no right or left node
      if (!node) {return false}
      if(node.val == val){return true}

      if(node.val < val){
        return this.containsRecursive(val, node.right);
      } else {
        return this.containsRecursive(val, node.left);
      }
    }
}

const bst = new BST();

const root = bst.root = new BSTNode(20);

root.left = new BSTNode(10);

root.right = new BSTNode(30);

root.left.left = new BSTNode(5);

root.right.left = new BSTNode(25);
root.right.right = new BSTNode(40);

bst.print();

console.log(bst.contains(2)); // should log false
console.log(bst.contains(25)); // should log true
console.log(bst.contains(0)); // should log false
console.log(bst.contains(5)); // should log true
console.log(bst.contains(40)); // should log true
console.log(bst.contains(30)); // should log true


console.log(bst.range()); // should log 35 (40 - 5)
console.log(bst.containsRecursive(30)); // should log true

//      20
//     /  \
//   10   30
//  /    /  \
// 5    25  40