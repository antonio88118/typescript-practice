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
    path: path.resolve(__dirname, "dist"), // ../part3-webpack/dist
    filename: "bundle.js",
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
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
