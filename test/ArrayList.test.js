const { assert } = require("chai");
const ArrayList = require("../src/ArrayList");

describe('Is Object', () => {
    it('should be an Object', () => {
        const aList = new ArrayList();

        assert.isObject(aList);
    });
});

describe('ArrayList.clear', () => {
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

    it('should clear correctly []', () => {
        const aList = new ArrayList();
        const arr = [];
        const expectedSize = 0;
        const expectedString = '[]';
        aList.init(arr);

        aList.clear();

        assert.deepEqual(aList.getSize(), expectedSize);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should clear correctly [1]', () => {
        const aList = new ArrayList();
        const arr = [1];
        const expectedSize = 0;
        const expectedString = '[]';
        aList.init(arr);

        aList.clear();

        assert.deepEqual(aList.getSize(), expectedSize);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should clear correctly [1, 2]', () => {
        const aList = new ArrayList();
        const arr = [1, 2];
        const expectedSize = 0;
        const expectedString = '[]';
        aList.init(arr);

        aList.clear();

        assert.deepEqual(aList.getSize(), expectedSize);
        assert.deepEqual(aList.toString(), expectedString);
    });

    it('should clear correctly [1, 2, 4, -1, 3]', () => {
        const aList = new ArrayList();
        const arr = [];
        const expectedSize = 0;
        const expectedString = '[]';
        aList.init(arr);

        aList.clear();

        assert.deepEqual(aList.getSize(), expectedSize);
        assert.deepEqual(aList.toString(), expectedString);
    });
});

describe('ArrayList.getSize', () => {
    it('should return 0 (undefined)', () => {
        const aList = new ArrayList();
        const arr = undefined;
        const expectedSize = 0;
        aList.init(arr);

        const actual = aList.getSize();

        assert.deepEqual(actual, expectedSize);
    });

    it('should return 0 []', () => {
        const aList = new ArrayList();
        const arr = [];
        const expectedSize = 0;
        aList.init(arr);

        const actual = aList.getSize();

        assert.deepEqual(actual, expectedSize);
    });

    it('should return 1 [1]', () => {
        const aList = new ArrayList();
        const arr = [1];
        const expectedSize = 1;
        aList.init(arr);

        const actual = aList.getSize();

        assert.deepEqual(actual, expectedSize);
    });

    it('should return 2 [1, 2]', () => {
        const aList = new ArrayList();
        const arr = [1, 2];
        const expectedSize = 2;
        aList.init(arr);

        const actual = aList.getSize();

        assert.deepEqual(actual, expectedSize);
    });

    it('should return 5 [1, 2, 4, -1, 3]', () => {
        const aList = new ArrayList();
        const arr = [1, 2, 4, -1, 3];
        const expectedSize = 5;
        aList.init(arr);

        const actual = aList.getSize();

        assert.deepEqual(actual, expectedSize);
    });
});

describe('ArrayList.toString', () => {
    it('should return "[]" (undefined)', () => {
        const aList = new ArrayList();
        const arr = undefined;
        const expectedString = "[]";
        aList.init(arr);

        const actual = aList.toString();

        assert.deepEqual(actual, expectedString);
    });

    it('should return "[]" []', () => {
        const aList = new ArrayList();
        const arr = [];
        const expectedString = "[]" ;
        aList.init(arr);

        const actual = aList.toString();

        assert.deepEqual(actual, expectedString);
    });

    it('should return "[1]" [1]', () => {
        const aList = new ArrayList();
        const arr = [1];
        const expectedString = "[1]";
        aList.init(arr);

        const actual = aList.toString();

        assert.deepEqual(actual, expectedString);
    });

    it('should return "[1, 2]" [1, 2]', () => {
        const aList = new ArrayList();
        const arr = [1, 2];
        const expectedString = "[1, 2]";
        aList.init(arr);

        const actual = aList.toString();

        assert.deepEqual(actual, expectedString);
    });

    it('should return "[1, 2, 4, -1, 3]" [1, 2, 4, -1, 3]', () => {
        const aList = new ArrayList();
        const arr = [1, 2, 4, -1, 3];
        const expectedString = "[1, 2, 4, -1, 3]";
        aList.init(arr);

        const actual = aList.toString();

        assert.deepEqual(actual, expectedString);
    });
});

describe('ArrayList.push', () => {
    it('should return 0 (undefined, undefined)', () => {
        const aList = new ArrayList();
        const arr = undefined;
        const value = undefined;
        const expectedString = "[]";
        const expected = 0;
        aList.init(arr);

        const actual = aList.push(value);

        assert.deepEqual(aList.toString(), expectedString);
        assert.deepEqual(actual, expected);
    });

    it('should return 1 (undefined, 19)', () => {
        const aList = new ArrayList();
        const arr = [];
        const value = 19;
        const expectedString = "[19]" ;
        const expected = 1;
        aList.init(arr);

        const actual = aList.push(value);

        assert.deepEqual(aList.toString(), expectedString);
        assert.deepEqual(actual, expected);
    });

    it('should return 2 ([1], 19)', () => {
        const aList = new ArrayList();
        const arr = [1];
        const value = 19;
        const expected = 2;
        const expectedString = "[1, 19]";
        aList.init(arr);

        const actual = aList.push(value);

        assert.deepEqual(aList.toString(), expectedString);
        assert.deepEqual(actual, expected);
    });

    it('should return 3 ([1, 2], 19)', () => {
        const aList = new ArrayList();
        const arr = [1, 2];
        const value = 19;
        const expected = 3;
        const expectedString = "[1, 2, 19]";
        aList.init(arr);

        const actual = aList.push(value);

        assert.deepEqual(aList.toString(), expectedString);
        assert.deepEqual(actual, expected);
    });

    it('should return 6 ([1, 2, 4, -1, 3], 19)', () => {
        const aList = new ArrayList();
        const arr = [1, 2, 4, -1, 3];
        const value = 19;
        const expected = 6;
        const expectedString = "[1, 2, 4, -1, 3, 19]";
        aList.init(arr);

        const actual = aList.push(value);

        assert.deepEqual(aList.toString(), expectedString);
        assert.deepEqual(actual, expected);
    });
});

describe('ArrayList.pop', () => {
    it('should return 0 ([19])', () => {
        const aList = new ArrayList();
        const arr = [19];
        const expectedString = "[]" ;
        const expected = 0;
        aList.init(arr);

        const actual = aList.pop();

        assert.deepEqual(aList.toString(), expectedString);
        assert.deepEqual(actual, expected);
    });

    it('should return 1 ([12, 19], )', () => {
        const aList = new ArrayList();
        const arr = [12, 19];
        const expected = 1;
        const expectedString = "[12]";
        aList.init(arr);

        const actual = aList.pop();

        assert.deepEqual(aList.toString(), expectedString);
        assert.deepEqual(actual, expected);
    });

    it('should return 2 ([1, 12, 19])', () => {
        const aList = new ArrayList();
        const arr = [1, 12, 19];
        const expected = 2;
        const expectedString = "[1, 12]";
        aList.init(arr);

        const actual = aList.pop();

        assert.deepEqual(aList.toString(), expectedString);
        assert.deepEqual(actual, expected);
    });

    it('should return 4 ([1, 2, 4, -1, 19])', () => {
        const aList = new ArrayList();
        const arr = [1, 2, 4, -1, 19];
        const expected = 4;
        const expectedString = "[1, 2, 4, -1]";
        aList.init(arr);

        const actual = aList.pop();

        assert.deepEqual(aList.toString(), expectedString);
        assert.deepEqual(actual, expected);
    });
});

describe('ArrayList.shift', () => {
    it('should return 0 ([19])', () => {
        const aList = new ArrayList();
        const arr = [19];
        const expectedString = "[]" ;
        const expected = 0;
        aList.init(arr);

        const actual = aList.shift();

        assert.deepEqual(aList.toString(), expectedString);
        assert.deepEqual(actual, expected);
    });

    it('should return 1 ([12, 19], )', () => {
        const aList = new ArrayList();
        const arr = [12, 19];
        const expected = 1;
        const expectedString = "[19]";
        aList.init(arr);

        const actual = aList.shift();

        assert.deepEqual(aList.toString(), expectedString);
        assert.deepEqual(actual, expected);
    });

    it('should return 2 ([1, 12, 19])', () => {
        const aList = new ArrayList();
        const arr = [1, 12, 19];
        const expected = 2;
        const expectedString = "[12, 19]";
        aList.init(arr);

        const actual = aList.shift();

        assert.deepEqual(aList.toString(), expectedString);
        assert.deepEqual(actual, expected);
    });

    it('should return 4 ([1, 2, 4, -1, 19])', () => {
        const aList = new ArrayList();
        const arr = [1, 2, 4, -1, 19];
        const expected = 4;
        const expectedString = "[2, 4, -1, 19]";
        aList.init(arr);

        const actual = aList.shift();

        assert.deepEqual(aList.toString(), expectedString);
        assert.deepEqual(actual, expected);
    });
});

describe('ArrayList.unshift', () => {
    it('should return 0 (undefined, undefined)', () => {
        const aList = new ArrayList();
        const arr = undefined;
        const value = undefined;
        const expectedString = "[]";
        const expected = 0;
        aList.init(arr);

        const actual = aList.unshift(value);

        assert.deepEqual(aList.toString(), expectedString);
        assert.deepEqual(actual, expected);
    });

    it('should return 1 (undefined, 19)', () => {
        const aList = new ArrayList();
        const arr = [];
        const value = 19;
        const expectedString = "[19]" ;
        const expected = 1;
        aList.init(arr);

        const actual = aList.unshift(value);

        assert.deepEqual(aList.toString(), expectedString);
        assert.deepEqual(actual, expected);
    });

    it('should return 2 ([1], 19)', () => {
        const aList = new ArrayList();
        const arr = [1];
        const value = 19;
        const expected = 2;
        const expectedString = "[19, 1]";
        aList.init(arr);

        const actual = aList.unshift(value);

        assert.deepEqual(aList.toString(), expectedString);
        assert.deepEqual(actual, expected);
    });

    it('should return 3 ([1, 2], 19)', () => {
        const aList = new ArrayList();
        const arr = [1, 2];
        const value = 19;
        const expected = 3;
        const expectedString = "[19, 1, 2]";
        aList.init(arr);

        const actual = aList.unshift(value);

        assert.deepEqual(aList.toString(), expectedString);
        assert.deepEqual(actual, expected);
    });

    it('should return 6 ([1, 2, 4, -1, 3], 19)', () => {
        const aList = new ArrayList();
        const arr = [1, 2, 4, -1, 3];
        const value = 19;
        const expected = 6;
        const expectedString = "[19, 1, 2, 4, -1, 3]";
        aList.init(arr);

        const actual = aList.unshift(value);

        assert.deepEqual(aList.toString(), expectedString);
        assert.deepEqual(actual, expected);
    });
});

//at first