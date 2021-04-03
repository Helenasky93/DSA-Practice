// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
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
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(val) {
        let node = new Node(val);
        if(!this.length) {
            this.front = node;
            this.back = node;
        } else {
            if(this.length === 1) {
                this.front.next = node
            }
            let oldBack = this.back;
            this.back = node;
            this.back.next = oldBack;
            // let temp = this.back;
            // // console.log("temp.next", temp);
            // while (temp) {
            //     if (temp.next === this.front) {
            //         this.front.next = temp
            //         // this.front.next = null;
            //         break
            //     }
            //     temp = temp.next
            // }

        }
        this.length++;
        return this.length;

    }

    dequeue() {
        let oldFront;
        if (!this.length) {
            return null;
        } else {
            oldFront = this.front;
            if(this.length === 1) {
                this.front = null;
                this.back = null;
            } else {
                let temp = this.back;
                // console.log("temp.next", temp);
                while(temp) {
                    if (temp.next === oldFront) {
                        this.front = temp;
                        // this.front.next = null;
                        break
                    }
                    temp = temp.next
                }
            }
        }
        this.length--;
        return oldFront.value;

    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Queue = Queue;