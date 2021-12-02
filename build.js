const result = require("esbuild").buildSync({
    entryPoints: ["src/index.jsx"],
    sourcemap: "external",
    write: true,
    minify: true,
    bundle: true,
    outfile: "dist/bundle.js",
})

