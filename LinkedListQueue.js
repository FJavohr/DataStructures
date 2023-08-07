const LinkedList = require('./linkedListTail')

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList()
  }
  enqueue(value) {
    this.list.append(value)
  }
  dequeue() {
    return this.list.removeFromFront()
  }
  peek() {
    return this.list.head.value
  }
  isEmpty() {
    return this.list.isEmpty()
  }
  getSize() {
    return this.list.getSize()
  }
  print(){
    return this.list.print()
  }
}

const queue = new LinkedListQueue()

queue.enqueue(110)
queue.enqueue(120)
queue.enqueue(130)

console.log(queue.dequeue())
console.log(queue.getSize())

queue.print()

console.log(queue.isEmpty());