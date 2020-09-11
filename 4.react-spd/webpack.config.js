const path = require("path");

module.exports = {
    name: "react-spd-setting",
    mode: "development",
    devtool: "eval",
    resolve: {
        extensions: [".js", ".jsx"],
    },

    entry: {
        app: ["./client-spa"],
    },

    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: [
                        "@babel/plugin-proposal-class-properties",
                        "react-hot-loader/babel",
                    ],
                },
            },
        ],
    },

    output: {
        path: path.join(__dirname),
        filename: "app.js",
    },
};
