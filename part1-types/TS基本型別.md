# TS 基本型別
## 開始前的準備
在全域環境安裝 TypeScript，即可在任何地方開啟終端機執行 tsc 指令。
```
pnpm add -g typescript
```

## 基本型別介紹（目錄）
請參照程式中的註解。
### types1.ts
  1. 型別宣告
  2. 聯合型別 Union Types
  3. 任意型別 any
  4. 未知型別 unknown
  5. void 與 never
### types2.ts
  1. object
  2. function
  3. array
  4. 元組 tuple：ts 新增型別，即長度、元素型別固定的 array
  5. 列舉 enum：ts 新增型別
### types3.ts
  1. 型別別名 type
  2. 補充：& 的用法

## 在終端機編譯 TS 檔案
```console
tsc 檔名.ts
```
可以先用 testPage 引入編譯後產生的 js 測試，後面的章節會介紹更便利且實務的測試方法。