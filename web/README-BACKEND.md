# 神話韓語 - 後端與資料庫說明

依 **規格 5. 網站技術架構圖** 架設：

- **應用程式層**：Next.js（React + Next.js）→ 使用 **Next.js API Routes**（`app/api/`）
- **資料層**：**MySQL**
  - 正式環境：Linode Managed DB
  - 開發環境：MySQL（XAMPP 本機）

---

## 1. 技術棧

| 項目     | 說明 |
|----------|------|
| ORM      | Prisma |
| 資料庫   | MySQL |
| 密碼雜湊 | bcryptjs |
| API      | Next.js App Router `app/api/*/route.js` |

---

## 2. 環境設定

1. 複製環境變數範例：
   ```bash
   cp .env.example .env
   ```

2. 編輯 `.env`，設定 **DATABASE_URL**：
   - **XAMPP 本機**（預設 root、無密碼、port 3306）：
     ```
     DATABASE_URL="mysql://root:@localhost:3306/shenhua_korean"
     ```
   - 若 MySQL 有設密碼：
     ```
     DATABASE_URL="mysql://root:你的密碼@localhost:3306/shenhua_korean"
     ```
   - **正式環境**（Linode Managed MySQL）：向主機商取得連線字串後填入。

3. 在 MySQL 建立資料庫（本機 XAMPP 範例）：
   ```sql
   CREATE DATABASE shenhua_korean CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

---

## 3. 安裝依賴與 Prisma

```bash
npm install
npm run db:generate
```

---

## 4. 資料庫結構（建立表）

**開發環境**（不產生 migration 檔，直接同步 schema）：

```bash
npm run db:push
```

**或使用 migration（建議正式環境）**：

```bash
npm run db:migrate
```

依提示輸入 migration 名稱（例如 `init`）。

---

## 5. 種子資料（選用）

寫入後台管理者、範例會員、課程、方案、文章、學員見證等：

```bash
npm run db:seed
```

預設後台帳密：**admin@shenhua.com** / **admin123**

---

## 6. API 一覽

| 方法 | 路徑 | 說明 |
|------|------|------|
| POST | `/api/auth/login` | 會員登入 |
| POST | `/api/auth/register` | 會員註冊 |
| POST | `/api/admin/login` | 後台登入（回傳 token） |
| GET  | `/api/courses` | 課程列表（上架） |
| GET  | `/api/courses/[id]` | 課程詳情 |
| GET  | `/api/plans` | 方案列表 |
| GET  | `/api/articles` | 文章列表 |
| GET  | `/api/articles/[id]` | 文章詳情 |
| GET  | `/api/testimonials` | 學員見證列表 |
| GET  | `/api/testimonials/[id]` | 單一見證 |
| GET  | `/api/instructors` | 師資列表 |
| GET  | `/api/instructors/[id]` | 師資詳情 |
| GET  | `/api/admin/orders` | 訂單列表（需後台 token） |
| GET  | `/api/admin/subscriptions` | 訂閱狀態（需後台 token） |
| GET  | `/api/admin/members` | 會員列表（需後台 token） |

後台 API 需在 request header 帶入：`Authorization: Bearer admin_<id>`（與 `/api/admin/login` 回傳的 token 一致）。

---

## 7. Prisma Studio（檢視/除錯用）

```bash
npm run db:studio
```

瀏覽器會開啟 Prisma Studio，可查看與手動編輯資料表。

---

## 8. 後續可擴充

- **金流**：藍新/綠界 Webhook 接收付款結果，更新 `Order`、建立/更新 `Subscription`
- **影片**：課程章節的 `muxPlaybackId` 由 Mux 取得後寫入
- **檔案**：課程封面、文章圖片可上傳至 Linode Object Storage，網址存進對應欄位
- **通知**：SendGrid / Mailgun / SES 發送忘記密碼、交易通知
