const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        config.module.rule('svg').exclude.add(resolve('src/icon')).end()

        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icon'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}
