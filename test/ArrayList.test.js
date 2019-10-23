const {assert} = require('chai');
const ArrayList = require('../src/ArrayList');

describe('Is Object', () => {
    it('should be an Object', () => {
        const aList = new ArrayList();

        assert.isObject(aList);
    });
});

describe('ArrayList.clear', () => {

    // beforeEach(() => {
    //     const aList = new ArrayList();
    // })

    it('should clear correctly (undefined)', () => {
        const aList = new ArrayList();
        const arr = undefined;
        const expectedSize = 0;
        const expectedString = '[]';
        aList.init(arr);

        aList.clear();

        assert.deepEqual(aList.getSize(), expectedSize);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should clear correctly ([])', () => {
        const aList = new ArrayList();
        const arr = [];
        const expectedSize = 0;
        const expectedString = '[]';
        aList.init(arr);

        aList.clear();

        assert.deepEqual(aList.getSize(), expectedSize);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should clear correctly ([1])', () => {
        const aList = new ArrayList();
        const arr = [1];
        const expectedSize = 0;
        const expectedString = '[]';
        aList.init(arr);

        aList.clear();

        assert.deepEqual(aList.getSize(), expectedSize);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should clear correctly ([1, 2])', () => {
        const aList = new ArrayList();
        const arr = [1, 2];
        const expectedSize = 0;
        const expectedString = '[]';
        aList.init(arr);

        aList.clear();

        assert.deepEqual(aList.getSize(), expectedSize);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should clear correctly ([1, 2, 3, 4, 5])', () => {
        const aList = new ArrayList();
        const arr = [1, 2, 3, 4, 5];
        const expectedSize = 0;
        const expectedString = '[]';
        aList.init(arr);

        aList.clear();

        assert.deepEqual(aList.getSize(), expectedSize);
        assert.deepEqual(aList.toString(), expectedString);
    });
});

describe('ArrayList.getSize', () => {

    // beforeEach(() => {
    //     const aList = new ArrayList();
    // })

    it('should return 0 (undefined)', () => {
        const aList = new ArrayList();
        const arr = undefined;
        const expected = 0;
        aList.init(arr);

        const actual = aList.getSize();

        assert.deepEqual(actual, expected);
    });

    it('should return 0 ([])', () => {
        const aList = new ArrayList();
        const arr = [];
        const expectedSize = 0;
        aList.init(arr);

        const actual = aList.getSize();

        assert.deepEqual(actual, expectedSize);
    });

    it('should return 1 ([1])', () => {
        const aList = new ArrayList();
        const arr = [1];
        const expectedSize = 1;
        aList.init(arr);

        const actual = aList.getSize();

        assert.deepEqual(actual, expectedSize);
    });

    it('should return 2 ([1, 2])', () => {
        const aList = new ArrayList();
        const arr = [1, 2];
        const expectedSize = 2;
        aList.init(arr);

        const actual = aList.getSize();

        assert.deepEqual(actual, expectedSize);
    });

    it('should return 5 ([1, 2, 3, 4, 5])', () => {
        const aList = new ArrayList();
        const arr = [1, 2, 3, 4, 5];
        const expectedSize = 5;
        aList.init(arr);

        const actual = aList.getSize();

        assert.deepEqual(actual, expectedSize);
    });
});

describe('ArrayList.toString', () => {

    // beforeEach(() => {
    //     const aList = new ArrayList();
    // })

    it('should return "[]" (undefined)', () => {
        const aList = new ArrayList();
        const arr = undefined;
        const expected = '[]';
        aList.init(arr);

        const actual = aList.toString();

        assert.deepEqual(actual, expected);
    });

    it('should return "[]" ([])', () => {
        const aList = new ArrayList();
        const arr = [];
        const expectedString = '[]';
        aList.init(arr);

        const actual = aList.toString();

        assert.deepEqual(actual, expectedString);
    });

    it('should return "[1]" ([1])', () => {
        const aList = new ArrayList();
        const arr = [1];
        const expectedString = '[1]';
        aList.init(arr);

        const actual = aList.toString();

        assert.deepEqual(actual, expectedString);
    });

    it('should return "[1, 2]" ([1, 2])', () => {
        const aList = new ArrayList();
        const arr = [1, 2];
        const expectedString = '[1, 2]';
        aList.init(arr);

        const actual = aList.toString();

        assert.deepEqual(actual, expectedString);
    });

    it('should return "[1, 2, 3, 4, 5]" ([1, 2, 3, 4, 5])', () => {
        const aList = new ArrayList();
        const arr = [1, 2, 3, 4, 5];
        const expectedString = '[1, 2, 3, 4, 5]';
        aList.init(arr);

        const actual = aList.toString();

        assert.deepEqual(actual, expectedString);
    });
});

describe('ArrayList.push', () => {

    // beforeEach(() => {
    //     const aList = new ArrayList();
    // })

    it('should return 0 (undefined, undefined)', () => {
        const aList = new ArrayList();
        const arr = undefined;
        const value = undefined;
        const expected = 0;
        const expectedString = "[]";
        aList.init(arr);

        const actual = aList.push(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should return 1 (undefined, 20)', () => {
        const aList = new ArrayList();
        const arr = [];
        const value = 20;
        const expected = 1;
        const expectedString = "[20]";
        aList.init(arr);

        const actual = aList.push(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should return 2 ([1], 20)', () => {
        const aList = new ArrayList();
        const arr = [1];
        const value = 20;
        const expected = 2;
        const expectedString = "[1, 20]";
        aList.init(arr);

        const actual = aList.push(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should return 3 ([1, 2], 20)', () => {
        const aList = new ArrayList();
        const arr = [1, 2];
        const value = 20;
        const expected = 3;
        const expectedString = "[1, 2, 20]";
        aList.init(arr);

        const actual = aList.push(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should return 6 ([1, 2, 3, 4, 5], 20)', () => {
        const aList = new ArrayList();
        const arr = [1, 2, 3, 4, 5];
        const value = 20;
        const expected = 6;
        const expectedString = "[1, 2, 3, 4, 5, 20]";
        aList.init(arr);

        const actual = aList.push(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(aList.toString(), expectedString);
    });
});

describe('ArrayList.pop', () => {

    // beforeEach(() => {
    //     const aList = new ArrayList();
    // })

    it('should return 0 (undefined, 20)', () => {
        const aList = new ArrayList();
        const arr = [20];
        const expected = 0;
        const expectedString = "[]";
        aList.init(arr);

        const actual = aList.pop();

        assert.deepEqual(actual, expected);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should return 1 ([1, 20])', () => {
        const aList = new ArrayList();
        const arr = [1, 20];
        const expected = 1;
        const expectedString = "[1]";
        aList.init(arr);

        const actual = aList.pop();

        assert.deepEqual(actual, expected);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should return 2 ([1, 2, 20])', () => {
        const aList = new ArrayList();
        const arr = [1, 2, 20];
        const expected = 2;
        const expectedString = "[1, 2]";
        aList.init(arr);

        const actual = aList.pop();

        assert.deepEqual(actual, expected);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should return 5 ([1, 2, 3, 4, 5, 20])', () => {
        const aList = new ArrayList();
        const arr = [1, 2, 3, 4, 5, 20];
        const expected = 5;
        const expectedString = "[1, 2, 3, 4, 5]";
        aList.init(arr);

        const actual = aList.pop();

        assert.deepEqual(actual, expected);
        assert.deepEqual(aList.toString(), expectedString);
    });
});

describe('ArrayList.shift', () => {

    // beforeEach(() => {
    //     const aList = new ArrayList();
    // })

    it('should return 0 (undefined, 20)', () => {
        const aList = new ArrayList();
        const arr = [20];
        const expected = 0;
        const expectedString = "[]";
        aList.init(arr);

        const actual = aList.pop();

        assert.deepEqual(actual, expected);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should return 1 ([1, 20])', () => {
        const aList = new ArrayList();
        const arr = [1, 20];
        const expected = 1;
        const expectedString = "[1]";
        aList.init(arr);

        const actual = aList.pop();

        assert.deepEqual(actual, expected);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should return 2 ([1, 2, 20])', () => {
        const aList = new ArrayList();
        const arr = [1, 2, 20];
        const expected = 2;
        const expectedString = "[1, 2]";
        aList.init(arr);

        const actual = aList.pop();

        assert.deepEqual(actual, expected);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should return 5 ([1, 2, 3, 4, 5, 20])', () => {
        const aList = new ArrayList();
        const arr = [1, 2, 3, 4, 5, 20];
        const expected = 5;
        const expectedString = "[1, 2, 3, 4, 5]";
        aList.init(arr);

        const actual = aList.pop();

        assert.deepEqual(actual, expected);
        assert.deepEqual(aList.toString(), expectedString);
    });
});

describe('ArrayList.unshift', () => {

    // beforeEach(() => {
    //     const aList = new ArrayList();
    // })

    it('should return 0 (undefined, undefined)', () => {
        const aList = new ArrayList();
        const arr = undefined;
        const value = undefined;
        const expected = 0;
        const expectedString = "[]";
        aList.init(arr);

        const actual = aList.unshift(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should return 1 (undefined, 20)', () => {
        const aList = new ArrayList();
        const arr = [];
        const value = 20;
        const expected = 1;
        const expectedString = "[20]";
        aList.init(arr);

        const actual = aList.unshift(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should return 2 ([1], 20)', () => {
        const aList = new ArrayList();
        const arr = [1];
        const value = 20;
        const expected = 2;
        const expectedString = "[20, 1]";
        aList.init(arr);

        const actual = aList.unshift(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should return 3 ([1, 2], 20)', () => {
        const aList = new ArrayList();
        const arr = [1, 2];
        const value = 20;
        const expected = 3;
        const expectedString = "[20, 1, 2]";
        aList.init(arr);

        const actual = aList.unshift(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should return 6 ([1, 2, 3, 4, 5], 20)', () => {
        const aList = new ArrayList();
        const arr = [1, 2, 3, 4, 5];
        const value = 20;
        const expected = 6;
        const expectedString = "[20, 1, 2, 3, 4, 5]";
        aList.init(arr);

        const actual = aList.unshift(value);

        assert.deepEqual(actual, expected);
        assert.deepEqual(aList.toString(), expectedString);
    });
});