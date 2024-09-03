const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'production',
    module: {
    rules: [
        {
        test: /\.html$/,
        use: [
            {
            loader: "html-loader",
            options: { minimize: true } 
            }
        ]
        }
    ]
    },
    devServer: {
        hot: false, // disable HMR
        open: {
            app: {
            name: 'Firefox Developer Edition', 
            }
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
}