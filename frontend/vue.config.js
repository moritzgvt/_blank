module.exports = {
  pwa: {
    name: 'Katrin Mentz',
    themeColor: '#FFFFFF',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'white',
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/assets/js/service-worker.js"
    }
  },
  configureWebpack: {
    output: {
        crossOriginLoading: 'anonymous'
    }
  }
};