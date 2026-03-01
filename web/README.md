# 神話韓語 - Next.js 前端

React + Next.js 模組化版本，與根目錄靜態 HTML 並存。

## 啟動

```bash
cd web
npm install
```

**靜態資源**：請將專案根目錄的 `assets` 複製到 `web/public/assets`，圖片路徑才會正確。

```bash
# 在專案根目錄執行（神話韓語 資料夾）
xcopy /E /I assets web\public\assets
# 或手動複製 assets 資料夾到 web/public/
```

然後啟動開發伺服器：

```bash
npm run dev
```

瀏覽 [http://localhost:3000](http://localhost:3000)。

## 結構

- `app/layout.jsx` - 根 layout，載入共用 CSS、Header、Footer、Modal
- `app/page.jsx` - 首頁
- `app/checkout/page.jsx` - 結帳（NAVBAR 與全站一致）
- `app/login/page.jsx`、`app/courses/page.jsx` 等 - 各頁面
- `components/Header.jsx` - 全站導覽列（會員登入、關於我們、課程列表、最新消息、學員見證、搜尋、購物車）
- `components/Footer.jsx` - 頁尾
- `components/ModalLegal.jsx` - 條款與隱私權彈窗
- `components/Layout.jsx` - 組合 Header + children + 點我試聽 + Footer + Modal

樣式沿用根目錄 `styles.css`（在 layout 中 import）。
