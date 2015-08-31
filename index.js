'use strict';

function isValue (v) {
    return v != null;
}

function isArray (v) {
    return isValue(v) && v.constructor === Array;
}

function toArray (v) {
    return Array.prototype.slice.call(v);
}

module.exports = function (fn, ctx, args) {
    if (arguments.length === 2) {
        args = ctx;
        ctx = null;
    }

    if (!isArray(args)) {
        args = toArray(args);
    }

    return fn.bind.apply(fn, [ctx].concat(args));
}
