'use strict'
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'src')

module.exports = {
    entry: APP_DIR + '/index.js',
    target: 'node',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}