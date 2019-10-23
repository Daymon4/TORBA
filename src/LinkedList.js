const IList = require('./IList');
const Node = require('./Node');

const LinkedList = function() {
    IList.apply(this, arguments);
    
    this._root = null;
    this._size = 0;
}

LinkedList.prototype = Object.create(IList.prototype)
LinkedList.prototype.constructor = LinkedList;

LinkedList.prototype.getSize = function() {
    return this._size;
}

LinkedList.prototype.toString = function() {
    let str = '[';
    let currentNode = this._root; 

    while (currentNode) {
        str += currentNode.value; 
        
        if (currentNode.next) {
            str += ", ";
        }
        currentNode = currentNode.next;     
    }
    str += ']';

    return str;
}

LinkedList.prototype.init = function(arr) {
    this.clear();
    
    if (Array.isArray(arr)) {
        let tempNode = null;

        for (let i = 0; i < arr.length; i++) {
            const node = new Node(arr[i]);
            
            if (!this._root) { //если вагона нет
                this._root = node;
                tempNode = node;     
            } else {
                tempNode.next = node;
                tempNode = node; 
            }

            this._size++;
        }
    }
}

LinkedList.prototype.clear = function() {
    this._root = null;
    this._size = 0;
}

LinkedList.prototype.push = function(value) {
    if (!value && value !== 0) {
        return this._size;
    }
    
    let node = new Node(value);
    let currentNode = this._root;

    if (!currentNode) {
        this._root = node;
    } else {
        while (currentNode && currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }
     
    this._size++;

    return this._size;
};

module.exports = LinkedList;