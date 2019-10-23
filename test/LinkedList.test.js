const { assert } = require('chai');
const LinkedList = require('../src/LinkedList');

describe('isObject', () => {
    it('should be object', () => {
        const actual = new LinkedList();

        assert.isObject(actual);
    });
});

describe('LinkedList.clear', () => {
    let llist = null;

    beforeEach(() => {
        llist = new LinkedList();
    })

    it('should clear correctly (undefined)', () => {
        const arr = undefined;
        const expectedSize = 0;
        const expectedString = '[]';
        llist.init(arr);

        llist.clear();

        assert.deepEqual(llist.getSize(), expectedSize);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should clear correctly ([])', () => {
        const arr = [];
        const expectedSize = 0;
        const expectedString = '[]';
        llist.init(arr);

        llist.clear();

        assert.deepEqual(llist.getSize(), expectedSize);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should clear correctly ([1])', () => {
        const arr = [1];
        const expectedSize = 0;
        const expectedString = '[]';
        llist.init(arr);

        llist.clear();

        assert.deepEqual(llist.getSize(), expectedSize);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should clear correctly ([1, 2])', () => {
        const arr = [1, 2];
        const expectedSize = 0;
        const expectedString = '[]';
        llist.init(arr);

        llist.clear();

        assert.deepEqual(llist.getSize(), expectedSize);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should clear correctly ([2, 4, 8, 0, -2])', () => {
        const arr = [2, 4, 8, 0, -2];
        const expectedSize = 0;
        const expectedString = '[]';
        llist.init(arr);

        llist.clear();

        assert.deepEqual(llist.getSize(), expectedSize);
        assert.deepEqual(llist.toString(), expectedString);
    });
});


describe('LinkedList.getSize', () => {
    let llist = null;

    beforeEach(() => {
        llist = new LinkedList();
    })

    it('should return 0 (undefined)', () => {
        const arr = undefined;
        const expected = 0;
        llist.init(arr);

        const actual = llist.getSize();

        assert.deepEqual(actual, expected);
    });

    it('should return 0 ([])', () => {
        const arr = [];
        const expectedSize = 0;
        llist.init(arr);

        const actual = llist.getSize();

        assert.deepEqual(actual, expectedSize);
    });

    it('should return 1 ([1])', () => {
        const arr = [1];
        const expectedSize = 1;
        llist.init(arr);

        const actual = llist.getSize();

        assert.deepEqual(actual, expectedSize);
    });

    it('should return 2 ([1, 2])', () => {
        const arr = [1, 2];
        const expectedSize = 2;
        llist.init(arr);

        const actual = llist.getSize();

        assert.deepEqual(actual, expectedSize);
    });

    it('should return 5 ([2, 4, 8, 0, -2])', () => {
        const arr = [2, 4, 8, 0, -2];
        const expectedSize = 5;
        llist.init(arr);

        const actual = llist.getSize();

        assert.deepEqual(actual, expectedSize);
    });
});

describe('LinkedList.toString', () => {
    let llist = null;

    beforeEach(() => {
        llist = new LinkedList();
    })

    it('should return "[]" (undefined)', () => {
        const arr = undefined;
        const expected = "[]";
        llist.init(arr);

        const actual = llist.toString();

        assert.deepEqual(actual, expected);
    });

    it('should return "[]" ([])', () => {
        const arr = [];
        const expected = "[]";
        llist.init(arr);

        const actual = llist.toString();

        assert.deepEqual(actual, expected);
    });

    it('should return "[1]" ([1])', () => {
        const arr = [1];
        const expected = "[1]";
        llist.init(arr);

        const actual = llist.toString();

        assert.deepEqual(actual, expected);
    });

    it('should return "[1, 2]" ([1, 2])', () => {
        const arr = [1, 2];
        const expected = "[1, 2]";
        llist.init(arr);

        const actual = llist.toString();

        assert.deepEqual(actual, expected);
    });

    it('should return "[2, 4, 8, 0, -2]" ([2, 4, 8, 0, -2])', () => {
        const arr = [2, 4, 8, 0, -2];
        const expected = "[2, 4, 8, 0, -2]";
        llist.init(arr);

        const actual = llist.toString();

        assert.deepEqual(actual, expected);
    });
});

describe('LinkedList.push', () => {
    let llist = null;

    beforeEach(() => {
        llist = new LinkedList();
    })

    it('should return 1 (undefined, 93)', () => {
        const arr = undefined;
        const value = 93;
        const expected = 1;
        const expectedString = '[93]';
        llist.init(arr);

        const actual = llist.push(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should return 1 ([], 93)', () => {
        const arr = [];
        const value = 93;
        const expected = 1;
        const expectedString = '[93]';
        llist.init(arr);

        const actual = llist.push(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should return 2 ([1], 93)', () => {
        const arr = [1];
        const value = 93;
        const expected = 2;
        const expectedString = '[1, 93]';
        llist.init(arr);

        const actual = llist.push(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should return 3 ([1, 2], 93)', () => {
        const arr = [1, 2];
        const value = 93;
        const expected = 3;
        const expectedString = '[1, 2, 93]';
        llist.init(arr);

        const actual = llist.push(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });
    
    it('should return 6 ([2, 4, 8, 0, -2], 93)', () => {
        const arr = [2, 4, 8, 0, -2];
        const value = 93;
        const expected = 6;
        const expectedString = '[2, 4, 8, 0, -2, 93]';
        llist.init(arr);

        const actual = llist.push(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should return 0 (undefined, undefined)', () => {
        const arr = undefined;
        const value = undefined;
        const expected = 0;
        const expectedString = '[]';
        llist.init(arr);

        const actual = llist.push(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should return 5 ([2, 4, 8, 0, -2], undefined)', () => {
        const arr = [2, 4, 8, 0, -2];
        const value = undefined;
        const expected = 5;
        const expectedString = '[2, 4, 8, 0, -2]';
        llist.init(arr);

        const actual = llist.push(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });
});

describe('LinkedList.pop', () => {
    let llist = null;

    beforeEach(() => {
        llist = new LinkedList();
    })

    it('should delete last and return ([1, 2, 93])', () => {
        const arr = [1, 2, 93];
        const expected = 93;
        const expectedString = '[1, 2]';
        llist.init(arr);

        const actual = llist.pop();

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should delete last and return ([])', () => {
        const arr = [];
        const expected = undefined;
        const expectedString = '[]';
        llist.init(arr);

        const actual = llist.pop();

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

});

describe('LinkedList.toArray', () => {
    let llist = null;

    beforeEach(() => {
        llist = new LinkedList();
    })

    it('should return correct array if two values array', () => {
        const expected = [1, 2];
        const array = [1, 2];
        llist.init(array);

        const actual = llist.toArray();

        assert.deepEqual(actual, expected);
    });
    
    it('should return correct array if many values array', () => {
        const expected = [1, 2, 4, 5, 6];
        const array = [1, 2, 4, 5, 6];
        llist.init(array);

        const actual = llist.toArray();

        assert.deepEqual(actual, expected);
    });    
});

describe('LinkedList.shift', () => {
    let llist = null;

    beforeEach(() => {
        llist = new LinkedList();
    })

    it('should return  ([1, 12, 45, 18])', () => {
        const arr = [1,12,45,18];
        const expected = 1;
        const expectedString = '[12, 45, 18]';
        llist.init(arr);

        const actual = llist.shift();

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

});

describe('LinkedList.unshift', () => {
    let llist = null;

    beforeEach(() => {
        llist = new LinkedList();
    })

    it('should add an element in the begining ([12, 45, 18], 1)', () => {
        const arr = [12,45,18];
        const value = 1;
        const expectedSize = 4;
        const expectedString = '[1, 12, 45, 18]';
        llist.init(arr);

        const actual = llist.unshift(value);

        assert.deepEqual(actual, expectedSize);
        assert.deepEqual(llist.toString(), expectedString);
    });

});



