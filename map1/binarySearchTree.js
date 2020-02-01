class Node {
    constructor(value) {
        this.value = value,
        this.left = null,
        this.right = null
    }

}

class BinaryTree {
    constructor(value) {
        this.root = new Node(value)
    }

    add = (value) => {
        let newNode = new Node(value)
        let depth = 1

        const searchTree = (node) => {
            depth++
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode
                } else {
                    searchTree(node.left)
                }
            } else if (value > node.value) {
                if (!node.right) {
                    node.right = newNode
                } else {
                    searchTree(node.right)
                }
            }
        }
        searchTree(this.root)
    }

    find = (value) => {
        let currentNode = this.root
        while (currentNode) {
            if (currentNode.value === value) {
                return true
            } else if (value < currentNode.value) {
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            }
        } return false
    }

    bfPrint = () => {
        class Queue {
            constructor() {
                this.item
            }
            enqueue(element) {
                this.items.push(element)
            }
            dequeue() {
                if (this.isEmpty()) {
                    return "This ain't it chief"
                }
                return this.items.shift()
            }
            isEmpty() {
                return this.items.length == 0;
            }
        }
        let printQueue = new Queue(binaryTree)
    }
}

let bt = new BinaryTree(10)
bt.add(6)
bt.add(5)
bt.add(15)
bt.add(21)
bt.add(3)
bt.add(97)

console.log(bt.find(7))