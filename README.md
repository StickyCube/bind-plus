# bind-plus

> A utility which provides apply-like semantics for `Function.bind`

## Description
JavaScript functions can be called through the native methods `call` and `apply` taking an argument list and an array of arguments respectively.

`Function.bind` follows the same semantics as `Function.call`, taking an argument list and allowing us to create 'bound' functions which can be called at a later time.

bind-plus allows you to create the same bound functions but from an array of arguments (like `Function.apply`) rather than an argument list (like `Function.call`).

## Installation
Install using npm
```
npm install bind-plus --save
```

And require in your project
```javascript
var bind = requrie('bind-plus');
```

## Usage

#### API
##### bind(function, [context], args);

- `function` - the function to create a bound version of.
- `context` - (optional) the `this` value of the function.
- `args` - An array or array-like object of arguments.


## Examples

The following examples, albeit contrived, show how you can create bound functions.

#### With no context

functions which do not rely on `this` do not need a context.

```javascript
function foo (a, b, c) {
    return a + b + c;
}

var bound = bind(foo, [1, 2, 3]);

bound(); // 6
```

#### With context

functions which do rely on `this` will require a context.

```javascript
var foo = [1, 2, 3],
    bound = bind(foo.join, foo, [' and ']);

bound(); // "1 and 2 and 3"
```
