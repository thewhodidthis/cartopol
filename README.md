## about

Poor man's cartesian to polar calculator.

## setup

Download from the _npm_ registry:

```sh
# Add to package.json
npm install @thewhodidthis/cartopol
```

## usage

Try the example:

```sh
node node_modules/poltocar/example
```

Give it _x_ and _y_ cartesian coordinates, get an `{ azimuth, radius }` object literal in return.

```js
console.log(require('cartopol')())
```

## see also

- [poltocar](https://github.com/thewhodidthis/poltocar)
