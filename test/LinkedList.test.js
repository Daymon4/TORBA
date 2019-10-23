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

    it('should return undefined (undefined)', () => {
        const arr = undefined;
        const expected = undefined;
        const expectedString = '[]';
        llist.init(arr);

        const actual = llist.pop();

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should return undefined ([])', () => {
        const arr = [];
        const expected = undefined;
        const expectedString = '[]';
        llist.init(arr);

        const actual = llist.pop();

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should return 1 ([1])', () => {
        const arr = [1];
        const expected = 1;
        const expectedString = '[]';
        llist.init(arr);

        const actual = llist.pop();

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should return 2 ([1, 2])', () => {
        const arr = [1, 2];
        const expected = 2;
        const expectedString = '[1]';
        llist.init(arr);

        const actual = llist.pop();

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });
    
    it('should return -2 ([2, 4, 8, 0, -2])', () => {
        const arr = [2, 4, 8, 0, -2];
        const expected = -2;
        const expectedString = '[2, 4, 8, 0]';
        llist.init(arr);

        const actual = llist.pop();

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should return 11 ([2, 4, 8, 0, -2, 11])', () => {
        const arr = [2, 4, 8, 0, -2, 11];
        const expected = 11;
        const expectedString = '[2, 4, 8, 0, -2]';
        llist.init(arr);

        const actual = llist.pop();

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });
});

describe('LinkedList.unshift', () => {
    let llist = null;

    beforeEach(() => {
        llist = new LinkedList();
    })

    it('should return 1 (undefined, 21)', () => {
        const arr = undefined;
        const value = 21;
        const expected = 1;
        const expectedString = '[21]';
        llist.init(arr);

        const actual = llist.unshift(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should return 1 ([], 21)', () => {
        const arr = [];
        const value = 21;
        const expected = 1;
        const expectedString = '[21]';
        llist.init(arr);

        const actual = llist.unshift(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should return 2 ([1], 21)', () => {
        const arr = [1];
        const value = 21;
        const expected = 2;
        const expectedString = '[21, 1]';
        llist.init(arr);

        const actual = llist.unshift(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should return 3 ([1, 2], 21)', () => {
        const arr = [1, 2];
        const value = 21;
        const expected = 3;
        const expectedString = '[21, 1, 2]';
        llist.init(arr);

        const actual = llist.unshift(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });
    
    it('should return 6 ([2, 4, 8, 0, -2], 21)', () => {
        const arr = [2, 4, 8, 0, -2];
        const value = 21;
        const expected = 6;
        const expectedString = '[21, 2, 4, 8, 0, -2]';
        llist.init(arr);

        const actual = llist.unshift(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should return 0 (undefined, undefined)', () => {
        const arr = undefined;
        const value = undefined;
        const expected = 0;
        const expectedString = '[]';
        llist.init(arr);

        const actual = llist.unshift(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should return 5 ([2, 4, 8, 0, -2], undefined)', () => {
        const arr = [2, 4, 8, 0, -2];
        const value = undefined;
        const expected = 5;
        const expectedString = '[2, 4, 8, 0, -2]';
        llist.init(arr);

        const actual = llist.unshift(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });
});

describe('LinkedList.shift', () => {
    let llist = null;

    beforeEach(() => {
        llist = new LinkedList();
    })

    it('should return undefined (undefined)', () => {
        const arr = undefined;
        const expected = undefined;
        const expectedString = '[]';
        llist.init(arr);

        const actual = llist.shift();

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should return undefined ([])', () => {
        const arr = [];
        const expected = undefined;
        const expectedString = '[]';
        llist.init(arr);

        const actual = llist.shift();

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should return 1 ([1])', () => {
        const arr = [1];
        const expected = 1;
        const expectedString = '[]';
        llist.init(arr);

        const actual = llist.shift();

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should return 1 ([1, 2])', () => {
        const arr = [1, 2];
        const expected = 1;
        const expectedString = '[2]';
        llist.init(arr);

        const actual = llist.shift();

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });
    
    it('should return 2 ([2, 4, 8, 0, -2])', () => {
        const arr = [2, 4, 8, 0, -2];
        const expected = 2;
        const expectedString = '[4, 8, 0, -2]';
        llist.init(arr);

        const actual = llist.shift();

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });

    it('should return 5 ([5, 4, 8, 0, -2, 11])', () => {
        const arr = [5, 4, 8, 0, -2, 11];
        const expected = 5;
        const expectedString = '[4, 8, 0, -2, 11]';
        llist.init(arr);

        const actual = llist.shift();

        assert.deepEqual(actual, expected);
        assert.deepEqual(llist.toString(), expectedString);
    });
});