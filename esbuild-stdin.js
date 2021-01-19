const esbuild = require("esbuild");

run();

async function run() {
  const result = await esbuild.build({
    // This errors, even with external set below
    // ./app.jsx:2:29: error: Could not resolve "react" (mark it as external to exclude it from the bundle)
    // ./app.jsx:3:30: error: Could not resolve "react-dom/server" (mark it as external to exclude it from the bundle)
    stdin: {
      contents: `
      import * as React from "react";
      import * as Server from "react-dom/server";

      let Greet = () => <h1>Hello, world!</h1>;
      console.log(Server.renderToString(<Greet />));
      `,
      sourcefile: "./app.jsx",
      loader: "jsx",
    },

    // I presume this should be respected with stdin like it is with entrypoints
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
