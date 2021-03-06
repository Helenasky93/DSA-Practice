// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val, next=null) {
        this.value = val;
        this.next = next;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if(!this.head) {
            return undefined
        }

        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;

    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.length) {
            return undefined;
        } else if (this.length === 1) {
            let current = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return current;
        }
        let current = this.head;
        this.head = current.next;
        this.length--;
        return current;

    }

    // TODO: Implement the contains method here
    contains(target) {
        let current = this.head;
        while(current.next) {
            if(current.value === target || current.next.value === target) {
                return true;
            } 
            current = current.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        // console.log(index)
        let current = this.head;
        for(let i = 0; i <= index && index < this.length ; i ++) {
            // console.log(current)
            if (i === index) {
                return current;
            }
            if (current.next) current = current.next;
        }
        return null;
    }

    // TODO: Implement the set method here
    set(index, val) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = val;
            return true
        }
        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (!this.get(index)) return false;
        if (index === 0) return !!this.addToHead(val);
        if (index === this.length) return !!this.addToTail(val);
        const newNode = new Node(val);
        const prev = this.get(index - 1);
        const temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
        // if (index < 0 || index >= this.length) return false;
        // if (index === this.length) return !!this.addToTail(val);
        // if (index === 0) return !!this.addToHead(val);

        // const newNode = new Node(val);
        // const prev = this.get(index - 1);
        // const temp = prev.next;
        // prev.next = newNode;
        // newNode.next = temp;
        // this.length++;
        // return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.removeHead();
        if (index === this.length - 1) return this.removeTail();
        const previousNode = this.get(index - 1);
        const removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}


exports.Node = Node;
exports.LinkedList = LinkedList;
