## about

Poor man's cartesian to polar calculator.

## setup

Download from the _npm_ registry:

```sh
# Add to package.json
npm install cartopol
```

Source from an import map to use with Deno or in-browser directly:

```json
{
  "imports": {
    "cartopol": "https://cdn.jsdelivr.net/npm/cartopol@latest/main.js"
  }
}
```

## usage

Try the example:

```sh
node node_modules/cartopol/example
```

Give it _x_ and _y_ cartesian coordinates, get an `{ azimuth, radius }` object literal in return.

```js
import("cartopol").then(m => console.log(m.default()))
```

## see also

- [poltocar](https://github.com/thewhodidthis/poltocar)
