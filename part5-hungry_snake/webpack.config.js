import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// 根目錄(絕對路徑) /Users/antonio2620/Desktop/練習/typescript-practice/part3-webpack
// console.log(__dirname);

export default {
  mode: "production",
  watch: true,
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"), // ../part5-hungry_snake/dist
    filename: "bundle.js",
    environment: { // 針對特定語法的兼容性調整，現在沒有 IE 了，不知道必要性如何
      arrowFunction: false, // 不使用箭頭函式
      const: false, // 不使用 const
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // 載入ts結尾的檔案進行打包
        use: [
          // babel 設定
          {
            loader: "babel-loader", // 加載器
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    // 要兼容的目標環境
                    targets: {
                      ie: "11", // 兼容性差，最能看出差別
                    },
                    corejs: "3", // core-js 版本
                    useBuiltIns: "usage", // 加載core-js的方式，usage表示依需求載入
                  },
                ], // 指定環境套件
              ], // 預設執行環境
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  ["postcss-preset-env", { browsers: "last 2 versions" }],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
