const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: {index: './src/index.ts'},
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(css|css)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },{
                test: /\.(png|svg|jpg|jped|gif)$/i,
                type: 'asset/resource',
            }, {
                test: /\.(woff|woff2|eot|ttf|oft)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: "Restaurant",
            template: "./src/template/index.html"
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true
    },
    optimization: {
        runtimeChunk: 'single'
    }

}