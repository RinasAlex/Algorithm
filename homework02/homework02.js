class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
    }

    hasLoop() {
        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;      
            fast = fast.next.next;  

            if (slow === fast) {
                return true;        
            }
        }

        return false;               
    }
}

 list = new MyLinkedList();
list.head = new Node(1);
list.head.next = new Node(2);
list.head.next.next = new Node(3);
list.head.next.next.next = new Node(4);
list.head.next.next.next.next = list.head.next; 

console.log(list.hasLoop()); 
