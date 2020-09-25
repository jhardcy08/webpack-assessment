var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : {
        main: './src/js/index.js',
        vendor:
        [
            './src/js/vendors/vendor1.js', 
            './src/js/vendors/vendor2.js'
        ]
    },
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: '[contentHash].js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            }},
            {test : /\.css$/, use:['style-loader', 'css-loader']},
            {test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins : [
        new HtmlWebpackPlugin ({
            template : './public/index.html',
          
        })
    ]
}