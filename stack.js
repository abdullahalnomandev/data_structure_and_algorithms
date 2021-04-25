
class Stack {

    constructor() {

        this.Stack = []
    }

    add(item) {
        this.Stack.push(item)
    }

    remove() {
        if (this.Stack.length) {
            return this.Stack.pop();
        }
    }
}


const guest = new Stack();
guest.add("Rahaman")
guest.add("Zaman")
guest.add("Kaman")
guest.add("Noman")

console.log(guest.Stack);

const speaker = guest.remove()
console.log(speaker);

console.log(guest.Stack);