import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.es',
  plugins: [
    babel(),
  ],
  targets: [
    {
      format: 'iife',
      indent: true,
      sourceMap: true,
      moduleName: 'cartopol',
      dest: 'dist/cartopol.js'
    },
    {
      format: 'cjs',
      dest: 'index.js'
    }
  ]
};
