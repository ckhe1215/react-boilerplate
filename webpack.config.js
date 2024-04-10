import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = path.resolve();
export default {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.min.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      //index.html 자동 생성되도록 template 옵션 설정
      template: "./src/index.html",
    }),
  ],
};
