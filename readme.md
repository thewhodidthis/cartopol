## about

Poor man's cartesian to polar calculator.

## setup

Fetch latest from GitHub:

```sh
# Add to 'package.json' dependencies
npm install thewhodidthis/cartopol
```

## usage

Try the example:

```sh
node node_modules/poltocar/example
```

Give it a set of coordinates, _x_ and _y_, get an `{ t, r }` object in return.

```js
console.log(require('cartopol')())
```

## see also

- [poltocar](https://github.com/thewhodidthis/poltocar)
