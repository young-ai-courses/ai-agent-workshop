# 🚀 8/13 懶人包 — Fork → Deploy → 開始做專案

> **目標**：5 分鐘內讓你的專案上線，之後用 Cursor 或 Claude Codex 邊改邊看

---

## Step 1：Fork 這個 Repo

1. 到 [github.com/young-ai-courses/ai-agent-workshop](https://github.com/young-ai-courses/ai-agent-workshop)
2. 點右上角 **Fork** → Create fork
3. 你現在有自己的副本了

## Step 2：一鍵 Deploy 到 Vercel

1. 到 [vercel.com](https://vercel.com) 用 GitHub 登入（免費）
2. 點「Add New Project」
3. Import 你剛 fork 的 `ai-workflow-demo`
4. ⚠️ **Root Directory 改成 `starter-kit`**（不是根目錄）
5. 點 Deploy → 等 30 秒 → 你的網站就上線了 🎉

> 你會拿到一個 `https://你的名字-ai-workflow-demo.vercel.app` 網址

## Step 3：用 IDE 開始改

兩個都免費、選一個：

### 方案 A — Cursor（推薦，跟 Aaron 老師同一套）

1. 下載 [cursor.sh](https://cursor.sh)
2. Clone 你的 repo：`git clone https://github.com/你的帳號/ai-workflow-demo`
3. 用 Cursor 打開 `starter-kit/` 資料夾
4. 打開 Cursor 的 AI（Cmd+K 或 Ctrl+K），跟它說你要做什麼
5. 改完 → `git push` → Vercel 自動更新

### 方案 B — Claude Codex（瀏覽器直接用，免裝軟體）

1. 到 [claude.ai](https://claude.ai)（免費帳號）
2. 開一個新 Project → 把你的需求貼給它
3. 它產出 code → 你複製回 `starter-kit/app/page.jsx`
4. Push → Vercel 自動更新

> 💡 **不用選「最好的」**，選你用起來最順的。兩個之後都可以換

## Step 4：改成你的專案

打開 `starter-kit/app/page.jsx`，跟 AI 說：

> 「把這個頁面改成 _____（你的專案名稱），功能是 _____」

AI 會幫你重寫整個頁面。Push → 上線。就這樣。

---

## 🗓 時間表

| 日期 | 里程碑 |
|------|--------|
| **8/13（今天）** | Fork + Deploy + 決定專案方向 |
| 8/14 – 9/7 | **自行完成產品**（用 Cursor/Codex 邊做邊推） |
| **9/8** | Aaron 老師 DEMO Pitch 準備(1)（你要能展示東西） |
| **9/15** | DEMO Pitch 準備(2) |
| **10 月初** | 🎤 Demo Day 正式上台（評審是真業主） |

> ⚠️ **8/13 → 9/8 這段時間沒有人幫你做產品**，你們組自己安排時間完成。
> 遇到技術問題 → 問 AI（Cursor / Claude / ChatGPT）
> 遇到方向問題 → Demo Day 前會有 Office Hour

---

## 🛠 技術棧說明

| 工具 | 用途 | 費用 |
|------|------|------|
| **Vercel** | 部署（你的網站住在這） | 免費 |
| **Next.js** | 前端框架（Vercel 原生支援） | 免費 |
| **Cursor** | IDE + AI 助手 | 免費版夠用 |
| **Claude Codex** | AI 幫你寫 code | 免費 |
| **GitHub** | 版本控制 + 觸發自動部署 | 免費 |

你**不需要**：自己買 server、設 domain、學 DevOps。Push 就上線。

---

## ❓ FAQ

**Q: 我沒學過 React / Next.js，可以嗎？**
A: 可以。跟 AI 說你要什麼，它寫給你。你只要會 push。

**Q: 我的專案不是網頁怎麼辦？**
A: Demo Day 要展示，所以至少要有一個能「打開給人看」的東西。用這個框架做一個展示頁 / dashboard / 操作介面都行。

**Q: 可以改技術棧嗎？**
A: 可以，但建議先用這套跑起來再說。這套的好處是 Push = 上線，零設定。

**Q: Rate limit 怎麼辦？**
A: Claude 免費版有每日上限。撞到的話切 ChatGPT Free / Cursor Free / 明天再來。

**Q: 我想加後端 API / 資料庫？**
A: 可以，Next.js 支援 API routes（`app/api/` 資料夾）。Vercel 也有免費的 KV / Postgres。等你需要時再加就好。
