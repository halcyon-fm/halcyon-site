const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                type: "asset/resource"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ],
                    plugins: [
                        '@babel/transform-runtime'
                    ]
                }
            }
        ]
    },
    devServer: {
        static: "./build",
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
            favicon: "./src/favicon.png",
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/RELEASES", to: "r" },
                { from: "src/website_riff.mp3", to: "website_riff.mp3" }
            ]
        }),
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
    },
};
