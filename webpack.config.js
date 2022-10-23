const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMiniExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {

    mode: 'development',

    entry: {
        main: './src/index.js',
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[contenthash].bundle.js',
        assetModuleFilename: 'images/[name][ext]',
        asyncChunks: true,
        clean: true
    },


    module: {

        rules: [
            {
                test: /\.(png|svg)$/,
                type: 'asset/resource'
            },

            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            configFile: path.resolve("./build_config/babel.config.json")
                        }
                    }
                ]
            },

            {
                test: /\.css$/i,
                use: [
                    {
                        loader: CssMiniExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: path.resolve("./build_config/postcss.config.js")
                            },
                        }
                    },
                ],
            },

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: CssMiniExtractPlugin.loader,
                    },
                    { 
                        loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                config: path.resolve("./build_config/postcss.config.js")
                            },
                        }
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },

        ],
    },

    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },

    plugins: [
        new CssMiniExtractPlugin(),
        new HtmlWebpackPlugin({ template: 'src/index.html' })
    ],

}
