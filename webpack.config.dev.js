import path from 'path';

export default {
    devtool: 'eval-source-map',
    entry: path.join(__dirname,'./client/index.js'),
    output: {
        path: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname,'client'),
                loaders: [ 'babel-loader' ],
            }
        ]
    },
    resolve:{
        extensions: ['.js']
    }
};