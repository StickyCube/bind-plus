'use strict';

var
    expect = require('chai').expect,
    bind = require('../index');

describe('Bind', function () {

    function test (i, j, k) {
        return i + j + k;
    }

    var actual,
        expected;

    afterEach(function () {
        actual = expected = undefined;
    });

    it('Should bind args without context', function () {
        var bound = bind(test, [1, 2, 3]);

        actual = bound();
        expected = 6;

        expect(actual).to.equal(expected);
    });

    it('Should bind args with context', function () {
        var a = [1, 2, 3],
            bound = bind(a.join, a, [', ']);

        actual = bound();
        expected = '1, 2, 3';

        expect(actual).to.equal(expected);
    });

    it('Should convert array-like objects to arrays', function () {
        var bound = bind(test, { 0: 1, 1: 2, 2: 3, length: 3 });

        actual = bound();
        expected = 6;

        expect(actual).to.equal(expected);
    });
});
