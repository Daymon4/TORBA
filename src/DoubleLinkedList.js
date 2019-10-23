const IList = require('./IList');
const DNode = require('./DNode');

const DoubleLinkedList = function() {
    IList.apply(this, arguments);
    
    this._start = null;
    // this._end = null;
    this._size = 0;
}

DoubleLinkedList.prototype = Object.create(IList.prototype)
DoubleLinkedList.prototype.constructor = DoubleLinkedList;

DoubleLinkedList.prototype.getSize = function() {
    return this._size;
}

DoubleLinkedList.prototype.toString = function() {
    let str = '[';
    let currentDNode = this._start; 

    while (currentDNode) {
        str += currentDNode.element; 
        
        if (currentDNode.next) {
            str += ", ";
        }
        currentNode = currentDNode.next;     
    }
    str += ']';

    return str;
}

DoubleLinkedList.prototype.init = function(arr) {
    this.clear();
    
    if (Array.isArray(arr)) {
        let tempDNode = null;

        for (let i = 0; i < arr.length; i++) {
            const dnode = new DNode(arr[i]);
            
            if (!this._start) { //если вагона нет
                this._start = dnode;
                tempDNode = dnode;     
            } else {
                dnode.previous = tempDNode
                tempDNode.next = dnode;
                tempDNode = dnode; 
            }

            this._size++;
        }
    }
}

DoubleLinkedList.prototype.clear = function() {
    this._start = null;
    this._size = 0;
}

DoubleLinkedList.prototype.toArray = function() {
    let arr = [];
    let currentDNode = this._start; 

    while(currentDNode) {
        arr[arr.length] = currentDNode.value;
        currentDNode = currentDNode.next;
        }

        return arr;
}

// LinkedList.prototype.push = function(value) {
//     if (!value && value !== 0) {
//         return this._size;
//     }
    
//     let node = new Node(value);
//     let currentNode = this._root;

//     if (!currentNode) {
//         this._root = node;
//     } else {
//         while (currentNode && currentNode.next) {
//             currentNode = currentNode.next;
//         }
//         currentNode.next = node;
//     }
     
//     this._size++;

//     return this._size;
// };

module.exports = DoubleLinkedList;