const path = require('path')

// const withCSS = require('@zeit/next-css')

module.exports = {
  trailingSlash: true,
  reactStrictMode: false,
  experimental: {
    esmExternals: false,
    jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    return config
  }
}

// next.config.js

// module.exports = withCSS({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1
//   }

//   /* Các cấu hình khác của Next.js (nếu có) */
// })
