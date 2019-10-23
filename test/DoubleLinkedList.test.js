const { assert } = require('chai');
const DoubleLinkedList = require('../src/DoubleLinkedList');

describe('DoubleLinkedList isObject', () => {
    it('should be object', () => {
        const actual = new DoubleLinkedList();

        assert.isObject(actual);
    });
});

describe('DoubleLinkedList.getSize', () => {
    let dlist = null;

    beforeEach(() => {
        dlist = new DoubleLinkedList();
    })

    it('should return 0 (undefined)', () => {
        const arr = undefined;
        const expected = 0;
        dlist.init(arr);

        const actual = dlist.getSize();

        assert.deepEqual(actual, expected);
    });

    it('should return 0 ([])', () => {
        const arr = [];
        const expectedSize = 0;
        dlist.init(arr);

        const actual = dlist.getSize();

        assert.deepEqual(actual, expectedSize);
    });

    it('should return 1 ([1])', () => {
        const arr = [1];
        const expectedSize = 1;
        dlist.init(arr);

        const actual = dlist.getSize();

        assert.deepEqual(actual, expectedSize);
    });

    it('should return 2 ([1, 2])', () => {
        const arr = [1, 2];
        const expectedSize = 2;
        dlist.init(arr);

        const actual = dlist.getSize();

        assert.deepEqual(actual, expectedSize);
    });

    it('should return 5 ([2, 4, 8, 0, -2])', () => {
        const arr = [2, 4, 8, 0, -2];
        const expectedSize = 5;
        dlist.init(arr);

        const actual = dlist.getSize();

        assert.deepEqual(actual, expectedSize);
    });
});

describe('DoubleLinkedList.clear', () => {
    let dlist = null;

    beforeEach(() => {
        dlist = new DoubleLinkedList();
    })

    it('should clear correctly (undefined)', () => {
        const arr = undefined;
        const expectedSize = 0;
        const expectedString = '[]';
        dlist.init(arr);

        dlist.clear();

        assert.deepEqual(dlist.getSize(), expectedSize);
        assert.deepEqual(dlist.toString(), expectedString);
    });

    it('should clear correctly ([])', () => {
        const arr = [];
        const expectedSize = 0;
        const expectedString = '[]';
        dlist.init(arr);

        dlist.clear();

        assert.deepEqual(dlist.getSize(), expectedSize);
        assert.deepEqual(dlist.toString(), expectedString);
    });

    it('should clear correctly ([1])', () => {
        const arr = [1];
        const expectedSize = 0;
        const expectedString = '[]';
        dlist.init(arr);

        dlist.clear();

        assert.deepEqual(dlist.getSize(), expectedSize);
        assert.deepEqual(dlist.toString(), expectedString);
    });

    it('should clear correctly ([1, 2])', () => {
        const arr = [1, 2];
        const expectedSize = 0;
        const expectedString = '[]';
        dlist.init(arr);

        dlist.clear();

        assert.deepEqual(dlist.getSize(), expectedSize);
        assert.deepEqual(dlist.toString(), expectedString);
    });

    it('should clear correctly ([2, 4, 8, 0, -2])', () => {
        const arr = [2, 4, 8, 0, -2];
        const expectedSize = 0;
        const expectedString = '[]';
        dlist.init(arr);

        dlist.clear();

        assert.deepEqual(dlist.getSize(), expectedSize);
        assert.deepEqual(dlist.toString(), expectedString);
    });
});

describe('DoubleLinkedList.toString', () => {
    let dlist = null;

    beforeEach(() => {
        dlist = new DoubleLinkedList();
    })

    it('should return "[]" (undefined)', () => {
        const arr = undefined;
        const expected = "[]";
        dlist.init(arr);

        const actual = dlist.toString();

        assert.deepEqual(actual, expected);
    });

    it('should return "[]" ([])', () => {
        const arr = [];
        const expected = "[]";
        dlist.init(arr);

        const actual = dlist.toString();

        assert.deepEqual(actual, expected);
    });

    it('should return "[1]" ([1])', () => {
        const arr = [1];
        const expected = "[1]";
        dlist.init(arr);

        const actual = dlist.toString();

        assert.deepEqual(actual, expected);
    });

    it('should return "[1, 2]" ([1, 2])', () => {
        const arr = [1, 2];
        const expected = "[1, 2]";
        dlist.init(arr);

        const actual = dlist.toString();

        assert.deepEqual(actual, expected);
    });

    it('should return "[2, 4, 8, 0, -2]" ([2, 4, 8, 0, -2])', () => {
        const arr = [2, 4, 8, 0, -2];
        const expected = "[2, 4, 8, 0, -2]";
        dlist.init(arr);

        const actual = dlist.toString();

        assert.deepEqual(actual, expected);
    });
});

// describe('LinkedList.push', () => {
//     let llist = null;

//     beforeEach(() => {
//         llist = new LinkedList();
//     })

//     it('should return 1 (undefined, 93)', () => {
//         const arr = undefined;
//         const value = 93;
//         const expected = 1;
//         const expectedString = '[93]';
//         llist.init(arr);

//         const actual = llist.push(value);

//         assert.deepEqual(actual, expected);
//         assert.deepEqual(llist.toString(), expectedString);
//     });

//     it('should return 1 ([], 93)', () => {
//         const arr = [];
//         const value = 93;
//         const expected = 1;
//         const expectedString = '[93]';
//         llist.init(arr);

//         const actual = llist.push(value);

//         assert.deepEqual(actual, expected);
//         assert.deepEqual(llist.toString(), expectedString);
//     });

//     it('should return 2 ([1], 93)', () => {
//         const arr = [1];
//         const value = 93;
//         const expected = 2;
//         const expectedString = '[1, 93]';
//         llist.init(arr);

//         const actual = llist.push(value);

//         assert.deepEqual(actual, expected);
//         assert.deepEqual(llist.toString(), expectedString);
//     });

//     it('should return 3 ([1, 2], 93)', () => {
//         const arr = [1, 2];
//         const value = 93;
//         const expected = 3;
//         const expectedString = '[1, 2, 93]';
//         llist.init(arr);

//         const actual = llist.push(value);

//         assert.deepEqual(actual, expected);
//         assert.deepEqual(llist.toString(), expectedString);
//     });
    
//     it('should return 6 ([2, 4, 8, 0, -2], 93)', () => {
//         const arr = [2, 4, 8, 0, -2];
//         const value = 93;
//         const expected = 6;
//         const expectedString = '[2, 4, 8, 0, -2, 93]';
//         llist.init(arr);

//         const actual = llist.push(value);

//         assert.deepEqual(actual, expected);
//         assert.deepEqual(llist.toString(), expectedString);
//     });

//     it('should return 0 (undefined, undefined)', () => {
//         const arr = undefined;
//         const value = undefined;
//         const expected = 0;
//         const expectedString = '[]';
//         llist.init(arr);

//         const actual = llist.push(value);

//         assert.deepEqual(actual, expected);
//         assert.deepEqual(llist.toString(), expectedString);
//     });

//     it('should return 5 ([2, 4, 8, 0, -2], undefined)', () => {
//         const arr = [2, 4, 8, 0, -2];
//         const value = undefined;
//         const expected = 5;
//         const expectedString = '[2, 4, 8, 0, -2]';
//         llist.init(arr);

//         const actual = llist.push(value);

//         assert.deepEqual(actual, expected);
//         assert.deepEqual(llist.toString(), expectedString);
//     });
// });

