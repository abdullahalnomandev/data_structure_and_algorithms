
class Node {
    constructor(value){

        this.value = value;
        this.next=null;

    }
}

class LinkedList{

    constructor(head){
        this.head = head;

    }

    add(value){


        const newNode = new Node(value);
        // this.head.next = newNode;
        let current = this.head;
        while(current.next != null){

            current = current.next;
        }

        current.next = newNode;
    }

}

const head = new Node(1500)

const mBondon = new LinkedList(head);
mBondon.add(27)
mBondon.add(13)
mBondon.add(15)
mBondon.add(11)
mBondon.add(110)

console.log(JSON.stringify(mBondon));