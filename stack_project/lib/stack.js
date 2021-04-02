// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(val) {
        this.next = null;
        this.value = val;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    //instertion
    push(val) {
        let node = new Node(val)
        if (!this.top) {
            this.top = node;
            this.bottom = node;
        } else {
            let prevTop = this.top;
            this.top = node;
            this.top.next = prevTop;
        }

        this.length++;

        return this.length;

    }
    //deletion
    pop() {
        let removed
        if(!this.length) {
            return null;
        } else {
            removed = this.top;
            if(this.length === 1) {
                this.top = null;
                this.bottom = null;
            } else{

                this.top = this.top.next;
            }

        }
        this.length--;
        return removed.value;

    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
