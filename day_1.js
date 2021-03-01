//Singly linked lists!
class SLLNode { 
    constructor(val) { //a constructor is some code we run every time we create an object of a class
        this.val = val;
        this.next = null;
    }
}

class SLL {
    contructor() {
        this.head = null;
    }


    isEmpty() {
        //this function determines if the SLL is empty
        // if(this.head == null){
        //     return true;
        // }else{
        //     return false;
        // } This works, but isn't super elegant

        return this.head === null; // "this" (like self in python) is the instance of the object. Will return a boolean, true or false
    }

    // add a node to the end of a list 
    // @param {any} val a value to add
    // @returns {SLL} the list

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
    /*
        Adds all the array values to the list
        @param {any[] arr} list of values
        @returns {SLL} the list

    */
    seedFromArr(arr){
        //optimize this code today (avoid traversing entire list for each item)

        for(var i = 0; i < arr.length; i++){
            this.insertAtBack(arr[i]);
        }
        return this;
    }

    display(){
        // your code here
    }

}
