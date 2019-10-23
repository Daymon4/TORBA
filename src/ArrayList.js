const IList = require('../../MyProject/IList');

const ArrayList = function() {
    IList.apply(this, arguments);
    
    this._size = 0;
    this._array = [];
};

    ArrayList.prototype = Object.create(IList.prototype);
    ArrayList.prototype.constructor = ArrayList;

ArrayList.prototype.clear = function() {
    this._size = 0;
    this._array = [];
}

ArrayList.prototype.getSize = function() {
    return this._size;
}

ArrayList.prototype.toString = function() {
    let str = '[';

    for (let i = 0; i < this._array.length; i++) {
        str += this._array[i];

        if (i < this._array.length - 1) {
            str += ', ';
        }
    }
    str +=']';

    return str;
}

ArrayList.prototype.init = function(arr) {
    this.clear();

    if(Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            this._array[i] = arr[i];
            this._size++;
        }
    } 
}

ArrayList.prototype.push = function(value) {
    if (!value) {
        return this._size;
    } else {
        this._array[this._array.length] = value;
        this._size++;
    }
    return this._size;
}

ArrayList.prototype.pop = function(value) {
    this._array.length--;
    this._size--;

    return this._size;
}

ArrayList.prototype.shift = function() {
    let tempArr = [];

    for (let i = 1; i < this._array.length; i++) {
        tempArr[i - 1] = this._array[i];
    }
    this._array = tempArr;
    this._size--;

    return this._size;
}

ArrayList.prototype.unshift = function(value) {
    if(!value) {
        return this._size;
    }
    let tempArr = [value];

    for(let i = 0; i < this._array.length; i++){
        tempArr[i+1] = this._array[i];
    }
    this._size++;
    this._array = tempArr;

    return this._size;
}

module.exports = ArrayList;