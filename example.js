import process from "process"
import bender from "./main.js"

const { stdout, stdin } = process

const RAD = 180 / Math.PI

// Print labels
"x y angle reach".split(" ").forEach((tab) => {
  stdout.write(`${tab}\t`)
})

// Next
stdout.write("\n")

// Enable mouse reporting
stdout.write("\x1b[?1005h")
stdout.write("\x1b[?1003h")

// Report each character
stdin.setRawMode(true)

// Follow mouse
stdin.on("data", (chunk) => {
  const input = chunk.toString("utf-8")

  // Ctrl+c
  if (input === "\u0003") {
    // Done
    process.exit()
  }

  // Box size
  const { columns: w, rows: h } = stdout

  // Mouse coordinates
  const mouse = {
    x: input.charCodeAt(4) - 32,
    y: input.charCodeAt(5) - 32,
  }

  // From center
  const delta = {
    x: mouse.x - Math.floor(w * 0.5),
    y: mouse.y - Math.floor(h * 0.5),
  }

  // Convert
  const polar = bender(delta.x, delta.y)
  const theta = { azimuth: polar.azimuth * RAD }

  // Merge and stringify
  const store = Object.assign({}, delta, polar, theta)
  const score = Object.keys(store).map(k => store[k]).map(k => k.toFixed(2)).reduce((k, v) => `${k}\t${v}`)

  // Same line print out
  stdout.clearLine()
  stdout.cursorTo(0)

  stdout.write(score)
})

process.on("exit", () => {
  // Turn off mouse reporting
  stdout.write("\x1b[?1005l")
  stdout.write("\x1b[?1003l")

  // Be safe
  stdout.write("\n")
})
