const result = require("esbuild").buildSync({
    entryPoints: ["src/index.tsx"],
    sourcemap: "external",
    write: true,
    minify: true,
    bundle: true,
    outfile: "dist/bundle.js",
    platform: "browser",
})

