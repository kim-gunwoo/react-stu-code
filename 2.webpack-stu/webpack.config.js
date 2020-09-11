const path = require("path");

module.exports = {
    // webpack 설정 이름
    name: "word-relay-setting",
    mode: "development", // 개발용 , 실제 배포시 production
    devtool: "eval",
    resolve: {
        extensions: [".js", ".jsx"],
    },

    entry: {
        app: ["./client"],
    }, // 입력

    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: "babel-loader",
                options: {
                    // plugin 들의 모임 preset
                    //presets: ["@babel/preset-env", "@babel/preset-react"],
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                targets: {
                                    browsers: [
                                        "> 5% in KR",
                                        "last 2 chrome versions",
                                    ],
                                },
                                debug: true,
                            },
                        ],
                        "@babel/preset-react",
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties",
                        // webpack hot loader 사용
                        "react-hot-loader/babel",
                    ],
                },
            },
        ],
    },

    plugins: [],

    output: {
        path: path.join(__dirname, "dist"),
        filename: "app.js",
        publicPath: "/dist",
    }, // 출력
};
