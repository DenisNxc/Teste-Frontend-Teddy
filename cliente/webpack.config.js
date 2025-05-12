const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'cliente',

  exposes: {
    './Component': './src/app/app.component.ts',
    './ClientesSelecionados': './src/app/clientes-selecionados/client-selected.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
  },

});
