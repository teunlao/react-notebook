import * as esbuild from 'esbuild-wasm';

// eslint-disable-next-line import/prefer-default-export
export const unpkgPathPlugin = (): esbuild.Plugin => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        console.log('onResolve', args);
        return { path: args.path, namespace: 'a' };
      });

      build.onLoad({ filter: /.*/ }, async (args: any) => {
        console.log('onLoad', args);

        if (args.path === 'index.js') {
          return {
            loader: 'jsx',
            contents: `
              console.log(message);
            `,
          };
        }
        return null;
      });
    },
  };
};
