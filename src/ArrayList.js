const IList = require('./IList');

const ArrayList = function() {
    IList.apply(this, arguments);

    this._array = [];
    this._size = 0;
}

ArrayList.prototype = Object.create(IList.prototype);
ArrayList.prototype.constructor = ArrayList;

ArrayList.prototype.clear = function() {
    this._array = [];
    this._size = 0;
}

ArrayList.prototype.getSize = function() {
    return this._size;
}

ArrayList.prototype.toString = function() {
    let str = '[';

    for (let i = 0; i < this._array.length; i++) {
        str += this._array[i];

        if (i < this._array.length-1) {
            str += ', ';
        }
    }
    str += ']';

    return str;
}

ArrayList.prototype.init = function(arr) {
    this.clear();

    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            this._array[i] = arr[i];
            this._size++;
        }
   }
}

ArrayList.prototype.push = function(value) {
    if(!value) {
        return this._size;
    } else {   
    this._array[this._array.length] = value;
    this._size++;
    }
    
    return this._size;
}

ArrayList.prototype.pop = function() {
    this._array.length--;
    this._size--;

    return this._size;
}

ArrayList.prototype.shift = function() {
    let tempArray = [];

    for(let i = 1; i < this._array.length; i++) {
        tempArray[i - 1] = this._array[i];
    }
    this._size--;
    this._array = tempArray;

    return this._size;
}

ArrayList.prototype.unshift = function(value) {
    let tempArray = [value];

    if(!value) {
        return this._size;
    } 
    for(let i = 0; i < this._array.length; i++) {
        tempArray[i + 1] = this._array[i];
    }
    this._size++;
    this._array = tempArray;

    return this._size;
}

module.exports = ArrayList;