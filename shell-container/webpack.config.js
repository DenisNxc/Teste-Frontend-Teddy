const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "welcome": "http://localhost:4201/remoteEntry.js",
    "home": "http://localhost:4202/remoteEntry.js",
    "cliente": "http://localhost:4203/remoteEntry.js",
    "produto": "http://localhost:4204/remoteEntry.js"
  },

  shared: {
    ... shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
  },

});
