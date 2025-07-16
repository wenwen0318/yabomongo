# 🎰 Random Image Slot 抽選圖片跑馬燈

一個用 React 製作的簡易圖片抽選器，支援圖片跑馬燈動畫、抽選按鈕圖片化、圖片自動置中顯示。
可部署至 GitHub Pages 或任何靜態網站服務，適合抽獎、遊戲轉蛋等用途。

## 🔧 功能特色

- ✅ 自動讀取圖片清單（例如 `/yabomons/001.png ~ 010.png`）
- ✅ 點擊圖片按鈕開始跑馬燈效果，約 5 秒後隨機停下
- ✅ 圖片與按鈕皆置中顯示
- ✅ 可輕鬆擴增圖片數量，只需放入對應檔名圖片即可

## 🖼️ 圖片格式

請將圖片放在： `/public/yabomons/` 資料夾下，檔名為三位數編號格式

抽選按鈕圖片放在：`/public/images/spin-button.png`

## 🚀 開發與執行

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev
```
啟動後請開啟：http://localhost:5173

## 🌐 部署至 GitHub Pages
1. 編輯 vite.config.js：
    ```js
    export default {
    base: '/your-repo-name/', // 將此處改為你的 GitHub repo 名稱
    };
    ```
2. 在 package.json 加入：
    ```json
    "scripts": {
    "build": "vite build",
    "deploy": "gh-pages -d dist"
    }
    ```
3. 安裝 gh-pages 並部署：
    ```bash
    npm install --save-dev gh-pages
    npm run deploy
    ```


## 📝 授權
MIT License