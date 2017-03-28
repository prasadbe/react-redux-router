const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    extractCSS = new ExtractTextPlugin('build/style/[name].[contenthash:20].css'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    WebpackAssetsManifest = require('webpack-assets-manifest');
const plugins = [
    extractCSS,
    // To prevent longterm cache of vendor chunks extract a 'manifest' chunk, then
    // include it to the app
    new webpack
        .optimize
        .CommonsChunkPlugin({
            names: ['lib', 'manifest']
        }),
    //automatically load the modules when the key is identified in a file
    new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', jquery: 'jquery'}),
    // create manifest json to refer assets in php file
    new WebpackAssetsManifest({
        output: 'build/webpack-manifest.json', publicPath: '/', writeToDisk: true //php needs this to read file from disk
    }),
    new CleanWebpackPlugin(path.resolve(__dirname + '/build'))
];
module.exports = {
    entry: {
        main: path.resolve(__dirname + '/js/index.js'),
        lib: ['jquery']
    },
    output: {
        path: path.resolve(__dirname + '/'),
        publicPath: '/',
        filename: 'build/js/[name].[chunkhash].js',
        chunkFilename: 'build/js/[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader'
            }, {
                test: /\.less$/,
                loader: extractCSS.extract({
                    fallback: 'style-loader', loader: `css-loader?sourceMap!less-loader?sourceMap`
                    //minimize css in build to avoid bundling newline chars in js chunk
                })
            }, {
                test: /\.css$/,
                loader: extractCSS.extract({
                    fallback: 'style-loader', loader: `css-loader?sourceMap!less-loader?sourceMap`
                    //minimize css in build to avoid bundling newline chars in js chunk
                })
            }, {
                test: /\.(jpe?g|png|gif|webp|mp3|ogg|woff|woff2|ttf|svg|eot)$/,
                exclude: [/node_modules/],
                loader: 'file-loader?name=[path][name].[ext]?[hash:8]'
            }, { //can't use [path] for images inside node_modules, so copy them to build
                test: /\.(jpe?g|png|gif|webp)$/,
                include: [/node_modules/],
                loader: 'file-loader?name=build/img/[name].[ext]?[hash:8]'
            }, { //can't use [path] for fonts inside node_modules, so copy them to build
                test: /\.(woff|woff2|ttf|svg|eot)$/,
                include: [/node_modules/],
                loader: 'file-loader?name=build/font/[name].[ext]?[hash:8]'
            }
        ]
    },
    plugins: plugins,
    watchOptions: {
        ignored: /(node_modules)/
    }
}