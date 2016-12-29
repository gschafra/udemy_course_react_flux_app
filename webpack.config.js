var path = require('path');
var webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: [
        // Webpack Development Server mit Hot Reloading
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        path.resolve(__dirname, 'src/main.jsx')
    ],
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            load: 'babel',
            loaders: [
                'react-hot',
                'jsx?harmony'
            ]/*,
            query: {
                presets: ['react'],
                plugins: ['transform-runtime']
            }*/
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    plugins: [
        /*new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin("app.css"),*/
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devtool: 'source-map'
}
