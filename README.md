# esbuild-stdin-external-bug

This repo is intended to demonstrate a bug found in esbuild. The `externals` config is not respected when `stdin` is used.

In the success case, the build succeeds when the app is referenced using the `entryPoints` config. However, if `stdin.contents` is used, esbuild fails.

```bash
# node v12.20.1

# install deps
$ yarn install

# build succeeds with entryPoints
$ node esbuild-entrypoints.js


# build fails with stdin
$ node esbuild-stdin.js

# ./app.jsx:2:29: error: Could not resolve "react" (mark it as external to exclude it from the bundle)
# ./app.jsx:3:30: error: Could not resolve "react-dom/server" (mark it as external to exclude it from the bundle)

```
