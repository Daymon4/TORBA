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
    if (!arr || !arr.length) {
        return;
    }
        
    if (Array.isArray(arr)) {
        let tempNode = null;
        for (let i = 0; i < arr.length; i++) {
            const node = new Node(arr[i]);
            
            if (!this._root) {
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

LinkedList.prototype.pop = function() {
    if (this._size === 0) {
        return undefined;
    }

    let i = 2;
    let tempNode = this._root;
    let deletedNode = 0;
    
    while (i < this._size) {
        tempNode = tempNode.next;
        i++;
    };

    deletedNode =  tempNode.next.value;
    tempNode.next = null;
    this._size--;

    return deletedNode;
};

LinkedList.prototype.toArray = function() {
    let ourArr = [];
    let i = 0;
    let tempNode = this._root;
    while (tempNode) {
        ourArr[i] = tempNode.value;
        i++;
        tempNode = tempNode.next;
    } 

    return ourArr;
}

LinkedList.prototype.shift = function() {
    let result = this._root.value;
    let tempNode = this._root;

    tempNode = tempNode.next;
    this._root = tempNode;
    
    return result;
}

LinkedList.prototype.unshift = function(value) {
    let node = new Node(value);
    let tempNode = this._root;

    this._root = node;
    this._root.next = tempNode;
    this._size++;

    return this._size;
}

module.exports = LinkedList;