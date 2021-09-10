const path = require("path");
const WebpackObfuscator = require("webpack-obfuscator");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env) => {
    const isDevMode = env.mode === "development";
    const useSettings = isDevMode
        ? "ts-loader"
        : [
              {
                  loader: WebpackObfuscator.loader,
                  options: {
                      rotateStringArray: true,
                  },
              },
              "ts-loader",
          ];

    return {
        mode: env.mode,
        entry: "./src/ts/main.ts",
        devtool: isDevMode ? "eval-source-map" : false,
        output: {
            filename: "[name].js",
            sourceMapFilename: "[file].map[query]",
            path: path.resolve(__dirname, "dist"),
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: useSettings,
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"],
                },
            ],
        },
        plugins: [new MiniCssExtractPlugin({ filename: "[name].css" })],
        optimization: {
            minimizer: [new CssMinimizerPlugin(), "..."],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
    };
};
