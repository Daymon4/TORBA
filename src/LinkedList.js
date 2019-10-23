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

LinkedList.prototype.toArray = function() {
    let result = [];
    let currentNode = this._root; 
    let i = 0;

    while (currentNode) {
        result[i] = currentNode.value;
        currentNode = currentNode.next;
        i++;
    }

    return result;
}

LinkedList.prototype.init = function(arr) {
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
    let result = undefined;

    if (this._size) {
        let prevNode = this._root;
        let tailNode = this._root;

        if (!tailNode.next) {
            let result = prevNode.value;
            this._root = null;

            return result;
        }

        while (tailNode && tailNode.next) {
            prevNode = tailNode;
            tailNode = tailNode.next;           
        }

        result = prevNode.next.value;
        prevNode.next = null;
        this._size--;
    }

    return result;
};

LinkedList.prototype.unshift = function(value) {
    if (!value && value !== 0) {
        return this._size;
    }
    
    let node = new Node(value);
    let currentNode = this._root;

    if (!currentNode) {
        this._root = node;
    } else {
        node.next = currentNode;
        this._root = node;
    }
     
    this._size++;

    return this._size;
};

LinkedList.prototype.shift = function() {
    let result = undefined;

    if (this._size) {
        let tempNode = this._root.next;
        result = this._root.value;
        this._root = tempNode;
        this._size--;
    }

    return result;
};

LinkedList.prototype.slice = function(start, end) {
    let result = [];
    
    if (!this._root) {
        return [];
    }

    if (!this._root.next) {
        result[0] = this._root.value;
    }

    let currentNode = this._root; 
    let i = 0;
    let x = 0;

    while (currentNode) {
        if (start <= i && i < end) {
            result[x] = currentNode.value;
            x++;   
        }

        currentNode = currentNode.next;
        i++;
    }

    return result;
};

module.exports = LinkedList;