const esbuild = require("esbuild");

run();

async function run() {
  const result = await esbuild.build({
    // No errors
    entryPoints: ["./app.jsx"],

    external: ["react", "react-dom"],
    write: false,
    bundle: true,
  });

  console.log(
    "results: ",
    result,
    Buffer.from(result.outputFiles[0].contents).toString()
  );
}
