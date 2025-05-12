const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    welcome: "welcome-coral.vercel.app/remoteEntry.js",
    home: "home-teddy.vercel.app/remoteEntry.js",
    cliente: "cliente-teddyy.vercel.app/remoteEntry.js",
    produto: "produto-teddy.vercel.app/remoteEntry.js"
  },

  shared: {
    ... shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
  },

});
