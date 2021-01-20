import * as esbuild from 'esbuild-wasm';

const unpkgPathPlugin = (): esbuild.Plugin => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      // Handle relative paths in a module
      build.onResolve({ filter: /(^index\.js$)/ }, (args: any) => {
        return { path: 'index.js', namespace: 'a' };
      });

      // Handle relative paths in a module
      build.onResolve({ filter: /^\.+\// }, (args: any) => {
        return {
          namespace: 'a',
          path: new URL(args.path, `https://unpkg.com/${args.resolveDir}/`).href,
        };
      });

      // Handle main file in a module
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        return {
          namespace: 'a',
          path: `https://unpkg.com/${args.path}`,
        };
      });
    },
  };
};

export default unpkgPathPlugin;
