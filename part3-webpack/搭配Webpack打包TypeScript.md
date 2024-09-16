# 搭配 Webpack 打包 TypeScript
## 套件安裝
### 必備一
```
pnpm add -D webpack webpack-cli typescript ts-loader
```
- **webpack-cli：** 可以在終端機透過命令提示字元操作 webpack
- **ts-loader：** webpack 預設只能打包 js 跟 json 格式，安裝對應 loader 以整合 webpack 和 ts 編譯器

### 必備二
以下套件可以解決 js 在不同環境執行的相容性問題
```
pnpm add -D @babel/core @babel/cli @babel/preset-env babel-loader core-js
```
- **babel：** 透過編譯轉換 js 版本
- **core-js：** 模擬 js 執行的環境，可以讓較新的 js 程式在較舊的環境運作

### 視需求
```
pnpm add -D html-webpack-plugin
```
- **html-webpack-plugin：** 自動生成 html 文件並引入打包好的檔案，便於測試
  - **title：** 生成的 html 標題
  - **template：** 生成文件套用的模板
  - 實際套用方式請見 webpack.config.js


## webpack.config.js 常用設定選項
>提醒：接下來用到的 webpack 跟 babel 設定都只是跟著課程做，官方都有提供設定模板，未必要參考本專案的做法。

[官方文件（中文）](https://webpack.docschina.org/concepts/)
- **mode** - 可選 production 或 development，預設 production
- **watch** - 設定 true 可以**自動偵測檔案變化，無需重開測試環境**，預設 false
- **entry** - 入口檔案
- **output** - 打包輸出設定
  - **path** - 輸出的目標目錄
  - **filename** - 打包後的檔案名稱
- **module** - webpack編譯、打包的對象模組相關設定
  - **rules** - 設定加載（loader）相關的規則，使用陣列包裝多個規則
    - **test** - 指定規則生效的檔案，使用正規表達式設定
    - **use** - 載入檔案使用的 loader，**會根據陣列元素執行**
    - **exclude** - 編譯時要排除的檔案，一般設定 node_modules（已經沒有必要編譯）
- **plugins** - 載入插件
- **resolve** - webpack 預設只有 js 可以當成模組，可以在此設定其他能當作模組引入程式的檔案格式
  ```js
  // 範例
  // module1 是 ts 格式，沒有設定 resolve 會報錯
  import { hi } from "./module1";
  ```
  - **extensions** - 可以作為模組使用的格式，輸入副檔名


## babel 設定
直接上範例：

```js
// webpack.config.js
module: {
  rules: [
    {
      test: /\.ts$/,
      use: [
        // babel 設定，可以把這段註解掉，比較差別
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
        // ...其他 loader
        ],
      exclude: /node_modules/,
    },
  ],
},
```
### 補充說明：core-js 套件
假設程式中使用到較新的語法，但想支援的環境（如：IE 11）無法使用，編譯時會讀取 core-js 對該語法的實作，轉換成支援環境可以運作的版本。


## 套用設定
開啟 package.json 並新增
```json
"scripts": {
  "build": "webpack",
  // or
  "build": "webpack --config webpack.config.js",
  // ...其他設定
}
```
- 單一 config：_webpack_  
- 複數 config：_webpack --config \[檔名\]_ 指定要套用的設定

以後只要在終端機輸入 _npm run duild_ 便會根據設定檔執行 webpack。